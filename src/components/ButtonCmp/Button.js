import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import appTheme from "../../constants/theme";

const HeroButton = styled(Button)`
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0")};
  padding: ${(props) =>
    props.specifyPadding ? props.specifyPadding : "1rem 4rem"};
  font-size: ${(props) => props.textFontSize || appTheme.SIZES.body3};
  line-height: calc(${appTheme.LINEHEIGHT.medium} - 0.125px);
  background-color: ${(props) =>
    props.backColor || appTheme.COLORS.bluePrimary};
  background-image: ${(props) =>
    !props.backGradient
      ? "none"
      : `-moz-linear-gradient(${props.backGradient})`};
  background-image: ${(props) =>
    !props.backGradient
      ? "none"
      : `-webkit-linear-gradient(${props.backGradient})`};
  background-image: ${(props) =>
    !props.backGradient ? "none" : `linear-gradient(${props.backGradient})`};
  color: ${(props) => props.color || appTheme.COLORS.black2};
  border-radius: ${(props) => props.borderRadius || "24px"};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : `${appTheme.WEIGHT.mediumBold}`};
  opacity: ${(props) => props.opacity};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  outline: none;
  width: ${(props) => props.widthWebkit || ""};
  width: ${(props) => props.widthMoz || ""};
  width: ${(props) => props.widthNormal || ""};
  max-width: ${(props) => props.maxWidth || ""};
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  &:hover {
    color: ${(props) => props.textHoverColor || ""};
    background-color: ${(props) => props.backgroundHoverColor || ""};
    border: ${(props) =>
      props.borderHoverColor ? `1px solid ${props.borderHoverColor}` : "none"};
  }
  &:disabled {
    background-color: ${(props) => props.backColor || appTheme.COLORS.white};
    color: ${(props) => props.color || appTheme.COLORS.black2};
    cursor: not-allowed;
    pointer-events: all !important;
  }
  @media only screen and (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

function SolidButton(props) {
  return (
    <HeroButton
      className={props.className && props.className}
      style={props.customStyle && { ...props.customStyle }}
      onClick={props.onClick}
      variant="primary"
      type={props.type && props.type}
      fontWeight={props.weighty}
      textFontSize={props.textFontSize}
      disabled={props.disabled}
      color={props.color}
      borderColor={props.borderColor}
      borderHoverColor={props.borderHoverColor}
      opacity={props.opacity}
      backColor={props.backColor}
      backGradient={props.backGradient}
      textHoverColor={props.textHoverColor}
      backgroundHoverColor={props.backgroundHoverColor}
      specifyPadding={props.specifyPadding}
      borderRadius={props.borderRadius}
      widthWebkit={props.widthWebkit}
      widthMoz={props.widthMoz}
      widthNormal={props.widthNormal}
      margin={props.margin}
      maxWidth={props.maxWidth}
    >
      {props.text}
    </HeroButton>
  );
}

export default SolidButton;
