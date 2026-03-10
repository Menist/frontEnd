// Services.js
import React from 'react';
import styled from "styled-components";
import {ServicesCard} from "./card/ServicesCard";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../ThemeProvider";

const servicesData = [
  {
    iconId: "webDevelopment",
    title: "web development",
    text: ``,
    listItems: [
      "SPA приложения (React, TypeScript)",
      "Корпоративные сайты с современным дизайном под ключ",
      "Integration с REST API и внешними сервисами",
      "Оптимизация производительности и SEO"
    ],
    link: ''
  },
  {
    iconId: "uIuxDesign",
    title: "uI/uX design",
    listItems: [" Адаптивная вёрстка для всех устройств" ,
      "Современные UI компоненты с анимациями" ,
      "Accessibility и семантический HTML" ,
      "Реализация дизайна из Figma в код"
    ],
    link: ''
  },
  {
    iconId: "photography",
    title: "PERFORMANCE OPTIMIZATION",
    text: '',
    listItems: [
      "Code splitting и lazy loading",
      "Кэширование (3-tier: static → localStorage → API)",
      "Оптимизация загрузки (сокращение на 70-80%)",
      "SSR/Prerendering для SEO",
    ],
    link: ''
  },
  {
    iconId: "gameDesign",
    title: "SEO & ANALYTICS",
    listItems: ["Структурированные данные (Schema.org)" ,
      "Integration Google Analytics 4, Яндекс.Метрика" ,
      "Настройка отслеживания конверсий" ,
      "Генерация Sitemap, настройка robots.txt"],
    link: ''
  },
  // { iconId: "",
  //     title: "advertising",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
  //     link: 'order now'
  // }
];

export const Services = () => {
  const {themeobj} = useTheme();
  return (
    <Fade cascade damping={0.9}>
      <ServicesSection theme={themeobj} id={'services'}>
        <BlockTitle title={"Мои навыки"}
                    subTitle={"Полный цикл создания SPA приложений под ключ. От создания концепции до размещения на хостинге. Подготовка сайта для СЕО продвижения."}/>
        <Container>
          {servicesData.map(service => (
            <ServicesCard
              key={service.title}
              iconId={service.iconId}
              title={service.title}
              text={service.text}
              listItems={service.listItems}
              link={service.link}
            />
          ))}
        </Container>
      </ServicesSection>
    </Fade>
  );
};

const ServicesSection = styled.section`
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(231px, 1fr));
  column-gap: 20px;
  row-gap: 20px;

  @media screen and (max-width: 969px) {
    justify-items: center;
  }
`;

