import * as React from "react";
import styled from "@emotion/styled";
import { CounterContainer } from "../../src/components/containers";
import { CodeButton } from "./CodeButton";
import { Gui_parts_NumberView } from "./canvas";

export function CodeDomainCounter() {
  return CounterContainer(({ count, action }) => {
    const countString = `${count}`;
    return (
      <>
        <SNumberView value={countString} />
        <CodeButton label="Click!" hasRadius={true} onClick={action} />
      </>
    );
  });
}

const SNumberView = styled(Gui_parts_NumberView)`
  position: relative;
  margin-bottom: 40px;
`;
