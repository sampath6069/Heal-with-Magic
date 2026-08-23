import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore selected hospitality, residential, and commercial work by ${siteData.companyName}.`,
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Our Work"
      title="Selected interior and hospitality projects."
      description="View our work in hotels, restaurants, and commercial spaces. Select a project to see the available images and project details."
    >
      <ProjectExplorer expanded />
    </PageShell>
  );
}
