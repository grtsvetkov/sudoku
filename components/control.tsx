import React from "react";
import { ControlButton } from "./control-button";

const x9Array = [...new Array(9)];

export const Control = ({
  onAction,
}: {
  onAction: (
    payload:
      | {
          type: "number";
          value: number;
        }
      | { type: "remove" }
  ) => void;
}) => (
  <div className="flex gap-1 w-full justify-center">
    {x9Array.map((_value, index) => (
      <ControlButton
        key={index}
        onClick={() => onAction({ type: "number", value: index + 1 })}
      >
        {index + 1}
      </ControlButton>
    ))}
    <ControlButton onClick={() => onAction({ type: "remove" })}>
      X
    </ControlButton>
  </div>
);
