import React from "react";
import { ApeFinanceStack, ApeFinanceInput, ApeFinanceLabel } from "./StyledApeFinanceToggle";
import { ApeFinanceToggleProps, scales } from "./types";

const ApeFinanceToggle: React.FC<ApeFinanceToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <ApeFinanceStack scale={scale}>
    <ApeFinanceInput id={props.id || "apefinance-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <ApeFinanceLabel scale={scale} checked={checked} htmlFor={props.id || "apefinance-toggle"}>
      <div className="apefinances">
        <div className="apefinance" />
        <div className="apefinance" />
        <div className="apefinance" />
        <div className="butter" />
      </div>
    </ApeFinanceLabel>
  </ApeFinanceStack>
);

ApeFinanceToggle.defaultProps = {
  scale: scales.MD,
};

export default ApeFinanceToggle;
