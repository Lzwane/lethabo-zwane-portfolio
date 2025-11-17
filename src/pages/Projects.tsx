import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Lightbulb, Building2, Zap, ScanLine, HeartPulse, MessageSquare, Landmark, ExternalLink, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Ubuntu RecruitFlow (AI Recruitment Assistant)",
    description: "An AI-powered recruitment assistant designed to streamline and simplify hiring. It helps recruiters generate optimized job descriptions, matches candidates intelligently to roles, and supports inclusive, mobile-first job applications — all tailored for the South African context. 🧠 Fair hiring, faster.",
    technologies: ["Next.js", "FastAPI", "Generative AI", "PostgreSQL", "Leadership"],
    category: "Leadership & AI for Social Good",
    link: "https://github.com/Lzwane/UbuntuRecruitFlow",
    icon: Users,
    color: "text-green-500",
  },
  {
    title: "Intellilearn-AI (Inclusive Learning Ecosystem)",
    description: "We are proposing the development of an Intellilearn-AI, an AI-powered inclusive learning ecosystem to bridge educational gaps for rural communities and students with disabilities. This comprehensive platform adapts to individual needs and fosters collaborative learning.",
    technologies: ["React", "TypeScript", "Node.js", "Generative AI", "Accessibility", "MongoDB"],
    category: "Innovation & Full-Stack",
    link: "https://github.com/Lzwane/Intellilearn-AI",
    icon: Lightbulb,
    color: "text-yellow-500",
  },
  {
    title: "ML&L Solution - Emmaceutics (Professional Showcase)",
    description: "Emmaceutics is pioneering breakthrough research in pharmaceutical development, focused on making life-saving treatments accessible to all through innovative drug formulation and cutting-edge synthesis technologies. (Professional Project for ML&L Solutions)",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Web Design", "Professional"],
    category: "Professional Web Dev",
    link: "http://www.emmaceuticspharma.co.za",
    icon: Building2,
    color: "text-blue-500",
  },
  {
    title: "TaskRush (On-Demand Service Platform)",
    description: "A modern, on-demand service platform that connects people who need help with everyday tasks (customers) with individuals who can complete those tasks for them (TaskRunners).",
    technologies: ["Full-Stack", "Node.js", "React", "Geo-location", "Mobile"],
    category: "Product Development",
    link: "https://github.com/Lzwane/TaskRush",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    title: "Handwritten Character Recognition",
    description: "I created a system that can recognize handwritten letters and characters. It can even be extended to read full words or sentences!",
    technologies: ["Python", "Deep Learning (CNNs)", "TensorFlow", "Computer Vision"],
    category: "Machine Learning & CV",
    link: "https://github.com/Lzwane/Handwritten_Character_Recognition",
    icon: ScanLine,
    color: "text-orange-500",
  },
  {
    title: "Disease Prediction from Medical Data",
    description: "I built a model to predict the chances of someone having a disease using medical data like symptoms and patient history. It uses labeled datasets and classification algorithms to make predictions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Classification Models", "HealthTech"],
    category: "Data Science & HealthTech",
    link: "https://github.com/Lzwane/Disease_Prediction_from_Medical_Data",
    icon: HeartPulse,
    color: "text-red-500",
  },
  {
    title: "Sentiment Analysis (NLP)",
    description: "Sentiment Analysis is an NLP method that figures out the emotional vibe of a text—whether it’s positive, negative, or neutral. It’s super handy for analyzing customer feedback, social media, and product reviews.",
    technologies: ["Python", "NLP (NLTK/spaCy)", "Data Analysis", "Visualization"],
    category: "Data Analysis & NLP",
    link: "https://github.com/Lzwane/Sentiment_Analysis",
    icon: MessageSquare,
    color: "text-cyan-500",
  },
  {
    title: "Credit Scoring Model",
    description: "I built a credit scoring model to predict how creditworthy individuals are using their financial history. I used classification algorithms and evaluated how accurate the model is.",
    technologies: ["Python", "Classification", "Pandas", "Jupyter", "Financial Modeling"],
    category: "Financial Modeling",
    link: "https://github.com/Lzwane/Credit_Scoring_Model",
    icon: Landmark,
    color: "text-gray-500",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Showcase of <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From high-impact AI solutions for social good to robust data science models and professional web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card
                className={cn(
                  "glass-effect hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:ring-2 hover:ring-primary/20",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={cn("p-2 rounded-lg bg-primary/10", project.color)}>
                        <project.icon className={cn("h-6 w-6", project.color)} />
                      </div>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-2xl mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    {project.link.includes('github') ? 'GitHub Repository' : 'Live Site'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-foreground">
                      <Code2 className="h-4 w-4 text-primary" />
                      Key Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}