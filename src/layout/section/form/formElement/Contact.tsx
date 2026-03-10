import React from 'react';
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { useTheme } from "../../../../ThemeProvider";
import { themeobjectType } from "../../../../styles/ColorSheme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type ContactPropsType = {
  countryLabel?: string
  countryValue?: string
  countryLink?: string    // добавили
  cityLabel?: string
  cityValue?: string
  streetLabel?: string
  streetAnswer?: string
  streetLink?: string     // добавили
  showTitleInfo: boolean
  iconId: string
}

export const Contact = (props: ContactPropsType) => {
  const { themeobj } = useTheme();

  // Функция для определения типа ссылки
  const getLinkProps = (link: string | undefined, value: string | undefined) => {
    if (!link || !value) return null;

    // Для email
    if (value.includes('@') && !link.startsWith('mailto:')) {
      return { href: `mailto:${value}`, target: undefined };
    }
    // Для telegram
    if (value.startsWith('@')) {
      return { href: `https://t.me/${value.slice(1)}`, target: '_blank' };
    }
    // Для телефона
    if (link.startsWith('tel:')) {
      return { href: link, target: undefined };
    }
    // Для обычных ссылок
    return { href: link, target: '_blank' };
  };

  const renderValue = (value: string | undefined, link: string | undefined) => {
    const linkProps = getLinkProps(link, value);

    if (linkProps && value) {
      return (
        <StyledLink
          href={linkProps.href}
          target={linkProps.target}
          rel={linkProps.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {value}
        </StyledLink>
      );
    }
    return <CountryValue>{value}</CountryValue>;
  };

  // Проверяем, есть ли хотя бы одно значение для отображения
  const hasCountry = props.countryLabel || props.countryValue;
  const hasCity = props.cityLabel || props.cityValue;
  const hasStreet = props.streetLabel || props.streetAnswer;

  return (
    <ContactInformation themeobj={themeobj}>
      {props.showTitleInfo && <ContactTitle>Контактная информация</ContactTitle>}

      <StyledContactCard
        direction={'column'}
        align={'center'}
        gap={'20px'}
        padding={'32px'}
        bgColor={themeobj.colors.backgroundColorSection}
      >
        <Icon iconId={props.iconId} width={40} height={40} />

        {hasCountry && (
          <InfoRow justify={'space-between'} wrap={'nowrap'}>
            {props.countryLabel && <CountryLabel>{props.countryLabel}</CountryLabel>}
            {renderValue(props.countryValue, props.countryLink)}
          </InfoRow>
        )}

        {hasCity && (
          <InfoRow justify={'space-between'} wrap={'nowrap'}>
            {props.cityLabel && <CountryLabel>{props.cityLabel}</CountryLabel>}
            {props.cityValue && <CountryValue>{props.cityValue}</CountryValue>}
          </InfoRow>
        )}

        {hasStreet && (
          <InfoRow justify={'space-between'} wrap={'nowrap'}>
            {props.streetLabel && <CountryLabel>{props.streetLabel}</CountryLabel>}
            {renderValue(props.streetAnswer, props.streetLink)}
          </InfoRow>
        )}
      </StyledContactCard>
    </ContactInformation>
  );
};

const ContactInformation = styled.div<{ themeobj: themeobjectType }>`
  max-width: 500px;

  @media screen and (max-width: 1209px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const ContactTitle = styled.h2`
  text-transform: none;
  margin-bottom: 50px;

  @media screen and (max-width: 1209px) {
    text-align: center;
  }
`;

const StyledContactCard = styled(FlexWrapper)`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoRow = styled(FlexWrapper)`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const CountryLabel = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors?.textColor || 'inherit'};
`;

const CountryValue = styled.span`
  font-size: 15px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors?.textColorSecondary || 'inherit'};
`;

const StyledLink = styled.a`
  font-size: 15px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors?.textColorSecondary || 'inherit'};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: #FFB400;
    transform: translateY(-1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #FFB400;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;