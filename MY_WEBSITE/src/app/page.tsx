
import { getRepoData } from "@/lib/github-server";
import { PortfolioPage } from "@/components/portfolio-page";

export default async function Page() {
  const repoData = await getRepoData();

  return <PortfolioPage initialRepoData={repoData} />;
}
