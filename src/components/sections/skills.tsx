import { skills } from '@/lib/data';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <section id="skills" className="w-full">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A snapshot of the technologies I work with to build modern cloud solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-12">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary bg-card/50 dark:bg-muted/20">
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
