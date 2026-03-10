import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Button} from "./Button";
import {InputFragment} from "./InputForm";
import {TextareaStyled} from "./Textarea";
import emailjs from '@emailjs/browser';
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";

export const Form = () => {
  const form = useRef<ElementRef<'form'>>(null);
  const { themeobj } = useTheme();
  const [status, setStatus] = React.useState<'idle'|'success'|'error'>('idle');

  const handleFocus = () => {
    if (status !== 'idle') setStatus('idle');
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_iu0rgwg', 'template_4wov07r', form.current, {
        publicKey: 'a-CKITT6LHGwybHzj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('success');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        },
      );
  };

  return (
    <FlexWrapper flex={"0 0 55%"} minWidth={"300px"} gap={"0"}>
      <FormTitle>Буду рад сотрудничеству!</FormTitle>
      <FormSection ref={form} onSubmit={sendEmail} onFocus={handleFocus}>
        <FlexWrapperFlexWrapper themeobj={themeobj}>
          <InputFragment
            inputLabelName={"Имя *"}
            inputPlaceholder={"Ваше имя"}
            inputId={"name"}
            inputType={"text"}
            inputName={'full_name'}
          />
          <InputFragment
            inputLabelName={"Email *"}
            inputPlaceholder={"your@email.com"}
            inputId={"email"}
            inputType={"email"}
            inputName={'email'}
          />
          <InputFragment
            inputLabelName={"Тема"}
            inputPlaceholder={"О чём хотите написать?"}
            inputId={"subject"}
            inputType={"text"}
            inputName={'subject'}
          />
          <TextareaStyled
            textareaLabelName={"Сообщение"}
            placeholder={"Ваше сообщение..."}
            id={"textarea"}
            textareaName={'message'}
          />
          <Button type={"submit"}>Отправить</Button>
          {status === 'success' && <p style={{color: '#FFB400'}}>Сообщение отправлено!</p>}
          {status === 'error' && <p style={{color: 'red'}}>Ошибка, попробуйте ещё раз</p>}
        </FlexWrapperFlexWrapper>
      </FormSection>
    </FlexWrapper>
  );
};

const FlexWrapperFlexWrapper = styled.div<{ themeobj: themeobjectType }>`
  background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
  display: flex;
  flex-direction: column;
  padding: 25px 25px 25px 25px;
  gap: 10px;
`;

const FormSection = styled.form`
  width: 100%;
`;

const FormTitle = styled.h2`
  margin-bottom: 50px;
  text-transform: none;

  @media screen and (max-width: 1209px) {
    width: 100%;
    text-align: center;
  }
`;