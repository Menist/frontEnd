import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {SectionTitle} from "./SectionTitle";
import {SectionSubTitle} from "./SectionSubTitle";
import {Fade} from "react-awesome-reveal";

type BlockTitlePropsType={
    title:string
    subTitle:string
}
export const BlockTitle = (props:BlockTitlePropsType) => {

    return (
        <Fade cascade damping={.9}>
        <FlexWrapper  align={"center"} justify={"center"} direction={"column"} gap={"0"}>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionSubTitle>{props.subTitle}</SectionSubTitle>
        </FlexWrapper>
        </Fade>
    );
};
