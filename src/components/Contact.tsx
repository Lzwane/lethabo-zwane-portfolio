import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (will be connected to email service later)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect! Whether you have a project, opportunity, or just want to chat about tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass-effect animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you shortly</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="glass-effect p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">lethabo.zwane@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+27 XX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Pretoria, South Africa</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="flex-1">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </div>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance projects, collaborations, and consulting 
                opportunities. Feel free to reach out!
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Available for Work
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
