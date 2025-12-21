import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * IMPORTANT:
 * Any new project MUST be added to `projects` data.
 * Otherwise the page will NOT be statically generated.
 * Required for S3 + CloudFront hosting.
 */
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Disable runtime routing (static-only)
 */
export const dynamicParams = false;

/**
 * Per-project SEO metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Cloudfolio`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `https://www.sslinfo.xyz/projects/${project.slug}`,
      images: [
        {
          url: "https://www.sslinfo.xyz/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: ["https://www.sslinfo.xyz/og-image.png"],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const image = PlaceHolderImages.find(
    (img) => img.id === project.imageId
  );

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="text-sm text-primary hover:underline mb-4 inline-block"
        >
          &larr; Back to Projects
        </Link>

        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          {project.shortDescription}
        </p>

        {image && (
          <Image
            src={image.imageUrl}
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full mb-8"
          />
        )}

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-headline text-2xl font-bold mb-4">
              About this project
            </h2>
            <p className="text-muted-foreground">
              {project.description}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.github_url && (
                <Button variant="outline" asChild>
                  <Link href={project.github_url} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </Link>
                </Button>
              )}

              {project.live_url && (
                <Button asChild>
                  <Link href={project.live_url} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
