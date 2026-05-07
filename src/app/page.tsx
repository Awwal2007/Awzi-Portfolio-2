import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="relative">
      <Toaster position="top-center" richColors />
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
