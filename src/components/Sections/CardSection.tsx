import React from "react";

interface SectionPCardProps {
  backgroundColor: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  text?: string; // Nouveau champ pour le texte optionnel;
  marginBottom?: string | undefined;
  Padding?: string | undefined;
  margin?: string | undefined;
}

const cardWhite: React.FC<SectionPCardProps> = ({
  backgroundColor = "bg-black",
  width = "w-64",
  height = "h-32",
  marginBottom = "mb-8",
  margin = "m-8",
  text,
}) => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div
        className={`${backgroundColor} ${width} ${height} ${marginBottom}  ${margin} rounded-lg shadow-md`}
      >
        {text && (
          <p className="text-black text-lg font-semibold justify-center text-center mt-4">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default cardWhite;
