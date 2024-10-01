import React from "react";

interface Props {
  children?: React.ReactNode;
}

/**
 * The `HeroesBase` component is a basic hero component that displays a call to
 * action and a background gradient. It is intended to be used as a base for more
 * complex hero components.
 *
 * @param children - The contents of the hero component.
 */
const todefine: React.FC<Props> = ({ children }) => {
  return (
    <>
      <p
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></p>
      {children}
    </>
  );
};

export default todefine;
