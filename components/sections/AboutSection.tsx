'use client';

export default function AboutSection() {
  const highlights = [
    {
      title: '1+ Years',
      description: 'Professional Experience',
    },
    {
      title: '2+ Projects',
      description: 'Successfully Delivered',
    },
    {
      title: 'Full Stack',
      description: 'Frontend & Backend',
    },
    {
      title: 'Modern Tech',
      description: 'Latest Technologies',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-[#f5f5f7] text-[#1d1d1f]"
    >
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f] mb-6">
            Crafting digital experiences
          </h2>
          <p className="font-text text-[17px] md:text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-[rgba(0,0,0,0.8)] max-w-2xl mx-auto">
            A full-stack developer passionate about building scalable,
            performant web applications. Currently working at MaiNagri.in,
            delivering end-to-end solutions with modern technologies.
          </p>
        </div>

        {/* Stats Grid - Apple product tile style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center py-8 px-6 bg-white rounded-[12px] shadow-[0_3px_20px_rgba(0,0,0,0.08)]"
            >
              <h3 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#0071e3] mb-2">
                {item.title}
              </h3>
              <p className="font-text text-[14px] font-normal leading-[1.29] tracking-[-0.224px] text-[rgba(0,0,0,0.56)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Content - left-aligned body copy per Apple guidelines */}
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h3 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#1d1d1f] mb-4">
              Background
            </h3>
            <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[rgba(0,0,0,0.8)]">
              I&apos;m a B.Tech graduate in Information Technology from Parul
              University (2022), specializing in modern web technologies. My
              journey in software development has been driven by a passion for
              creating seamless user experiences and robust backend systems.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#1d1d1f] mb-4">
              Approach
            </h3>
            <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[rgba(0,0,0,0.8)]">
              I believe in writing clean, maintainable code that scales.
              Whether it&apos;s architecting a microservices backend,
              optimizing frontend performance, or implementing complex
              features, I focus on delivering solutions that are both elegant
              and practical.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#1d1d1f] mb-4">
              Currently
            </h3>
            <p className="font-text text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[rgba(0,0,0,0.8)]">
              Working as a Full Stack Developer at MaiNagri.in, where I lead
              the development of web applications using React, Next.js,
              Node.js, and AWS. I&apos;m constantly exploring new technologies
              and best practices to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
