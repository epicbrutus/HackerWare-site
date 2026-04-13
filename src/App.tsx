import { HeroSection } from './components/sections/HeroSection';
import { PrizeTimelineSection } from './components/sections/PrizeTimelineSection';
import { BeginnerSection } from './components/sections/BeginnerSection';
import { FaqSection } from './components/sections/FaqSection';
import { faqItems } from './data/faq';
import { siteContent } from './data/siteContent';

export default function App() {
  return (
    <div className="app-shell">
      <div className="top-bar" aria-hidden="true" />
      <main className="page-frame">
        <HeroSection content={siteContent.hero} />
        <PrizeTimelineSection content={siteContent.prizeTimeline} />
        <BeginnerSection content={siteContent.beginner} />
      </main>
      <FaqSection items={faqItems} />
    </div>
  );
}
