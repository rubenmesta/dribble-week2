import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Features } from '../components/Features/Features';
import { SectionWithImage } from '../components/FeaturesSection/SectionWithImage';
import { Footer } from '../components/Footer/Footer';
import { CardSection } from '../components/CardSection/CardSection';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <SectionWithImage />
      <CardSection />
      <Footer />
    </>
  );
};
