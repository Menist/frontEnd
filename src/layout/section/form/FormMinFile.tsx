import React from 'react';
import { Form } from "./formElement/Form";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contact } from "./formElement/Contact";
import { Fade } from "react-awesome-reveal";

const itemsData = [
  {
    iconId: "address",
    showTitleInfo: true,
    countryLabel: 'Страна',
    countryValue: 'Беларусь',
    cityLabel: 'Город',
    cityValue: 'Минск',
  },
  {
    iconId: "email",
    showTitleInfo: false,
    countryLabel: 'Email:',
    countryValue: 'bastianvanhenning@gmail.com',
    countryLink: 'mailto:bastianvanhenning@gmail.com',
    streetLabel: "Telegram:",
    streetAnswer: '@Heroes_1977',
    streetLink: 'https://t.me/Heroes_1977'},
  {
    iconId: "tel",
    showTitleInfo: false,
    streetLabel: "Телефон:",
    streetAnswer: '+375 29 891 42 28',
    streetLink: 'tel:+375298914228',
  }
];

export const FormMainFile = () => {
  return (
    <Fade cascade damping={0.2} triggerOnce>
      <FormMainFileSection id="contacts">
        <FlexWrapper justify="space-between" align="flex-start" gap="40px">
          <Form />
          <ContactsWrapper direction="column" gap="30px">
            {itemsData.map((item, index) => (
              <Contact
                key={index}
                iconId={item.iconId}
                showTitleInfo={item.showTitleInfo}
                countryLabel={item.countryLabel}
                countryValue={item.countryValue}
                countryLink={item.countryLink}
                cityLabel={item.cityLabel}
                cityValue={item.cityValue}
                streetLabel={item.streetLabel}
                streetAnswer={item.streetAnswer}
                streetLink={item.streetLink}
              />
            ))}
          </ContactsWrapper>
        </FlexWrapper>
      </FormMainFileSection>
    </Fade>
  );
};

const FormMainFileSection = styled.section`
  margin-top: 70px;
  padding: 0 20px;
`;

const ContactsWrapper = styled(FlexWrapper)`
  min-width: 300px;

  @media screen and (max-width: 1209px) {
    width: 100%;
    align-items: center;
  }
`;