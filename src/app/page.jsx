import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import DoorHero from '@/components/DoorHero';
import StudioIntro from '@/components/StudioIntro';
import Services from '@/components/Services';
import TextureBand from '@/components/TextureBand';
import JourneySection from '@/components/JourneySection';
import Process from '@/components/Process';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { JOURNEY } from '@/lib/content';

export default function Home() {
  return (
    <SmoothScroll>
      <div id="top" />
      <Nav />
      <main>
        <DoorHero />
        <StudioIntro />
        <Services />

        <TextureBand slug="texture-feather">
          “We don’t just decorate rooms — we build the home around your life.”
        </TextureBand>

        {JOURNEY.map((scene, i) => (
          <JourneySection key={scene.id} scene={scene} index={i} />
        ))}

        <Process />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
