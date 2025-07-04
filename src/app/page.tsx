import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import CourseSection from '@/components/CourseSection';
import SupportSection from '@/components/SupportSection';
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
        <CourseSection />
        <SupportSection />
        <VoiceSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 