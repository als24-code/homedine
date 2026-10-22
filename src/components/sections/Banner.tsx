import { banner } from "@/data/site";
import { Media } from "@/components/ui/Media";
import { ScrollWords } from "@/components/ui/ScrollWords";
import { Section } from "@/components/ui/Section";

export function Banner() {
  return (
    <Section id="about" className="banner">
      <div className="banner__frame">
        <Media src="/images/banner.jpg" alt="Sage green kitchen" className="banner__media" sizes="100vw" parallax={0.12} />
        <div className="banner__shade" />
        <ScrollWords segs={banner} className="words--light banner__text" />
      </div>
    </Section>
  );
}
