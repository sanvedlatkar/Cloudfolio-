import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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

        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          {project.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          {project.shortDescription}
        </p>

        {image && (
          <Image
            src={image.imageUrl}
            alt={project.title}
            data-ai-hint={image.imageHint}
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full mb-8 shadow-lg"
          />
        )}

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-headline text-2xl font-bold mb-4">
              About this project
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-muted-foreground">
              <p>{project.description}</p>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Project Info</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {project.github_url && (
                    <Button variant="outline" asChild>
                      <Link
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Link>
                    </Button>
                  )}

                  {project.live_url && (
                    <Button asChild>
                      <Link
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Site
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
