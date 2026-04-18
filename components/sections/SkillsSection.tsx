'use client';

import {
  Code2,
  Database,
  Cloud,
  Layers,
  Palette,
  Wrench,
  Bot,
} from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Framer Motion',
        'Redux',
        'React Query',
      ],
    },
    {
      category: 'Backend',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        'Node.js',
        'Express.js',
        'Prisma',
        'REST APIs',
        'GraphQL',
        'WebSocket',
        'Authentication',
        'Microservices',
      ],
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Redis',
        'Database Design',
        'Query Optimization',
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        'AWS (EC2, S3, Lambda)',
        'Docker',
        'CI/CD',
        'GitHub Actions',
        'Nginx',
        'Linux',
      ],
    },
    {
      category: 'Architecture',
      icon: <Layers className="w-6 h-6" />,
      skills: [
        'System Design',
        'Microservices',
        'API Design',
        'Design Patterns',
        'Clean Architecture',
        'Scalability',
      ],
    },
    {
      category: 'AI & Automation',
      icon: <Bot className="w-6 h-6" />,
      skills: [
        'AI Workflows',
        'AI Agents',
        'Prompt Engineering',
        'Claude code',
        'Claude CLI',
        'LLM Integration',
        'Automated Testing',
      ],
    },
    {
      category: 'Tools & Others',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Figma',
        'Agile/Scrum',
        'Jira',
        'Slack',
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f] mb-6">
            Technical Skills
          </h2>
          <p className="font-text text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-[rgba(0,0,0,0.56)] max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications from the ground up.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] p-8"
            >
              {/* Icon and Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0071e3]/10 rounded-[12px] flex items-center justify-center text-[#0071e3]">
                  {category.icon}
                </div>
                <h3 className="font-display text-[21px] font-bold leading-[1.19] tracking-[0.231px] text-[#1d1d1f]">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#f5f5f7] text-[rgba(0,0,0,0.8)] font-text text-[14px] leading-[1.29] tracking-[-0.224px] rounded-[5px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-20 text-center">
          <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[rgba(0,0,0,0.56)] max-w-2xl mx-auto">
            Always learning and staying updated with the latest technologies and
            best practices in web development. Currently exploring serverless
            architectures, WebAssembly, and advanced performance optimization
            techniques.
          </p>
        </div>
      </div>
    </section>
  );
}
