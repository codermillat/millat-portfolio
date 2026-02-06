export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#top" className="text-lg font-semibold hover:text-blue-400 transition">
            MD Millat Hosen
          </a>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#research" className="hover:text-blue-400 transition">Research</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section id="top" className="min-h-[80vh] flex flex-col justify-center mb-24">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 font-medium">👋 Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                MD Millat Hosen
              </h1>
            </div>
            <p className="text-2xl text-gray-400">
              AI Researcher × Web Developer × Digital Marketer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl">
              Digital Marketing & SEO Intern at Sharda University. Building efficient AI systems, production websites, 
              and data-driven marketing campaigns. Seeking Masters opportunities in AI/ML research.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/codermillat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-medium"
              >
                View GitHub
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg transition font-medium"
              >
                Get in Touch
              </a>
            </div>
            <div className="flex gap-6 text-sm text-gray-500 pt-2">
              <a 
                href="https://github.com/codermillat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition flex items-center gap-2"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://x.com/codermillat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition flex items-center gap-2"
                aria-label="X/Twitter Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X/Twitter
              </a>
              <a 
                href="mailto:millat6575@gmail.com"
                className="hover:text-blue-400 transition flex items-center gap-2"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/codermillat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition flex items-center gap-2"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-400">01.</span> About
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I'm a B.Tech CSE student at <strong className="text-white">Sharda University</strong> (graduating June 2026), 
              working as a <strong className="text-white">Digital Marketing & SEO Intern</strong> with the International Relations Division.
            </p>
            <p>
              My work spans <strong className="text-white">AI research</strong>, <strong className="text-white">web development</strong>, and <strong className="text-white">digital marketing</strong>. 
              I specialize in fine-tuning large language models (Mistral-7B) using parameter-efficient techniques like LoRA and QLoRA, 
              with a focus on deployment in resource-constrained settings. I've authored an arXiv preprint on parameter-efficient finetuning 
              for educational guidance in low-resource environments.
            </p>
            <p>
              Previously worked as a Web Developer at <strong className="text-white">Study International Admission Care (SIAC)</strong> (Feb 2023 - Mar 2024), 
              building production websites and managing digital marketing campaigns. My technical expertise includes Python, C++, Java, 
              web development (React/Next.js), WordPress, MySQL, cloud platforms, and server management—alongside practical experience 
              in SEO, analytics, and performance optimization.
            </p>
            <p>
              Currently seeking <strong className="text-white">Masters opportunities</strong> in AI/ML research, 
              particularly in areas of LLM efficiency, multi-agent systems, and AI for education. Also open to internships 
              and collaborations where strong fundamentals and measurable impact matter.
            </p>
          </div>
        </section>

        {/* Research Interests */}
        <section id="research" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-400">02.</span> Research Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">LLM Optimization</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Parameter-efficient fine-tuning (LoRA, QLoRA)</li>
                <li>• Model compression for edge deployment</li>
                <li>• Resource-constrained AI systems</li>
                <li>• Efficient inference optimization</li>
              </ul>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Autonomous Agents</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Multi-agent collaboration architectures</li>
                <li>• Memory systems & context persistence</li>
                <li>• Agent-based reasoning & planning</li>
                <li>• Tool use & API integration</li>
              </ul>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">RAG & Retrieval</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Retrieval-augmented generation systems</li>
                <li>• Vector databases & semantic search</li>
                <li>• Contextual chunking strategies</li>
                <li>• Hybrid retrieval methods</li>
              </ul>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">AI for Education</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Personalized learning systems</li>
                <li>• Educational AI for developing regions</li>
                <li>• Scalable EdTech platforms</li>
                <li>• Adaptive assessment systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-400">04.</span> Experience
          </h2>
          <div className="border-l-2 border-blue-500 pl-6 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-1">Digital Marketing & SEO Intern</h3>
              <p className="text-blue-400 font-medium mb-2">Sharda University - International Relations Division</p>
              <p className="text-gray-500 text-sm mb-3">May 2025 - Present (10 months) · Greater Noida, India</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Support digital outreach initiatives to enhance university's global presence</li>
                <li>• Manage and grow official YouTube channel "Study at Sharda University"</li>
                <li>• Conduct SEO and keyword research to improve online visibility</li>
                <li>• Develop digital marketing campaigns for international student recruitment</li>
                <li>• Collaborate on social media planning and performance analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Web Developer</h3>
              <p className="text-blue-400 font-medium mb-2">Study International Admission Care (SIAC)</p>
              <p className="text-gray-500 text-sm mb-3">Feb 2023 - Mar 2024 (1 year 2 months)</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Built and launched production website (<a href="https://www.siacabroad.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">siacabroad.com</a>)</li>
                <li>• Strengthened online presence and user experience</li>
                <li>• Spearheaded marketing initiatives across Facebook, Google, and YouTube</li>
                <li>• Maintained and optimized web infrastructure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-400">05.</span> Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LoRA', 'QLoRA', 'RAG', 'Vector DBs'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-500 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Node.js', 'Docker', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-500 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'VPS', 'Cloudflare', 'Vercel', 'PostgreSQL', 'MongoDB', 'Redis', 'Nginx'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-500 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-400">06.</span> Featured Projects
          </h2>
          <div className="space-y-6">
            {/* Featured Project 1 */}
            <article className="group border border-gray-800 rounded-lg p-8 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    <a 
                      href="https://kitovo.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Kitovo.app →
                    </a>
                  </h3>
                  <p className="text-gray-500 text-sm">Production EdTech Platform</p>
                </div>
                <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Full-stack EdTech platform with 47+ generators and templates for Indian university admissions. 
                Serves Bangladeshi students with automated receipt generation, fee calculators, and document tools. 
                Achieved <strong className="text-white">90% keyword coverage</strong> and <strong className="text-white">439ms avg load time</strong> through 
                aggressive SEO and performance optimization.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>🚀 72 pages deployed</span>
                <span>⚡ 650KB bundle optimized</span>
                <span>📊 Google Analytics integrated</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'SEO', 'Cloudflare Pages'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded border border-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            {/* Featured Project 2 */}
            <article className="group border border-gray-800 rounded-lg p-8 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                    LLM Fine-tuning Research
                  </h3>
                  <p className="text-gray-500 text-sm">AI Research Project</p>
                </div>
                <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Research on efficient fine-tuning of Mistral-7B using LoRA/QLoRA for educational guidance in 
                resource-constrained environments. Focus on deployment in developing regions with limited compute infrastructure. 
                Achieved <strong className="text-white">4-bit quantization</strong> with minimal accuracy loss, enabling inference on consumer hardware.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>🧠 Mistral-7B base model</span>
                <span>⚙️ LoRA r=16, α=32</span>
                <span>💾 4-bit quantization</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'Hugging Face', 'LoRA', 'QLoRA', 'Transformers'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded border border-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            {/* Featured Project 3 */}
            <article className="group border border-gray-800 rounded-lg p-8 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    <a 
                      href="https://github.com/codermillat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Open Source Portfolio →
                    </a>
                  </h3>
                  <p className="text-gray-500 text-sm">29+ Public Repositories</p>
                </div>
                <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Diverse collection of AI tools, web applications, Chrome extensions, and automation scripts. 
                Active contributor to AI agent communities (Moltbook, OpenClaw). Projects span machine learning, 
                full-stack development, browser automation, and EdTech utilities.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>📦 29+ repositories</span>
                <span>⭐ Active contributor</span>
                <span>🤝 Community engagement</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Python', 'React', 'AI/ML', 'Open Source'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded border border-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Education */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-400">07.</span> Education
          </h2>
          <div className="border-l-2 border-blue-500 pl-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-1">Bachelor of Technology (B.Tech.) in Computer Science & Engineering</h3>
              <p className="text-blue-400 font-medium mb-2">Sharda University, Greater Noida, India</p>
              <p className="text-gray-500 text-sm mb-3">June 2022 - June 2026 (Expected)</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Digital Marketing & SEO Intern at International Relations Division</li>
                <li>• Focus: AI/ML, LLM optimization, web development, and digital marketing</li>
                <li>• Relevant coursework: Machine Learning, Deep Learning, Algorithms, Data Structures</li>
                <li>• arXiv preprint author: Parameter-efficient finetuning for educational guidance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Higher Secondary Certificate (HSC) - Science</h3>
              <p className="text-blue-400 font-medium mb-2">Aftabgonj Govt College</p>
              <p className="text-gray-500 text-sm">2019 - 2021</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-400">08.</span> Get in Touch
          </h2>
          <div className="border border-gray-800 rounded-lg p-8 bg-gradient-to-br from-gray-900/50 to-transparent">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm actively seeking <strong className="text-white">Masters opportunities</strong> in AI research, 
              particularly in LLM optimization and autonomous agents. Also open to internships, research collaborations, 
              and EdTech projects where strong fundamentals and measurable impact matter.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:millat6575@gmail.com" className="hover:text-blue-400 transition">
                  millat6575@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919873842259" className="hover:text-blue-400 transition">
                  +91 98738 42259
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/in/codermillat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  linkedin.com/in/codermillat
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <a href="https://github.com/codermillat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  github.com/codermillat
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <a href="https://x.com/codermillat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  @codermillat
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:millat6575@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-medium"
              >
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/codermillat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg transition font-medium"
              >
                View LinkedIn
              </a>
              <a 
                href="https://github.com/codermillat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg transition font-medium"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-800 text-center space-y-4">
          <div className="flex justify-center gap-6 text-gray-500">
            <a 
              href="https://github.com/codermillat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://x.com/codermillat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="X/Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href="mailto:millat6575@gmail.com"
              className="hover:text-blue-400 transition"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/codermillat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 MD Millat Hosen. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-gray-600 text-xs">
            Designed with precision. Optimized for performance.
          </p>
        </footer>
      </div>
    </main>
  )
}
