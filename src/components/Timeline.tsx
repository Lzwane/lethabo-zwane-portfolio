import { Card } from "@/components/ui/card";
import { Building2, Users, Award, Briefcase } from "lucide-react";

const timelineEvents = [
  {
    year: "2025",
    icon: Briefcase,
    title: "Deputy Chief Technical Officer",
    organization: "ML&L Solutions INC.",
    description: "Leading technical strategy and innovation initiatives",
    color: "text-blue-500",
  },
  {
    year: "2025",
    icon: Users,
    title: "Community Outreach Manager",
    organization: "Geekulcha Student Society SMU",
    description: "Driving community engagement and tech outreach programs",
    color: "text-purple-500",
  },
  {
    year: "2024-2025",
    icon: Award,
    title: "Project Manager",
    organization: "Enactus SMU",
    description: "Managing social entrepreneurship projects and team coordination",
    color: "text-green-500",
  },
  {
    year: "2024",
    icon: Building2,
    title: "Secretary",
    organization: "Enactus SMU",
    description: "Administrative excellence and organizational documentation",
    color: "text-yellow-500",
  },
  {
    year: "2024",
    icon: Users,
    title: "Sub-committee Member",
    organization: "Madeira Isles Residence",
    description: "Contributing to residence management and student welfare",
    color: "text-pink-500",
  },
  {
    year: "2024",
    icon: Briefcase,
    title: "Internships",
    organization: "CodeAlpha & Prodigy InfoTech",
    description: "Hands-on software development and technical projects",
    color: "text-cyan-500",
  },
  {
    year: "2024",
    icon: Award,
    title: "Started BSc Mathematical Sciences",
    organization: "Sefako Makgatho Health Sciences University",
    description: "Beginning journey in advanced mathematics and sciences",
    color: "text-indigo-500",
  },
  {
    year: "2022",
    icon: Users,
    title: "High School RCL Representative",
    organization: "Daspoort Secondary School",
    description: "Student leadership and representation",
    color: "text-orange-500",
  },
];

export const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of leadership roles, education, and professional experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="glass-effect p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-primary/10 ${event.color}`}>
                          <event.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary mb-1">{event.year}</div>
                          <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                          <p className="text-sm font-medium text-muted-foreground mb-2">{event.organization}</p>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
