import * as React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

/**
 * gui/parts/Button Component
 * @props label (string)
 * @props hasRadius (boolean)
 * @props width (ICSSSizeProperty)
 * @props height (ICSSSizeProperty)
 * @props onClick (()=> void)
 *
 */
export function Button(props: IProps) {
  const { label, hasRadius, width, height, onClick } = props;
  return (
    <SButton
      {...{ hasRadius, width, height, onClick }}
      whileTap={{ scale: 0.9 }}
    >
      <SLabel>{label || "Label..."}</SLabel>
    </SButton>
  );
}

interface IProps extends IStyleProps {
  label?: string;
}

type ICSSSizeProperty = string | number;
interface IStyleProps {
  hasRadius: boolean;
  width?: ICSSSizeProperty;
  height?: ICSSSizeProperty;
  onClick?: () => void;
}

const SButton = styled(motion.button)<IStyleProps>`
  width: ${props => (props.width ? `${props.width};` : `100%`)};
  height: ${props => (props.height ? `${props.height};` : `100%`)};
  border-radius: ${props => (props.hasRadius ? 999 : 0)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: visible;
  background-color: #059bff;
  border-radius: 87px;
  border: none;
  box-shadow: 0px 5px 15px 0px rgba(20, 161, 255, 0.25);
  outline: none;
`;
const SLabel = styled.span`
  display: block;
  height: 34px;
  font-family: "Noto Sans JP", sans-serif;
  color: #ffffff;
  font-size: 29px;
  letter-spacing: 0px;
  line-height: 1.4;
  font-weight: 700;
  font-style: normal;
  text-align: center;
`;
