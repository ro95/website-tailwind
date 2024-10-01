import React from "react";

interface SectionPortfolioProps {
  backgroundColor: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  text?: string; // Nouveau champ pour le texte optionnel
}

const Portfolio: React.FC<SectionPortfolioProps> = ({
  backgroundColor = "bg-black",
  width = "w-64",
  height = "h-32",
  marginBottom = "mb-8",
}) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`${backgroundColor} ${width} ${height} ${marginBottom} rounded-lg shadow-md`}
      >
        {/* Contenu facultatif */}
      </div>
    </div>
  );
};

export default Portfolio;
