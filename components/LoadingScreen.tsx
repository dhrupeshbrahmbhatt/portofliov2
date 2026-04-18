'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'revealing' | 'fading' | 'done'>('revealing');
  const name = 'Dhrupesh Brahmbhatt';
  const letters = name.split('');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      onComplete();
      return;
    }

    // After all letters reveal, wait a beat, then fade out
    const revealDuration = letters.length * 60 + 600; // stagger + hold
    const fadeTimer = setTimeout(() => setPhase('fading'), revealDuration);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, revealDuration + 500); // 500ms fade out

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete, letters.length]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-black flex items-center justify-center transition-opacity duration-500 ${
        phase === 'fading' || phase === 'done' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="font-display text-[40px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.07] tracking-[-0.28px] text-white select-none">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="inline-block loading-letter"
            style={{
              animationDelay: `${i * 60}ms`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
