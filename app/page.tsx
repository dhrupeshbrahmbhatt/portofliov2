'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import {
  Code,
  Brain,
  Layers,
  Rocket,
  Send,
} from 'lucide-react';

const aboutItems: BentoItem[] = [
  {
    title: 'Full Stack Development',
    meta: 'End-to-End',
    description:
      'Building complete web applications from frontend to backend — React, Next.js, Node.js, and databases. Every layer, handled.',
    icon: <Layers className='w-4 h-4 text-blue-400' />,
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
    icon: <Brain className='w-4 h-4 text-purple-400' />,
    status: 'Active',
    tags: ['AI', 'Automation'],
  },
  {
    title: 'Clean Code & Architecture',
    meta: 'Scalable',
    description:
      'Writing maintainable, well-structured code with modern patterns. TypeScript-first, component-driven, and built to scale.',
    icon: <Code className='w-4 h-4 text-emerald-400' />,
    status: 'Always',
    tags: ['TypeScript', 'Architecture'],
    colSpan: 2,
  },
  {
    title: 'Rapid Product Delivery',
    meta: 'Ship Fast',
    description:
      'From idea to deployment in record time. Full satisfaction guaranteed — pixel-perfect UI, robust APIs, and zero compromises.',
    icon: <Rocket className='w-4 h-4 text-amber-400' />,
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
          <h2 className='text-3xl font-bold mb-2 text-white'>
            About Me
          </h2>
          <p className='text-lg mb-2 text-slate-400'>
            Full Stack Developer &middot; AI-Enabled &middot; Gujarat, India
          </p>
          <p className='text-base mb-8 text-slate-300 max-w-2xl'>
            I&apos;m Dhrupesh Brahmbhatt — a full stack developer who uses AI to
            ship products faster without cutting corners. Currently at DnT
            Infotech, I build end-to-end solutions that are clean, performant,
            and delivered with full satisfaction.
          </p>

          <BentoGrid items={aboutItems} />

          <div className='mt-20 max-w-2xl mx-auto'>
            <h2 className='text-3xl font-bold mb-2 text-white'>
              Let&apos;s Set Up a Call
            </h2>
            <p className='text-base mb-8 text-slate-400'>
              Tell us about your requirements and we&apos;ll get back to you to
              schedule a discussion.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className='flex flex-col gap-4'
            >
              <div className='flex flex-col sm:flex-row gap-4'>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  required
                  className='flex-1 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 outline-none focus:border-slate-500 transition-colors'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  required
                  className='flex-1 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 outline-none focus:border-slate-500 transition-colors'
                />
              </div>
              <input
                type='tel'
                name='phone'
                placeholder='Phone Number'
                className='px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 outline-none focus:border-slate-500 transition-colors'
              />
              <textarea
                name='message'
                placeholder='Tell us briefly what you need — project type, timeline, budget, etc.'
                rows={4}
                required
                className='px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 outline-none focus:border-slate-500 transition-colors resize-none'
              />
              <button
                type='submit'
                className='flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors w-full sm:w-auto self-start'
              >
                <Send className='w-4 h-4' />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
