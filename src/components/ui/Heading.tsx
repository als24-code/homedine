import { ReactNode } from "react";
import { Icon } from "./Icon";

interface Props { lead?: string; title: string; accent: string; className?: string; aside?: ReactNode }

export function Heading({ lead, title, accent, className = "", aside }: Props) {
  return (
    <div className={`heading ${className}`} data-reveal>
      <h2 className="heading__text">
        {lead && <span className="heading__lead">{lead}</span>}
        <span className="heading__line">
          {title} <Icon name="sparkle" size={20} className="heading__spark" /> <em className="heading__accent">{accent}</em>
        </span>
      </h2>
      {aside && <div className="heading__aside">{aside}</div>}
    </div>
  );
}
