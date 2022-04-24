/** @format */

import React from "react";
import Carousel from "../../Componenets/Carousels/Carousel";
import { TestimonialsContainter } from "./styles/homePage.styled";
import Container from "react-bootstrap/Container";
import Layout from "../../Componenets/Layout/Layout";
import CardContainer from "../../Componenets/cardContainer/CardContainer";
import Cart from "../../Componenets/Cart/Cart";
import CardContainer2 from "../../Componenets/cardContainer/CardContainer2";

const HomePage = () => {
  const NavMenuItems = [
    { Fashion: ["Accesories", "Dresses", "Pants", "T-shirts"] },
    { Bags: ["Backpacks", "Clutches", "Formal", "Purses"] },
    { "HEALTH & BEAUTY": ["Accessories", "Body", "Makeup", "Lipstick"] },
    { FOOTWEAR: ["Flats", "Flip Flops", "Heels", "Running"] },
    { "HOME DECOR": ["Armchair", "Decor", "Lamps", "Sofa"] },
    {
      ELECTRONICS: [
        "Desktops",
        "Laptops & Notebooks",
        "Components",
        "Phones & PDAs",
      ],
    },
    { FOOD: ["Breakfast", "Dessert", "Grill", "Pasta"] },
    { "BABY & KIDS": ["Bath", "Baby Care", "Diepers", "Fashion"] },
  ];
  const fullscreenCarouselItems = [
    {
      imgSrc: "intro1.jpeg",
      header: "Beauty & Brains",
      text: "Sprints take your desgin skills to a new level",
    },
    {
      imgSrc: "intro2.jpg",
      header: "Simply styles",
      text: "Discover our wonderful new items",
    },
    {
      imgSrc: "intro3.jpg",
      header: "make your world wonderfull",
      text: "with our collection!",
    },
  ];

  const testimonialsItems = [
    {
      text: "I've purchased hundreds and hundreds of files over the past 7 years. But there is nothing close to this support and professionalism. Not only is theme, simple , useful and modern, but again the support is remarkable.  Very happy I got this theme! Thank you!",
      author: "- Charle Laron",
    },
    {
      text: "I am a web developer for many years i haven't seen anything clear clean coded like journal it makes my live so much easier thanks for the great work you have done.",
      author: "- Larry Elon",
    },
    {
      text: "Great toolkit for Opencart. As a base platform, Opencart can be a nightmare to modify and get looking good. Journal takes away all the pain.",
      author: "- kellyhorne",
    },
    {
      text: "This shop is just amazing. With the new version J3 everything has become much easier to adjust. It's indeed, as the author says, not possible to mention all the posibilities, because it's just to much. Great value for the price!",
      author: "- TBNWorld",
    },
    {
      text: "Amazing ways to customize so you dont end up with a site looking like everyone elses :) Unique sites are much better than clone sites, as they keep the customers interest and the bounce rate is alot lower. Great Job A+",
      author: "- sacredcirclegifts",
    },
  ];
  return (
    <>
      <Layout>
        {/* <Header items={NavMenuItems} /> */}
        <Carousel
          type="fullscreen"
          items={fullscreenCarouselItems}
          interval={null}
          subHeader={true}
        />
        <Carousel type="category" />
        <CardContainer />
        <CardContainer2 />
        <TestimonialsContainter>
          <Container>
            <Carousel
              type="testimonials"
              items={testimonialsItems}
              interval={null}
            />
          </Container>
        </TestimonialsContainter>
        <Carousel type="brands" />
      </Layout>
    </>
  );
};

export default HomePage;
