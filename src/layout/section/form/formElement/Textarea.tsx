import React from 'react';
import styled from "styled-components";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";

type InputFormPropsType={
    textareaLabelName:string
    placeholder:string
    id:string
    children?: React.ReactNode;
    textareaName: string;
}
export const TextareaStyled = (props: InputFormPropsType) => {
    const { themeobj } = useTheme();

    return (
        <TextareaForm>
            <TextareaLabel id={props.id}>{props.textareaLabelName}</TextareaLabel>
            <Textarea required name={props.textareaName} placeholder={props.placeholder} id={props.id} themeobj={themeobj}/>
            {props.children}
        </TextareaForm>
    );
};
const TextareaLabel = styled.label`
  display: inline-block;
  width: 100%;
  padding: 20px 0 10px 0;
`
const Textarea = styled.textarea<{themeobj: themeobjectType}>`
  font-family: 'Inter', sans-serif;
  padding-left: 10px;
  padding-top: 10px;
  color: ${({themeobj}) =>themeobj.colors.mainText};
  width: 100%;
  min-height: 210px;
  resize: none;
  background-color: ${({themeobj}) =>themeobj.colors.backgroundWebsite};
  border: none;
  outline-color: ${({themeobj}) =>themeobj.colors.mainText};
  &:not(:focus)::placeholder{
    opacity: 1;
    transition: opacity .7s ease;
  }
  &::placeholder{
    padding: 10px;
    font-family: "Inter", sans-serif;
    opacity: 0;
    transition: opacity .5s ease;
  }
`
const TextareaForm=styled.div``