import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Lethabo <span className="gradient-text">Zwane</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Deputy CTO • Student Leader • Tech Innovator
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              BSc Mathematical Sciences student at Sefako Makgatho Health Sciences University, 
              passionate about leveraging technology and leadership to drive innovation and social impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-3xl animate-glow"></div>
              <img
                src={heroImage}
                alt="Lethabo Zwane"
                className="relative rounded-3xl w-full h-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
