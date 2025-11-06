import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "AWS Introduction to Generative AI and Machine Learning",
    issuer: "Amazon Web Services",
    date: "2024",
    type: "Bootcamp",
    description: "Comprehensive training on generative AI concepts, machine learning fundamentals, and AWS AI services.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Generative AI for Software Engineers",
    issuer: "WeThinkCode",
    date: "2024",
    type: "Bootcamp",
    description: "Specialized course focusing on implementing generative AI solutions in software development workflows.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Introduction to Digital Earth Africa Sandbox",
    issuer: "Digital Earth Africa",
    date: "2024",
    type: "Bootcamp",
    description: "Training on geospatial data analysis and satellite imagery processing for African applications.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    type: "Bootcamp",
    description: "Foundation certification covering cloud concepts, Azure services, and cloud deployment models.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Data Science Essentials",
    issuer: "Chisquares",
    date: "2024",
    type: "Bootcamp",
    description: "Intensive bootcamp covering statistical analysis, data visualization, and machine learning basics.",
    image: "/placeholder.svg",
  },
];

// Placeholder for additional certificates - user can add their own
const additionalCertificates = Array.from({ length: 16 }, (_, i) => ({
  id: i + 6,
  title: `Certificate ${i + 6}`,
  issuer: "Various Institutions",
  date: "2023-2024",
  type: "Competition/Bootcamp",
  description: "Description to be added by user",
  image: "/placeholder.svg",
}));

const allCertificates = [...certificates, ...additionalCertificates];

export default function Certificates() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my 21 certificates and 3 badges earned through bootcamps, competitions, and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCertificates.map((cert, index) => (
            <Card
              key={cert.id}
              className="glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Award className="h-8 w-8 text-primary animate-glow" />
                  <Badge variant="secondary">{cert.type}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  View Certificate <ExternalLink className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Badges Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional <span className="gradient-text">Badges</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((badge) => (
              <Card key={badge} className="glass-effect text-center p-6 hover:shadow-lg transition-all">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Badge {badge}</h3>
                <p className="text-sm text-muted-foreground">
                  Professional achievement badge earned through excellence
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
