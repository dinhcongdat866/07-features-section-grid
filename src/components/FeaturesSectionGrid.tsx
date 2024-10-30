import { features } from "./features";
import "./FeaturesSectionGrid.css";

export default function FeaturesSectionGrid() {
  return (
    <div className="section-grid">
      {features.map((feature) => (
        <div className="item">
          <div className="icon">{feature.icon}</div>
          <div className="title">{feature.title}</div>
          <div className="description">{feature.description}</div>
        </div>
      ))}
    </div>
  );
}
