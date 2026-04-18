'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description:
        'A complete e-commerce solution with admin dashboard, user authentication, payment integration, and real-time inventory management.',
      technologies: [
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'Stripe',
        'AWS S3',
        'Redis',
      ],
      features: [
        'Product catalog with advanced filtering',
        'Secure payment processing',
        'Order tracking and management',
        'Admin analytics dashboard',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Real-Time Chat Application',
      category: 'Full Stack',
      description:
        'A feature-rich chat platform with group conversations, file sharing, and real-time notifications using WebSocket technology.',
      technologies: [
        'React',
        'Node.js',
        'Socket.io',
        'MongoDB',
        'Express',
        'JWT',
      ],
      features: [
        'Real-time messaging',
        'Group chat support',
        'File and image sharing',
        'Online status indicators',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management System',
      category: 'Full Stack',
      description:
        'A collaborative project management tool with kanban boards, team collaboration features, and progress tracking.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Tailwind',
      ],
      features: [
        'Drag-and-drop task boards',
        'Team collaboration tools',
        'Project timeline visualization',
        'Role-based access control',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Forecast App',
      category: 'Frontend',
      description:
        'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather metrics.',
      technologies: ['React', 'TypeScript', 'Weather API', 'Mapbox', 'Charts'],
      features: [
        '7-day weather forecast',
        'Interactive weather maps',
        'Location-based detection',
        'Detailed weather metrics',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio CMS',
      category: 'Full Stack',
      description:
        'A headless CMS for managing portfolio content with a modern admin interface and RESTful API.',
      technologies: [
        'Next.js',
        'Node.js',
        'MongoDB',
        'AWS',
        'GraphQL',
      ],
      features: [
        'Drag-and-drop content builder',
        'Media library management',
        'RESTful & GraphQL APIs',
        'Multi-user support',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Analytics Dashboard',
      category: 'Full Stack',
      description:
        'A comprehensive analytics platform with real-time data visualization and customizable reports.',
      technologies: [
        'React',
        'D3.js',
        'Node.js',
        'PostgreSQL',
        'Redis',
      ],
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Interactive charts and graphs',
        'Export functionality',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-black text-white">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] mb-6">
            Featured Projects
          </h2>
          <p className="font-text text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-white/60 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack
            development, from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1d1d1f] rounded-[12px] overflow-hidden"
            >
              {/* Project Header - solid color, no gradient */}
              <div className="relative h-48 bg-[#272729] flex items-center justify-center">
                <div className="text-center px-6">
                  <h4 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="font-text text-[14px] leading-[1.29] tracking-[-0.224px] text-white/50">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Description */}
                <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white/70 mb-5">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-5">
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-white/40 flex items-start gap-3"
                      >
                        <span className="text-[#2997ff] mt-0.5 text-[10px]">&#9679;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 text-[#2997ff] font-text text-[12px] font-normal leading-[1.33] tracking-[-0.12px] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0071e3] text-white rounded-[8px] hover:bg-[#0077ed] transition-colors font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 text-white rounded-[8px] hover:bg-white/10 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-20 text-center">
          <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white/50 mb-8">
            Want to see more? Check out my GitHub for additional projects and
            contributions.
          </p>
          <a
            href="https://github.com/dhrupeshbrahmbhatt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#2997ff] text-[#2997ff] font-text text-[17px] font-normal rounded-full hover:bg-[#2997ff]/10 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
