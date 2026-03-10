import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";

type RecommendationsCardStyledPropsType = {
  iconType: string
  cardTitle: string
  cardDescription: string | React.ReactNode // Изменено на React.ReactNode для поддержки JSX
  personName?: string
  profession?: string
  imageSrc?: string
  imageSrcSet?: string
}

export const RecommendationsCard = (props: RecommendationsCardStyledPropsType) => {
  const { themeobj } = useTheme();
  return (
    <FlexWrapper themeobj={themeobj}
                 bgColor={themeobj.colors.backgroundColorSection}
                 minWidth={'290px'}
                 wrap={'wrap'}
                 padding={'25px'}
                 gap={'15px'}
                 marginRight={'20px'}
                 align={'stretch'}
    >
      <Icon iconId={props.iconType} height={17} width={18}/>
      <Icon iconId={props.iconType} height={17} width={18}/>
      <Icon iconId={props.iconType} height={17} width={18}/>
      <Icon iconId={props.iconType} height={17} width={18}/>
      <RecommendationsCardTitle>{props.cardTitle}</RecommendationsCardTitle>

      {/* Изменено: теперь может принимать строку или JSX */}
      {typeof props.cardDescription === 'string' ? (
        <RecommendationsCardText>{props.cardDescription}</RecommendationsCardText>
      ) : (
        <RecommendationsCardList>{props.cardDescription}</RecommendationsCardList>
      )}

      <RecommendationsCardImg src={props.imageSrc} srcSet={`${props.imageSrcSet} 2x`}/>
      <FlexWrapper
        gap={'0'}
        direction={'column'}
        justify={"center"}
      >
        <RecommendationsCardName themeobj={themeobj}>{props.personName}</RecommendationsCardName>
        <RecommendationsCardProfession>{props.profession}</RecommendationsCardProfession>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const RecommendationsCardTitle = styled.h4`
  font-weight: 500;
  width: 100%;
`

const RecommendationsCardText = styled.p`
  text-align: left;
  line-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`

// Новый стилизованный компонент для списка
const RecommendationsCardList = styled.div`
  text-align: left;
  line-height: 24px;
  width: 100%;

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }
`

const RecommendationsCardImg = styled.img`
  max-width: 80px;
  max-height: 80px;
`

const RecommendationsCardName = styled.span<{ themeobj: themeobjectType }>`
  font-weight: 500;
  font-size: 18px;
  color: ${({themeobj}) => themeobj.colors.headerText};
`

const RecommendationsCardProfession = styled.span`
  font-weight: 500;
  text-align: left;
`