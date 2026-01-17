import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { GitHubContributions } from '@/components/github-contributions';
import { Publications } from '@/components/publications';
import { Education } from '@/components/education';
import { Podcast } from '@/components/podcast';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubContributions />
        <Publications />
        <Education />
        <Podcast />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
