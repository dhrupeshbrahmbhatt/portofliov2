'use client';

import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'DnT Infotech LLP',
      role: 'Full Stack Developer',
      period: 'Jun 2025 - Present',
      location: 'Gujarat, India',
      description:
        'Leading full-stack development initiatives, architecting scalable web applications with React, Next.js, and Node.js. Leveraging AI workflows and agents to accelerate development while maintaining security best practices.',
      achievements: [
        'Built and deployed multiple production applications',
        'Integrated AI-powered workflows to streamline development processes',
        'Implemented CI/CD pipelines for automated deployments',
        'Led code reviews and mentored junior developers',
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'AI Agents',
        'AWS',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-32 bg-black text-white">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] mb-6">
            Experience
          </h2>
          <p className="font-text text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-white/60 max-w-2xl mx-auto">
            Building products that make a difference, one line of code at a
            time.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 border-l border-white/10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-3 h-3 -ml-[6.5px] bg-[#0071e3] rounded-full" />

              {/* Content Card */}
              <div className="bg-[#1d1d1f] rounded-[12px] p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-text text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-[#2997ff]">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 font-text text-[14px] leading-[1.29] tracking-[-0.224px]">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="font-text text-[14px] leading-[1.29] tracking-[-0.224px] text-white/30">
                    {exp.location}
                  </p>
                </div>

                {/* Description */}
                <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white/70 mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-text text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-white/50 flex items-start gap-3"
                      >
                        <span className="text-[#2997ff] mt-0.5 text-[10px]">&#9679;</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-[#2997ff] font-text text-[12px] font-semibold leading-[1.33] tracking-[-0.12px] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <h3 className="font-display text-[40px] font-semibold leading-[1.10] text-center mb-16">
            Education
          </h3>
          <div className="max-w-2xl mx-auto bg-[#1d1d1f] rounded-[12px] p-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#0071e3] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-[21px] font-bold leading-[1.19] tracking-[0.231px] text-white mb-2">
                  Bachelor of Engineering in Computer Engineering
                </h4>
                <p className="font-text text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-[#2997ff] mb-2">
                  Shree Swaminarayan Institute of Technology, Gujarat, India
                </p>
                <p className="font-text text-[14px] leading-[1.29] tracking-[-0.224px] text-white/40 mb-4">
                  2022 - 2026
                </p>
                <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white/70">
                  Focused on software engineering, data structures, algorithms,
                  and web technologies. Graduated with strong foundations in
                  computer science and practical development experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
