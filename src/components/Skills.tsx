import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Cloud, Users, Lightbulb, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming & Development",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "React & Web Development", level: 88 },
      { name: "Data Structures & Algorithms", level: 85 },
    ],
  },
  {
    icon: Database,
    title: "Data Science & AI",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Generative AI", level: 80 },
      { name: "Data Analysis", level: 88 },
      { name: "Statistical Modeling", level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Services", level: 75 },
      { name: "Microsoft Azure", level: 72 },
      { name: "Docker & Kubernetes", level: 70 },
      { name: "CI/CD Pipelines", level: 75 },
    ],
  },
  {
    icon: Users,
    title: "Leadership & Management",
    skills: [
      { name: "Project Management", level: 92 },
      { name: "Team Leadership", level: 90 },
      { name: "Community Outreach", level: 88 },
      { name: "Strategic Planning", level: 85 },
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Problem Solving",
    skills: [
      { name: "Creative Thinking", level: 90 },
      { name: "Solution Architecture", level: 85 },
      { name: "Rapid Prototyping", level: 88 },
      { name: "Hackathon Experience", level: 92 },
    ],
  },
  {
    icon: TrendingUp,
    title: "Business & Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Public Speaking", level: 85 },
      { name: "Mentoring", level: 88 },
      { name: "Stakeholder Management", level: 82 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive showcase of technical abilities and soft skills developed through education, 
            internships, and hands-on projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-effect hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
