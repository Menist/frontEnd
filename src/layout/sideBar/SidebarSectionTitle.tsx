import React from 'react';
import styled from "styled-components";

type TitleSidebarPropsType={
    text:string
}
export const SidebarSectionTitle = (props: TitleSidebarPropsType) => {
    return (
        <Title>{props.text}</Title>
    );
};
const Title=styled.h4`
  font-weight: 500;
`
