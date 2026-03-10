import React from 'react';
import styled from "styled-components";
import { PriceCard } from "./PriceCard/PriceCard";
import { BlockTitle } from "../../../components/SectionTitle/BlockTitle";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../../ThemeProvider";

export type itemType = {
    title: string;
    price?: string;
    icon?: string;
    span?: string;
    description: string;
    iconId?: boolean;
    iconHeight: number;
    iconWidth: number;
    services: { name: string; iconId: boolean; color: string }[];
};

export const Price = () => {
    const { themeobj } = useTheme();

    const itemsData: itemType[] = [
        {
            title: "Debugging & Testing",
            description: "For businesses that need fast, reliable, and bug-free web experiences.\n",
            iconId: true,
            iconHeight: 12,
            iconWidth: 18,
            services: [
                { name: 'Chrome DevTools (Network, Performance, Memory)', iconId: true, color: themeobj.colors.headerText },
                { name: 'Lighthouse аудиты и оптимизация метрик', iconId: true, color: themeobj.colors.headerText },
                { name: 'Cross-browser тестирование', iconId: true, color: themeobj.colors.headerText },
            ]
        },
        {
            title: "Automation",
            description: "Automation tools for performance and search engines",
            iconId: false,
            iconHeight: 12,
            iconWidth: 18,
            services: [
                { name: 'Puppeteer для SSR/Prerendering', iconId: true, color: themeobj.colors.headerText },
                { name: 'Автоматическая генерация Sitemap', iconId: true, color: themeobj.colors.headerText },
                { name: 'Автоматическая генерация robots.txt', iconId: true, color: themeobj.colors.headerText },
              { name: 'Setting up redirect', iconId: true, color: themeobj.colors.headerText },
            ]
        },
        {
            title: "Accessibility",
            description: "Building accessible experiences for all users",
            iconId: true,
            iconHeight: 12,
            iconWidth: 18,
            services: [
                { name: 'Semantic HTML', iconId: true, color: themeobj.colors.headerText },
                { name: 'ARIA attributes', iconId: true, color: themeobj.colors.headerText },
                { name: 'Keyboard navigation', iconId: true, color: themeobj.colors.headerText },
            ]
        }, {
            title: "Analytics & Monitoring",
            description: "Tracking user behavior and business-critical metrics",
            iconId: true,
            iconHeight: 12,
            iconWidth: 18,
            services: [
                { name: 'Event tracking (GA4, Яндекс.Метрика)', iconId: true, color: themeobj.colors.headerText },
                { name: 'Custom события для бизнес-метрик', iconId: true, color: themeobj.colors.headerText },
                { name: 'Conversion funnel настройка', iconId: true, color: themeobj.colors.headerText },
              { name: 'User behavior analysis', iconId: true, color: themeobj.colors.headerText },
            ]
        }
    ];

    return (
        <Fade cascade damping={0.9}>
            <PriceSection>
                <BlockTitle title={'Дополнительные навыки'}
                            subTitle={'Полный цикл разработки: от прототипа в Figma до выкладки на хостинг и настройки аналитики.'} />
                <PriceGridWrapper >
                    {itemsData.map((item, index) => (
                        <PriceCard
                            item={item}
                            key={index}
                        />
                    ))}
                </PriceGridWrapper>
            </PriceSection>
        </Fade>
    );
};


const PriceGridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  -webkit-column-gap: 20px;
  column-gap: 20px;
  row-gap: 20px;
  justify-items: center;

`

const PriceSection = styled.section``;
