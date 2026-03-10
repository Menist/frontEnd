import React from 'react';
import styled from "styled-components";
import {BlogCard} from "./card/BlogCard";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import img1 from "../../../assets/img/section/blog/blog01.webp";
import img1x from "../../../assets/img/section@2x/blog/blog1_@2x.webp";
import img2 from "../../../assets/img/section/blog/blog02.webp";
import img2x from "../../../assets/img/section@2x/blog/blog2_@2x.webp";
import {Fade} from "react-awesome-reveal";

const blogData = [
  {
    src: img1,
    srcSet: img1x,
    title: "IMC COMPUTERS LTD",
    text: "Миграция корпоративного сайта с Wordpress на полноценный SPA",
    textLink: "Learn more",
    linkUrl: "https://imc.by/",
  },
  {
    src: img2,
    srcSet: img2x,
    title: "TMDb Movies Tv Shows",
    text: "SPA приложение для поиска и рекомендаций фильмов",
    textLink: "Learn more",
    linkUrl: "https://tmdb-mu-gold.vercel.app/",
  },
  // {
  //   src: img3,
  //   srcSet: img3x,
  //   title: "How to make Flyer Design",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
  //   textLink: "Learn more"
  // }
];

export const Blog = () => {
  return (
    <Fade cascade damping={.9}>
      <BlogSection id={'blog'}>
        <BlockTitle title={'Проекты'}
                    subTitle={""}></BlockTitle>
        <FlexWrapper justify={"space-between"}>
          {blogData.map((blogItem, index) => (
            <BlogCard
              key={index}
              src={blogItem.src}
              srcSet={blogItem.srcSet}
              title={blogItem.title}
              text={blogItem.text}
              textLink={blogItem.textLink}
              linkUrl={blogItem.linkUrl}/>
          ))}
        </FlexWrapper>
      </BlogSection>
    </Fade>
  );
};

const BlogSection = styled.section`
  ${FlexWrapper} {
    @media screen and (max-width: 1290px) {
      flex: 0 0 80%;
    }

    @media screen and (max-width: 1170px) {
      flex: 0 0 80%;
      justify-content: center;
    }
  }
`;
