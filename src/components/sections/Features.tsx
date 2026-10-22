import { features } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

export function Features() {
  return (
    <Section className="section--tight">
      <ul className="features">
        {features.map((f) => (
          <li key={f.id} className="features__item" data-reveal>
            <span className="features__icon"><Icon name={f.icon} size={22} /></span>
            <span className="features__text"><em>{f.lead}</em> {f.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
