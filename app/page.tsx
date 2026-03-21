'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import {
  Code,
  Brain,
  Layers,
  Rocket,
} from 'lucide-react';

const aboutItems: BentoItem[] = [
  {
    title: 'Full Stack Development',
    meta: 'End-to-End',
    description:
      'Building complete web applications from frontend to backend — React, Next.js, Node.js, and databases. Every layer, handled.',
    icon: <Layers className='w-4 h-4 text-blue-500' />,
    status: 'Core',
    tags: ['React', 'Next.js', 'Node.js'],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'AI-Powered Workflow',
    meta: '10x Faster',
    description:
      'Leveraging AI tools to accelerate development, automate repetitive tasks, and ship production-ready features at startup speed.',
    icon: <Brain className='w-4 h-4 text-purple-500' />,
    status: 'Active',
    tags: ['AI', 'Automation'],
  },
  {
    title: 'Clean Code & Architecture',
    meta: 'Scalable',
    description:
      'Writing maintainable, well-structured code with modern patterns. TypeScript-first, component-driven, and built to scale.',
    icon: <Code className='w-4 h-4 text-emerald-500' />,
    status: 'Always',
    tags: ['TypeScript', 'Architecture'],
    colSpan: 2,
  },
  {
    title: 'Rapid Product Delivery',
    meta: 'Ship Fast',
    description:
      'From idea to deployment in record time. Full satisfaction guaranteed — pixel-perfect UI, robust APIs, and zero compromises.',
    icon: <Rocket className='w-4 h-4 text-orange-500' />,
    status: 'Priority',
    tags: ['Delivery', 'Quality'],
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType='image'
        mediaSrc='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1280&auto=format&fit=crop'
        bgImageSrc='https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop'
        title='Welcome To My Portfolio'
        date='Creative Developer'
        scrollToExpand='Scroll to explore'
        textBlend
      >
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-2 text-black dark:text-white'>
            About Me
          </h2>
          <p className='text-lg mb-2 text-gray-600 dark:text-gray-400'>
            Full Stack Developer &middot; AI-Enabled &middot; Gujarat, India
          </p>
          <p className='text-base mb-8 text-gray-700 dark:text-gray-300 max-w-2xl'>
            I&apos;m Dhrupesh Brahmbhatt — a full stack developer who uses AI to
            ship products faster without cutting corners. Currently at DnT
            Infotech, I build end-to-end solutions that are clean, performant,
            and delivered with full satisfaction.
          </p>

          <BentoGrid items={aboutItems} />
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
