import React, { useState } from "react";
import ApeFinanceToggle from "./ApeFinanceToggle";

export default {
  title: "Components/ApeFinanceToggle",
  component: ApeFinanceToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <ApeFinanceToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <ApeFinanceToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
