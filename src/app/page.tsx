import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { WhatIBuild } from "@/components/WhatIBuild";
import { Workflow } from "@/components/Workflow";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatIBuild />
      <About />
      <Workflow />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <CurrentlyExploring />
      <GitHubActivity />
      <Contact />
    </>
  );
}
