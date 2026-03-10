import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {CardLink} from "../../../../components/Link";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";

type ServicesCardPropsType = {
  iconId: string
  text?: string  // сделал опциональным, так как используем listItems
  title: string
  listItems?: string[]  // сделал опциональным
  link: string
}

export const ServicesCard = (props: ServicesCardPropsType) => {
  const {themeobj} = useTheme();

  return (
    <ServicesCardStyled themeobj={themeobj}>
      <Fade cascade damping={.2}>
        {props.iconId && <Icon iconId={props.iconId} height={75} width={75} viewBox={"0 0 75 75"}/>}
        <ServicesCardTitle>{props.title}</ServicesCardTitle>

        {props.listItems && props.listItems.length > 0 ? (
          <ServicesList>
            {props.listItems.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ServicesList>
        ) : (
          props.text && <ServicesCardText dangerouslySetInnerHTML={{ __html: props.text }} />
        )}

        {props.link && <CardLink link={"order now"}></CardLink>}
      </Fade>
    </ServicesCardStyled>
  );
};

const ServicesCardStyled = styled.div<{ themeobj: themeobjectType }>`
  padding: 30px 25px 33px;
  background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
  display: flex;
  flex-direction: column;
  flex: 0 0 31.9%;
  align-items: center;
  text-transform: capitalize;
  max-width: 310px;

  a {
    text-transform: uppercase;
    font-size: 12px;
  }

  @media screen and (max-width: 969px) {
    width: 100%;
    max-width: 350px;
  }
`;

const ServicesCardTitle = styled.h4`
  font-weight: 500;
  padding: 22px 0 20px;
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 20px 0;
  text-align: left;
  width: 100%;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({theme}) => theme.colors?.text || 'inherit'};
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({theme}) => theme.colors?.primary || '#e5b64a'};
    font-weight: bold;
  }
`;

const ServicesCardText = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
    width: 100%;
  }
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.5;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${({theme}) => theme.colors?.primary || '#007bff'};
      font-weight: bold;
    }
  }
`;