import Link from 'next/link';
import { Github, Linkedin, Twitter, Cloud } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Cloud className="h-6 w-6 text-primary hidden sm:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by a Cloud Enthusiast. &copy; {year} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
