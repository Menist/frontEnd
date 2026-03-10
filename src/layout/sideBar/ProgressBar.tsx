import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../ThemeProvider";
import {FlexWrapper} from "../../components/FlexWrapper";
import {themeobjectType} from "../../styles/ColorSheme";
import {AnimatePresence, motion} from "framer-motion";

type LanguagesFragmentPropsType1 = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const ProgressBarFragment = (props: LanguagesFragmentPropsType1) => {
    const {themeobj} = useTheme();

    return (
        <Fade cascade damping={.9}>
            <ProgressBarContainer>
                <FlexWrapper justify={"space-between"}>
                    <ProgressBarTitle themeobj={themeobj}>{props.textTitle}</ProgressBarTitle>
                    <ProgressBarNumber themeobj={themeobj}>{props.textProgress}</ProgressBarNumber>
                </FlexWrapper>

                <AnimatePresence>
                <ProgressBarContainerLine themeobj={themeobj}>
                        <motion.div
                            layout
                            initial={{ opacity: 1, scale: 0, marginLeft: '100%' }}
                            whileInView={{ opacity: 1, scale: 1, marginLeft: '0%' }}
                            transition={{ease: "linear", duration: 1}}
                        >
                            <ProgressBarLine
                                themeobj={themeobj}
                                progress={props.progress}>
                            </ProgressBarLine>
                        </motion.div>
                </ProgressBarContainerLine>
                </AnimatePresence>
            </ProgressBarContainer>
        </Fade>
    );
};

const ProgressBarContainer = styled.div`
  padding: 15px 0 10px;
`;

const ProgressBarContainerLine = styled.div<{ themeobj: themeobjectType }>`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 1px solid ${({themeobj}) => themeobj.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${({themeobj}) => themeobj.colors.primary};
`;

const ProgressBarLine = styled.div<
    { progress: CSSProperties['width'], themeobj: themeobjectType }
>`
  width: ${props => props.progress || "100%"};
  border-radius: 30px;
  height: 2px;
  background-color: ${({themeobj}) => themeobj.colors.primary};
  //transition: width 0.3s ease-in-out;
  //--time: 3s;
  //transform-origin: left top;
  //transform: scaleX(0);
  //animation: scale var(--time) linear;
  //animation-fill-mode: forwards;

  @keyframes scale {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

const ProgressBarTitle = styled.span<{ themeobj: themeobjectType }>`
  padding-bottom: 5px;
  color: ${({themeobj}) => themeobj.colors.mainText};
`;

const ProgressBarNumber = styled.span<{ themeobj: themeobjectType }>`
`;
