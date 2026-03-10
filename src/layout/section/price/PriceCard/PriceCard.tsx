import React from 'react';
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../../../ThemeProvider";
import { themeobjectType } from "../../../../styles/ColorSheme";
import { itemType } from "../Price";

type PriceCardPropType = {
    item: itemType;
};

export const PriceCard = (props: PriceCardPropType) => {
    const { themeobj } = useTheme();

    return (
        <PriceCardStyled themeobj={themeobj}>
            <Fade direction={"up"}>
                <PlansName>{props.item.title}</PlansName>
                <PlansPrice themeobj={themeobj}>{props.item.price}</PlansPrice>
                <PlansDescription>{props.item.description}</PlansDescription>
                <FlexWrapper gap={"10"} direction={"column"} >
                    {props.item.services.map((service, index) => (
                            <PriceServices key={index} iconId={service.iconId} color={service.color}>
                                <Icon
                                    iconId={service.iconId ? "selected" : "noSelected"}
                                    height={props.item.iconWidth}
                                    width={props.item.iconWidth}
                                />
                                <span>{service.name}</span>
                            </PriceServices>
                    ))}
                </FlexWrapper>

            </Fade>
        </PriceCardStyled>
    );
};
const PriceServices = styled.div<{ iconId: boolean; color: string }>`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  row-gap: 20px;
  
  svg{
    margin-right: 15px;
  }
  
  text-transform: capitalize;
  span {
    color: ${({ color }) => color};
    font-weight: ${({ iconId }) => (iconId ? "bold" : "normal")};
  }
  
`;

const PriceCardStyled = styled.div<{ themeobj: themeobjectType }>`
  background-color: ${({ themeobj }) => themeobj.colors.backgroundColorSection};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 30px 25px 35px;
  gap: 20px;
  position: relative;
  min-width: 290px;
  flex: 1 0 30%;
  max-width: 500px;


  ${FlexWrapper} {
    padding-top: 10px;
  }

  svg {
    align-self: center;
  }

  &:nth-child(odd)::before {
    content: "";
    width: 100%;
    display: inline-block;
    background-color: ${({ themeobj }) => themeobj.colors.primary};
    padding: 5px 0;
    font-size: 15px;
    position: absolute;
    left: 0;
    top: 0;
    text-transform: capitalize;
    color: ${({ themeobj }) => themeobj.colors.headerText};
    text-align: center;
  }
`;

const PlansName = styled.h3`
  font-weight: 600;
  text-transform: none;
`;

const PlansPrice = styled.span<{ themeobj: themeobjectType }>`
  font-size: 32px;
  font-weight: 700;
  color: ${({ themeobj }) => themeobj.colors.headerText};

  > span {
    font-size: ${({ themeobj }) => themeobj.text.textSize};
    font-weight: 400;
    text-transform: capitalize;
    padding-left: 10px;
  }
`;

const PlansDescription = styled.p`
  text-align: center;
  text-transform: capitalize;
`;
