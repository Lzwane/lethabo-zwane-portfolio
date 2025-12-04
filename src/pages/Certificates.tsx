import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileText, Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Interface for Certificate data
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: string;
  description: string;
  format: "image" | "pdf";
  assetUrl: string; // Placeholder path to be updated with actual filename
}

const certificatesData: Certificate[] = [
  // --- Group 1: Pop up and view picture ---
  {
    id: 1,
    title: "CSS Certification",
    issuer: "HackerRank",
    date: "2024",
    type: "Technical Skill",
    description: "Verified competency in Cascading Style Sheets (CSS).",
    format: "image",
    assetUrl: "/src/assets/HackerRank - CSS.jpg", // Update this filename
  },
  {
    id: 2,
    title: "Machine Learning 101: Demystifying the magic",
    issuer: "XALTUIS towards higher excellence",
    date: "2024",
    type: "Course",
    description: "Foundational understanding of machine learning concepts and applications.",
    format: "image",
    assetUrl: "/src/assets/Machine Learning 101 Demystifying the magic.jpg", // Update this filename
  },
  {
    id: 3,
    title: "Basics of Network Layer Protocols Micro Certification",
    issuer: "Huawei",
    date: "2024",
    type: "Micro Certification",
    description: "Understanding of core network layer protocols and infrastructure.",
    format: "image",
    assetUrl: "/src/assets/Huawei - Basics of Network Layer Protocols Micro Certification.png", // Update this filename
  },
  {
    id: 4,
    title: "AI Fluency Course",
    issuer: "Microsoft",
    date: "2024",
    type: "Course",
    description: "Comprehensive overview of Artificial Intelligence concepts and Microsoft AI tools.",
    format: "image",
    assetUrl: "/src/assets/Microsoft - AI Fluency Course.png", // Update this filename
  },
  {
    id: 5,
    title: "Datathon 2024 - A Global datathon event",
    issuer: "IBM Z",
    date: "2024",
    type: "Hackathon/Competition",
    description: "Participation in a global data science and mainframe challenge.",
    format: "image",
    assetUrl: "/src/assets/IBM Z - Datathon 2024.jpg", // Update this filename
  },
  {
    id: 6,
    title: "Visualizing data: Creating impactful graphs and charts",
    issuer: "XALTUIS towards higher excellence",
    date: "2024",
    type: "Course",
    description: "Techniques for effective data visualization and storytelling.",
    format: "image",
    assetUrl: "/src/assets/Visualizing data Creating impactful graphs and charts.jpg", // Update this filename
  },
  {
    id: 7,
    title: "Python Coder Badge",
    issuer: "Kaggle",
    date: "2024",
    type: "Badge",
    description: "Recognition of Python programming proficiency on the Kaggle platform.",
    format: "image",
    assetUrl: "/src/assets/Kaggle - Python Coder badge.jpg", // Update this filename
  },

  // --- Group 2: Pop ups from single page PDF ---
  {
    id: 8,
    title: "Microsoft 101",
    issuer: "NEMISA on Microsoft Community",
    date: "2024",
    type: "Course",
    description: "Fundamental training on Microsoft technologies and ecosystem.",
    format: "pdf",
    assetUrl: "/src/assets/Microsoft 101.pdf", // Update this filename
  },
  {
    id: 9,
    title: "Career Essentials in Generative AI",
    issuer: "NEMISA on Microsoft Community",
    date: "2024",
    type: "Professional Certificate",
    description: "Core concepts and applications of Generative AI in the professional workplace.",
    format: "pdf",
    assetUrl: "/src/assets/Career Essentials in Generative AI.pdf", // Update this filename
  },
  {
    id: 10,
    title: "Career Essentials in Cybersecurity by Microsoft",
    issuer: "NEMISA on Microsoft Community",
    date: "2024",
    type: "Professional Certificate",
    description: "Essentials of digital security, threat protection, and compliance.",
    format: "pdf",
    assetUrl: "/src/assets/Career Essentials in Cybersecurity by Microsoft.pdf", // Update this filename
  },
  {
    id: 11,
    title: "Microsoft Digital Literacy",
    issuer: "NEMISA on Microsoft Community",
    date: "2024",
    type: "Course",
    description: "Building confidence and essential skills for the digital world.",
    format: "pdf",
    assetUrl: "/src/assets/Microsoft Digital Literacy.pdf", // Update this filename
  },
  {
    id: 12,
    title: "Microsoft AI Fluency Course",
    issuer: "NETCAMPUS GROUP unlocking potential",
    date: "2024",
    type: "Course",
    description: "Advanced understanding of AI principles and implementation.",
    format: "pdf",
    assetUrl: "/src/assets/NETCAMPUS - Microsoft AI Fluency Course.pdf", // Update this filename
  },
  {
    id: 13,
    title: "Full Stack Development Certification",
    issuer: "FNB APP ACADEMY",
    date: "2025",
    type: "Bootcamp",
    description: "Intensive training in modern web development stacks and software engineering.",
    format: "pdf",
    assetUrl: "/src/assets/FNB APP ACADEMY - Full Stack Development Certification 687D1AFFB9A0C.pdf", // Update this filename
  },
  {
    id: 14,
    title: "Datathon training certificate 2025",
    issuer: "DIRISA",
    date: "2025",
    type: "Workshop",
    description: "Specialized training in data science and analytics for research.",
    format: "pdf",
    assetUrl: "/src/assets/DIRISA - Datathon training certificate 2025.pdf", // Update this filename
  },
  {
    id: 15,
    title: "ayoba Business Chat API Hackathon Certificate",
    issuer: "ayoba",
    date: "2024",
    type: "Hackathon",
    description: "Development of business solutions using the ayoba messaging API.",
    format: "pdf",
    assetUrl: "/src/assets/ayoba Business Chat API Hackathon.pdf", // Update this filename
  },
  {
    id: 16,
    title: "Generative AI with AWS",
    issuer: "AWS Udacity",
    date: "2024",
    type: "Course",
    description: "Building and scaling generative AI applications using AWS services.",
    format: "pdf",
    assetUrl: "/src/assets/Generative AI with AWS.pdf", // Update this filename
  },
  {
    id: 17,
    title: "GenAI for Software Engineers course",
    issuer: "We Think Code",
    date: "2024",
    type: "Bootcamp",
    description: "Applying generative AI tools to accelerate software development workflows.",
    format: "pdf",
    assetUrl: "/src/assets/We Think Code - GenAI for Software Engineers course.pdf", // Update this filename
  },
  {
    id: 18,
    title: "Introduction to Programming in python",
    issuer: "ChiSquares",
    date: "2024",
    type: "Course",
    description: "Foundational programming concepts using the Python language.",
    format: "pdf",
    assetUrl: "/src/assets/ChiSquares - Introduction to Programming in python.pdf", // Update this filename
  },
  {
    id: 19,
    title: "Data Science with R",
    issuer: "ChiSquares",
    date: "2024",
    type: "Course",
    description: "Statistical analysis and data visualization using R.",
    format: "pdf",
    assetUrl: "/src/assets/ChiSquares - Data Science with R.pdf", // Update this filename
  },
  {
    id: 20,
    title: "Advanced Epidemiological Study Design, Implementation, and Analysis",
    issuer: "ChiSquares",
    date: "2024",
    type: "Specialization",
    description: "Advanced methodologies for health data analysis and study design.",
    format: "pdf",
    assetUrl: "/src/assets/C00340.pdf", // Update this filename
  },
  {
    id: 21,
    title: "Introduction to the Digital Earth Africa Sandbox",
    issuer: "Digital Earth Africa",
    date: "2024",
    type: "Course",
    description: "Learned to select, load, and analyse Earth observation satellite data of Africa using the Sandbox platform. Covered Python basics for geospatial analysis, inspecting regions at scale, and conducting quantitative remote sensing.",
    format: "pdf",
    assetUrl: "/src/assets/Digital Earth Africa.pdf", // Update this filename
  },

];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive collection of my professional certifications, badges, and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <Card
              key={cert.id}
              className="glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedCert(cert)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Award className="h-8 w-8 text-primary animate-glow" />
                  <Badge variant="secondary" className="max-w-[150px] truncate">
                    {cert.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center">
                  {cert.title}
                </CardTitle>
                <CardDescription className="flex flex-col gap-1 mt-2">
                  <span className="font-medium text-foreground">{cert.issuer}</span>
                  <span className="text-xs">{cert.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  {cert.format === "pdf" ? (
                    <>
                      View PDF Certificate <FileText className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      View Image <ImageIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
          <DialogContent className="max-w-4xl w-full h-[80vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>{selectedCert?.title}</DialogTitle>
              <DialogDescription>
                Issued by {selectedCert?.issuer} • {selectedCert?.date}
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 overflow-hidden rounded-md border bg-muted/50 flex items-center justify-center p-4">
              {selectedCert?.format === "image" ? (
                <img
                  src={selectedCert.assetUrl}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <iframe
                  src={selectedCert?.assetUrl}
                  title={selectedCert?.title}
                  className="w-full h-full rounded-md bg-white"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
