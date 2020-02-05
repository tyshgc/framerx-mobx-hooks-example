import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import { Button } from "../../src/components/gui/parts";

export function CodeButton(props: IProps) {
  return <Button {...props} width="237px" height="72px" />;
}

interface IProps {
  label?: string;
  hasRadius: boolean;
  onClick?: () => void;
}

addPropertyControls(CodeButton, {
  hasRadius: {
    type: ControlType.Boolean,
    title: "角丸つける？"
  },
  label: {
    type: ControlType.String
  }
});
