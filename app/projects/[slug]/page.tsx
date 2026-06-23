import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/project-detail-page";
import { projectsData } from "@/lib/data";
import { resolveTranslation } from "@/lib/i18n";
import { PERSON_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

function getProject(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}

function getProjectText(project: (typeof projectsData)[number]) {
  const title = resolveTranslation(
    "en",
    `projectsData.${project.titleKey}.title`
  );
  const description = resolveTranslation(
    "en",
    `projectsData.${project.titleKey}.description`
  );

  return {
    title: typeof title === "string" ? title : project.titleKey,
    description: typeof description === "string" ? description : undefined,
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: `Project not found | ${PERSON_NAME}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { title, description } = getProjectText(project);
  const path = `/projects/${project.slug}`;

  return {
    title: `${title} | ${PERSON_NAME}`,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title: `${title} | ${PERSON_NAME}`,
      description,
      images: [
        {
          url: new URL(project.imageUrl.src, SITE_URL).toString(),
          width: project.imageUrl.width,
          height: project.imageUrl.height,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${PERSON_NAME}`,
      description,
      images: [new URL(project.imageUrl.src, SITE_URL).toString()],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
