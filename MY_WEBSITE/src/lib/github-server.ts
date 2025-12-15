import { RESUME_DATA } from "@/data/resume-data";
import { Repository } from "@/components/featured-repo";

export async function getRepoData(): Promise<Repository[]> {
    const initialData = (RESUME_DATA.open_source as unknown) as Repository[];

    const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    if (!token) {
        console.warn("GITHUB_TOKEN or NEXT_PUBLIC_GITHUB_TOKEN is not set, using static data");
        return initialData;
    }

    const updatedData = await Promise.all(
        initialData.map(async (repo) => {
            try {
                const apiUrl = repo.html_url.replace(
                    "https://github.com",
                    "https://api.github.com/repos"
                );

                const response = await fetch(apiUrl, {
                    headers: {
                        Accept: "application/vnd.github.v3+json",
                        Authorization: `token ${token}`,
                    },
                    next: { revalidate: 3600 }, // Cache for 1 hour
                });

                if (response.ok) {
                    const freshData = await response.json();
                    return {
                        ...repo,
                        stargazers_count: freshData.stargazers_count,
                        forks_count: freshData.forks_count,
                        language: freshData.language || repo.language,
                        description: freshData.description || repo.description,
                    };
                }
            } catch (error) {
                console.error(`Error fetching data for ${repo.name}:`, error);
            }
            return repo;
        })
    );

    return updatedData;
}
