import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import appTheme from "../../constants/theme";

const HeroButton = styled(Button)`
  margin: ${(props: any) => (props.margin ? props.margin : "0.5rem 0")};
  padding: ${(props: any) =>
    props.specifyPadding ? props.specifyPadding : "1rem 4rem"};
  font-size: ${(props: any) => props.textFontSize || appTheme.SIZES.body3};
  line-height: calc(${appTheme.LINEHEIGHT.medium} - 0.125px);
  background-color: ${(props: any) =>
    props.backColor || appTheme.COLORS.bluePrimary};
  background-image: ${(props: any) =>
    !props.backGradient
      ? "none"
      : `-moz-linear-gradient(${props.backGradient})`};
  background-image: ${(props: any) =>
    !props.backGradient
      ? "none"
      : `-webkit-linear-gradient(${props.backGradient})`};
  background-image: ${(props: any) =>
    !props.backGradient ? "none" : `linear-gradient(${props.backGradient})`};
  color: ${(props: any) => props.color || appTheme.COLORS.grey1};
  border-radius: ${(props: any) => props.borderRadius || "24px"};
  font-weight: ${(props: any) =>
    props.fontWeight ? props.fontWeight : `${appTheme.WEIGHT.mediumBold}`};
  opacity: ${(props: any) => props.opacity};
  border: ${(props: any) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  outline: none;
  width: ${(props: any) => props.widthWebkit || ""};
  width: ${(props: any) => props.widthMoz || ""};
  width: ${(props: any) => props.widthNormal || ""};
  max-width: ${(props: any) => props.maxWidth || ""};
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  &:hover {
    color: ${(props: any) => props.textHoverColor || ""};
    background-color: ${(props: any) => props.backgroundHoverColor || ""};
    border: ${(props: any) =>
      props.borderHoverColor ? `1px solid ${props.borderHoverColor}` : "none"};
  }
  &:disabled {
    background-color: ${(props: any) =>
      props.backColor || appTheme.COLORS.white};
    color: ${(props: any) => props.color || appTheme.COLORS.bluePrimary};
    cursor: not-allowed;
    pointer-events: all !important;
  }
  @media only screen and (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

const SolidButton: React.FC<{
  className?: string;
  customStyle?: any;
  onClick?: () => void;
  type: string;
  weighty?: string;
  textFontSize?: string;
  disabled?: boolean;
  color?: string;
  borderColor?: string;
  borderHoverColor?: string;
  opacity?: string;
  backColor?: string;
  backGradient?: string;
  textHoverColor?: string;
  backgroundHoverColor?: string;
  specifyPadding?: string;
  borderRadius?: string;
  widthWebkit?: string;
  widthMoz?: string;
  widthNormal?: string;
  margin?: string;
  maxWidth?: string;
  text?: any;
}> = ({
  className,
  customStyle,
  onClick,
  type,
  weighty,
  textFontSize,
  disabled,
  color,
  borderColor,
  borderHoverColor,
  opacity,
  backColor,
  backGradient,
  textHoverColor,
  backgroundHoverColor,
  specifyPadding,
  borderRadius,
  widthWebkit,
  widthMoz,
  widthNormal,
  margin,
  maxWidth,
  text,
}) => {
  return (
    <>
      <HeroButton
        className={className && className}
        style={customStyle && { ...customStyle }}
        onClick={onClick}
        variant="primary"
        type={type && type}
        fontWeight={weighty}
        textFontSize={textFontSize}
        disabled={disabled}
        color={color}
        borderColor={borderColor}
        borderHoverColor={borderHoverColor}
        opacity={opacity}
        backColor={backColor}
        backGradient={backGradient}
        textHoverColor={textHoverColor}
        backgroundHoverColor={backgroundHoverColor}
        specifyPadding={specifyPadding}
        borderRadius={borderRadius}
        widthWebkit={widthWebkit}
        widthMoz={widthMoz}
        widthNormal={widthNormal}
        margin={margin}
        maxWidth={maxWidth}
      >
        {text}
      </HeroButton>
    </>
  );
};

export default SolidButton;
