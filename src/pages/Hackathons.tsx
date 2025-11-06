import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Code, Lightbulb } from "lucide-react";

const hackathons = [
  {
    id: 1,
    title: "FinTech Innovation Challenge 2024",
    date: "March 2024",
    placement: "1st Place",
    team: "Team Innovators",
    project: "SmartPay - AI-Powered Payment Analytics",
    description:
      "Developed an AI-driven platform that analyzes transaction patterns to provide personalized financial insights and fraud detection for small businesses. Built with React, Python, and TensorFlow.",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    achievements: [
      "Won first place among 50+ teams",
      "Secured potential seed funding interest",
      "Featured in local tech news",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "HealthTech Hackathon 2024",
    date: "June 2024",
    placement: "1st Place",
    team: "MedTech Squad",
    project: "HealthConnect - Telemedicine Platform",
    description:
      "Created a comprehensive telemedicine platform connecting rural patients with healthcare providers. Included video consultations, prescription management, and health record storage.",
    technologies: ["Next.js", "Node.js", "WebRTC", "MongoDB", "Docker"],
    achievements: [
      "First place winner",
      "Partnership opportunity with local hospital",
      "User testing with 100+ patients",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "EdTech Summit Hackathon 2024",
    date: "August 2024",
    placement: "2nd Place",
    team: "EduInnovate",
    project: "LearnAI - Adaptive Learning Assistant",
    description:
      "Built an AI-powered educational platform that adapts to individual student learning patterns and provides personalized study materials and assessments.",
    technologies: ["Vue.js", "FastAPI", "OpenAI API", "Redis", "Kubernetes"],
    achievements: [
      "Second place among 40 teams",
      "Pilot program with 3 schools",
      "Positive feedback from educators",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Climate Action Hackathon 2024",
    date: "September 2024",
    placement: "Participant",
    team: "Green Tech Warriors",
    project: "EcoTrack - Carbon Footprint Monitor",
    description:
      "Developed a mobile app that helps users track and reduce their carbon footprint through daily activities tracking, suggestions, and community challenges.",
    technologies: ["React Native", "Firebase", "Python", "Machine Learning"],
    achievements: [
      "Completed functional MVP in 48 hours",
      "Positive user feedback",
      "Networking with climate tech startups",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "AI for Social Good Hackathon 2023",
    date: "November 2023",
    placement: "Participant",
    team: "Tech4Change",
    project: "SafeRoute - Community Safety App",
    description:
      "Created a community-driven safety app that uses AI to identify safe routes, report incidents, and connect users with emergency services in real-time.",
    technologies: ["Flutter", "Google Maps API", "TensorFlow", "Firebase"],
    achievements: [
      "Completed project within deadline",
      "Interest from local law enforcement",
      "Award for best UI/UX design",
    ],
    image: "/placeholder.svg",
  },
];

const PlacementIcon = ({ placement }: { placement: string }) => {
  if (placement.includes("1st")) {
    return <Trophy className="h-6 w-6 text-yellow-500" />;
  }
  if (placement.includes("2nd")) {
    return <Trophy className="h-6 w-6 text-gray-400" />;
  }
  return <Code className="h-6 w-6 text-primary" />;
};

export default function Hackathons() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathon <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions built during competitive hackathons - including 2 first-place wins and 1 second-place finish
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <Card className="glass-effect text-center p-6">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-3xl font-bold mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Hackathons</div>
          </Card>
          <Card className="glass-effect text-center p-6">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-3xl font-bold mb-1">2</div>
            <div className="text-sm text-muted-foreground">1st Place</div>
          </Card>
          <Card className="glass-effect text-center p-6">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <div className="text-3xl font-bold mb-1">1</div>
            <div className="text-sm text-muted-foreground">2nd Place</div>
          </Card>
          <Card className="glass-effect text-center p-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-3xl font-bold mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </Card>
        </div>

        {/* Hackathon Projects */}
        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <Card
              key={hackathon.id}
              className="glass-effect hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-blue-500/10 flex items-center justify-center p-8">
                  <Lightbulb className="h-32 w-32 text-primary animate-glow" />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <PlacementIcon placement={hackathon.placement} />
                        <Badge variant={hackathon.placement.includes("1st") ? "default" : "secondary"}>
                          {hackathon.placement}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{hackathon.date}</span>
                    </div>
                    <CardTitle className="text-2xl mb-1">{hackathon.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Users className="h-4 w-4" />
                      {hackathon.team}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{hackathon.project}</h3>
                    <p className="text-muted-foreground mb-4">{hackathon.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {hackathon.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
