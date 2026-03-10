import styled, {CSSProperties} from "styled-components";
import {themeobjectType} from "../styles/ColorSheme";

type FlexWrapperPropsType = {
    direction?: CSSProperties['flexDirection']
    justify?: CSSProperties['justifyContent']
    align?: CSSProperties['alignItems']
    wrap?: CSSProperties['flexWrap']
    gap?: CSSProperties['gap']
    flex?: CSSProperties['flex']
    color?: CSSProperties['color']
    padding?: CSSProperties['padding']
    maxWidth?: CSSProperties['maxWidth']
    width?: CSSProperties['width']
    minWidth?: CSSProperties['minWidth']
    bgColor? : string
    themeobj?:themeobjectType
    marginRight?:CSSProperties['marginRight']
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "wrap"};
  gap: ${props => props.gap || "20px"};
  flex: ${props => props.flex || "0 0 auto"};
  background-color: ${({bgColor}) => bgColor || "inherit"};
  padding: ${props => props.padding || "0 0 0 0"};
  max-width: ${props => props.maxWidth || "none"};
  width: ${props => props.width || "none"};
  min-width: ${props => props.minWidth || "auto"};
  margin-right: ${props => props.marginRight || "initial"};
`