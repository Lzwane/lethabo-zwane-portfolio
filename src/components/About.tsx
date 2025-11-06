import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "21+", label: "Certificates" },
  { icon: Award, value: "3", label: "Badges" },
  { icon: Briefcase, value: "2", label: "Internships" },
  { icon: Users, value: "5+", label: "Leadership Roles" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate technologist and leader dedicated to making a difference through innovation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="glass-effect hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="text-center p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-effect p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">BSc Mathematical Sciences</h4>
                <p className="text-muted-foreground">Sefako Makgatho Health Sciences University</p>
                <p className="text-sm text-muted-foreground">2024 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">High School</h4>
                <p className="text-muted-foreground">Daspoort Secondary School</p>
                <p className="text-sm text-muted-foreground">Representative Council of Learners (RCL) - 2022</p>
              </div>
            </div>
          </Card>

          <Card className="glass-effect p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Current Roles
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Deputy Chief Technical Officer</h4>
                <p className="text-muted-foreground">ML&L Solutions INC.</p>
                <p className="text-sm text-muted-foreground">2025 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Student Advisor</h4>
                <p className="text-muted-foreground">Sefako Makgatho University</p>
                <p className="text-sm text-muted-foreground">2025 - Present</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bio */}
        <Card className="glass-effect p-8 mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a driven BSc Mathematical Sciences student with a passion for technology, leadership, and innovation. 
            Currently serving as Deputy CTO at ML&L Solutions INC. and Student Advisor at SMU, I balance technical 
            excellence with community impact. My journey spans multiple leadership roles including Project Manager at 
            Enactus SMU, Community Outreach Manager at Geekulcha Student Society, and various committee positions. 
            With 21 certificates, 3 badges, successful hackathon wins, and experience from bootcamps with AWS, Microsoft, 
            and WeThinkCode, I'm committed to leveraging technology for positive change.
          </p>
        </Card>
      </div>
    </section>
  );
};
