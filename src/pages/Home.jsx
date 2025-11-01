import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Products from "../components/products/Products";

const Home = () => {
  const images = [
    "/assets/01.jpeg",
    "/assets/02.jpeg",
    "/assets/03.jpeg",
    "/assets/04.jpeg",
    "/assets/05.jpeg",
    "/assets/06.jpeg",
    "/assets/07.jpeg",
    "/assets/08.jpeg",
    "/assets/09.jpeg",
    "/assets/10.jpeg",
  ];
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <ImageGrid images={images} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
