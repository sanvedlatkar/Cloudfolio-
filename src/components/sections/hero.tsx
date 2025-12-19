'use client';

import Link from 'next/link';
import { ArrowDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function HeroSection() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: 'Downloading CV',
      description: 'Your CV is now downloading.',
    });
  };

  return (
    <section id="hero" className="relative w-full border-b">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
      <div className="container relative z-10 grid grid-cols-1 gap-12 items-center min-h-[60vh] sm:min-h-[80vh]">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 py-2">
            Sanved
          </h1>
          <h2 className="text-2xl font-medium text-primary">
            Cloud & DevOps Engineer
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Passionate about building scalable, resilient, and automated cloud infrastructure. Turning complex problems into elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg">
              <Link href="#projects">
                <Eye className="mr-2 h-5 w-5" />
                View Projects
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" onClick={handleDownload}>
              <a href="/Sanved_Resume.pdf" download="Sanved_Resume.pdf">
                <ArrowDown className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
