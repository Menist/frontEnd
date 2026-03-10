import styled from "styled-components";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {ComponentPropsWithoutRef, FC, forwardRef, ReactNode} from "react";
import {useTheme} from "../../../../ThemeProvider";

type ButtonProps =  {children: ReactNode} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { themeobj } = useTheme();
    return <FormBtn ref={ref} themeobj={themeobj}{...props}/>
})
export const FormBtn = styled.button<{themeobj:themeobjectType}>`
  padding: 9px 25px;
  background-color: ${({themeobj}) => themeobj.colors.primary};
  color: ${({themeobj}) => themeobj.colors.backgroundWebsite};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 25px;
  max-width: 200px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({themeobj}) => themeobj.colors.primary};
    background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
    color: ${({themeobj}) => themeobj.colors.primary};
    transition: ${({themeobj}) => themeobj.animation.transitionBackground};
  }
}
`