import { description, slogan, title } from "../strings";
import FeaturesSectionGrid from "./FeaturesSectionGrid";
import "./FeaturesSectionPage.css";

export default function FeaturesSectionPage() {
  return (
    <div className="section-page-container">
      <div className="section-page">
        <div className="header">
          <div className="header-title">{title}</div>
          <div className="header-slogan">{slogan}</div>
          <div className="header-description">{description}</div>
        </div>
        <FeaturesSectionGrid />
      </div>
    </div>
  );
}