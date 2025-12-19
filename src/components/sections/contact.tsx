import { Button } from '@/components/ui/button';
import { contact, socialLinks } from '@/lib/data';
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="w-full">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Have a project in mind, or just want to say hello? Feel free to reach out through email or my social channels.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="space-y-8 flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">{contact.phone}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
               <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Socials</h3>
                <div className="flex gap-2 mt-1">
                   <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                   <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                   <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
