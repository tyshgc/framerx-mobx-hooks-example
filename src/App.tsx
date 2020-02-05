import React from "react";
import styled from "@emotion/styled";
import { Button } from "./components/gui/parts";

export default function App() {
  return (
    <SScreen>
      <Button
        {...{
          label: "Click!",
          hasRadius: true,
          width: "237px",
          height: "72px"
        }}
      />
    </SScreen>
  );
}

const SScreen = styled.main`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
