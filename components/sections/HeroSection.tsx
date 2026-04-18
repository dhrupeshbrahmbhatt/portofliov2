'use client';

import { ArrowRight, Download } from 'lucide-react';

interface HeroSectionProps {
  animateIn?: boolean;
}

export default function HeroSection({ animateIn = true }: HeroSectionProps) {
  const anim = (base: string, delay?: string) =>
    animateIn
      ? `opacity-0 ${base}${delay ? ` [animation-delay:${delay}]` : ''}`
      : 'opacity-0';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-[980px] mx-auto px-6 text-center">
        {/* Subtle label */}
        <div className={`mb-8 ${anim('animate-fade-in')}`}>
          <span className="inline-block px-4 py-1.5 border border-white/15 rounded-full text-[12px] font-normal tracking-[-0.12px] leading-[1.33] text-white/60">
            Full Stack Developer
          </span>
        </div>

        {/* Display Hero headline */}
        <h1 className={`font-display text-[48px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-semibold leading-[1.05] tracking-[-1.44px] text-white mb-6 ${anim('animate-fade-in-up')}`}>
          Dhrupesh
          <br />
          Brahmbhatt
        </h1>

        {/* Sub-heading */}
        <p className={`font-display text-[21px] md:text-[28px] font-normal leading-[1.14] tracking-[0.196px] text-white/90 mb-4 max-w-3xl mx-auto ${anim('animate-fade-in-up', '100ms')}`}>
          Building exceptional web experiences
          <br className="hidden sm:block" />
          with cutting-edge technology.
        </p>

        {/* Body text */}
        <p className={`font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white/50 mb-16 max-w-2xl mx-auto ${anim('animate-fade-in-up', '200ms')}`}>
          Specializing in full-stack development with React, Next.js, Node.js,
          and modern cloud technologies. Delivering production-ready solutions
          that scale.
        </p>

        {/* Apple-style CTA buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 ${anim('animate-fade-in-up', '300ms')}`}>
          {/* Primary blue CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-[#0071e3] text-white text-[17px] font-normal rounded-full hover:bg-[#0077ed] transition-colors duration-200"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Outline pill CTA */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-[17px] font-normal rounded-full hover:border-white/60 transition-colors duration-200"
          >
            View my work
          </a>

          {/* Resume pill CTA */}
          <a
            href="/Dhrupesh_Brahmbhatt_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-[17px] font-normal rounded-full hover:border-white/60 transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[22px] h-[36px] border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
}
