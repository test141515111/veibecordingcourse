import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import VoiceSection from '@/components/VoiceSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <VideoSection />
        <AboutSection />
        <VoiceSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 