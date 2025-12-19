import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
    const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

    return (
        <section id="about" className="w-full bg-card">
            <div className="container grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                        <p>
                            Motivated B.Tech graduate specializing in Industrial IoT with a strong interest in Cloud Engineering. Possess a solid understanding of core cloud concepts, Linux fundamentals, and Python programming, with hands-on exposure through academic coursework and project-based learning. Demonstrated strong analytical thinking, problem-solving abilities, and a structured approach to learning new technologies. Comfortable working in collaborative environments and adapting quickly to evolving technical requirements. Eager to contribute to cloud-based solutions, support infrastructure and application workflows, and grow technical expertise through an entry-level or internship opportunity in a dynamic organization.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-2 flex justify-center">
                  {aboutImage && (
                      <Image
                          src={aboutImage.imageUrl}
                          alt={aboutImage.description}
                          data-ai-hint={aboutImage.imageHint}
                          width={500}
                          height={500}
                          className="rounded-lg object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
                      />
                  )}
                </div>
            </div>
        </section>
    );
}
