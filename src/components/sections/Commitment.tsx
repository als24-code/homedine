import { commitment } from "@/data/site";
import { ScrollWords } from "@/components/ui/ScrollWords";
import { Section } from "@/components/ui/Section";

export function Commitment() {
  return (
    <Section className="commit">
      <ScrollWords segs={commitment} className="words--center" />
    </Section>
  );
}
