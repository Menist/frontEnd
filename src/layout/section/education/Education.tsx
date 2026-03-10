import React from 'react';
import styled from "styled-components";
import {EducationStyled} from "./EducationStyled";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import {Fade} from "react-awesome-reveal";

const itemsData = [
  {
    infoTitle: "IT-INCUBATOR",
    infoSubTitle: "Student",
    infoData: "April 2024 - April 2025",
    descriptionTitle: "Front-end developer",
    descriptionText: "JavaScript, TypeScript, React, Redux (RTK Query)"
  },
  {
    infoTitle: "Teach Me Skills",
    infoSubTitle: "Student",
    infoData: "September 2023 - February 2024",
    descriptionTitle: "Front-end developer",
    descriptionText: "JavaScript, Css, TypeScript, React"
  },
  {
    infoTitle: "ФГБОУ ВО Волжский государственный университет водного транспорта имени адмирала М. П. Лазарева",
    infoSubTitle: "Student",
    infoData: "2013 - 2017",
    descriptionTitle: "Инженер по защите окружающей среды",
    descriptionText: "Высшее техническое образование. Системный подход к решению задач, анализ данных и структурированию информации."
  }
];

export const Education = () => {
  return (
    <Fade cascade damping={.9}>
      <EducationSection id={'education'}>
        <BlockTitle title={'Образование'}
                    subTitle={'Фундаментальная подготовка по современной веб-разработке с упором на практическое применение React и TypeScript.'}></BlockTitle>

        {itemsData.map((item, index) => {
          return <EducationStyled key={index}
                                  infoTitle={item.infoTitle} infoSubTitle={item.infoSubTitle}
                                  infoData={item.infoData} descriptionTitle={item.descriptionTitle}
                                  descriptionText={item.descriptionText}/>
        })}
      </EducationSection>
    </Fade>
  );
}
const EducationSection = styled.section`
`
