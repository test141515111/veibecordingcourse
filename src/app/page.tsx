import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import ArchiveSection from '@/components/ArchiveSection';
import VoiceSection from '@/components/VoiceSection';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <VideoSection />
        <AboutSection />
        <ArchiveSection />
        <VoiceSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
} 