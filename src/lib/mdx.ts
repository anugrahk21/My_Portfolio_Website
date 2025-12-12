import { RESUME_DATA } from '@/data/resume-data';
import { BlogPost } from '@/components/blog-card';
import fs from 'fs';
import path from 'path';

// Get all blog posts from RESUME_DATA
export function getAllBlogPosts(): BlogPost[] {
  try {
    // Use the blogs array from RESUME_DATA
    const blogPosts = RESUME_DATA.blogs;

    // Filter for published posts and sort by date
    return blogPosts
      .filter(post => post.published === true || post.published === undefined)
      .sort((a, b) => {
        // Sort by date in descending order
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  } catch (error) {
    console.error("Error retrieving blog posts:", error);
    return [];
  }
}

// Get a blog post by slug with content loaded from markdown file
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const blogPosts = getAllBlogPosts();
    const post = blogPosts.find(post => post.slug === slug);

    if (!post) {
      throw new Error(`Blog post not found: ${slug}`);
    }

    // If it's an external URL, return as-is (no content to load)
    if (post.externalUrl) {
      return post;
    }

    // Try to load markdown content from Blog_Data directory
    try {
      const blogDataPath = path.join(process.cwd(), 'src', 'data', 'Blog_Data', `${slug}.md`);

      if (fs.existsSync(blogDataPath)) {
        const fileContent = fs.readFileSync(blogDataPath, 'utf-8');

        // Return the post with the loaded content
        return {
          ...post,
          content: fileContent,
        };
      } else {
        console.warn(`Markdown file not found for slug: ${slug} at path: ${blogDataPath}`);
        return post; // Return without content
      }
    } catch (fileError) {
      console.error(`Error reading markdown file for ${slug}:`, fileError);
      return post; // Return without content if file reading fails
    }
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    return null;
  }
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}