import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Here are some of the projects I&apos;m proud to have worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => {
            const image = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
              <Card key={project.slug} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card border-border/50 hover:border-primary/50">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={project.title}
                    data-ai-hint={image.imageHint}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                  />
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between bg-card/50 dark:bg-muted/20 pt-6">
                  {project.github_url && (
                    <Button variant="ghost" asChild>
                      <Link href={project.github_url} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </Link>
                    </Button>
                  )}
                  <Button asChild>
                    <Link href={`/projects/${project.slug}`}>
                      Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
