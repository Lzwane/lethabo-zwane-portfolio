import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Lethabo Zwane. All rights reserved.</p>
          <p className="text-sm mt-2">Built with passion and innovation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
