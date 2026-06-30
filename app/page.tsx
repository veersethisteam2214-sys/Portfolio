import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StackStrip } from "@/components/stack-strip";
import { Services } from "@/components/services";
import { Proof } from "@/components/proof";
import { Connect } from "@/components/connect";
import { Work } from "@/components/work";
import { Statement } from "@/components/statement";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <StackStrip />
        <Services />
        <Proof />
        <Connect />
        <Work />
        <Statement />
        <Process />
        <About />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
