export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            MD Millat Hosen
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            AI Researcher & Full-Stack Developer
          </p>
          <div className="flex gap-4 text-sm">
            <a 
              href="https://github.com/codermillat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              GitHub
            </a>
            <a 
              href="https://x.com/codermillat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              X/Twitter
            </a>
            <a 
              href="mailto:contact@millat.is-a.dev"
              className="text-blue-400 hover:text-blue-300"
            >
              Email
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            About
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              B.Tech CSE student at Sharda University (graduating May 2026), specializing in AI/ML research and EdTech development. 
              Research intern at IRD focusing on LLM fine-tuning, agent systems, and resource-constrained AI deployment.
            </p>
            <p>
              Built production EdTech platforms serving Bangladeshi students seeking admission to Indian universities. 
              Experience with LLM fine-tuning (Mistral-7B, LoRA, QLoRA), RAG systems, and autonomous AI agents.
            </p>
            <p>
              Seeking Masters/PhD opportunities in AI research, particularly in LLM optimization and agent architectures.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-blue-400">AI/ML</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• LLM Fine-tuning (Mistral-7B, LoRA, QLoRA)</li>
                <li>• RAG Systems & Vector Databases</li>
                <li>• Autonomous AI Agents</li>
                <li>• Hugging Face Ecosystem</li>
                <li>• PyTorch, TensorFlow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-blue-400">Development</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• React, Next.js, TypeScript</li>
                <li>• Python, FastAPI, Spring Boot</li>
                <li>• Docker, Linux, VPS Management</li>
                <li>• SEO, Performance Optimization</li>
                <li>• Git, CI/CD, Self-hosting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Selected Projects
          </h2>
          <div className="space-y-6">
            <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
              <h3 className="text-xl font-medium mb-2">
                <a 
                  href="https://kitovo.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Kitovo.app
                </a>
              </h3>
              <p className="text-gray-400 text-sm mb-3">EdTech Platform</p>
              <p className="text-gray-300 mb-3">
                Production EdTech platform with 47 generators/templates for Indian university admissions. 
                Optimized SEO (90% keyword coverage), 650KB bundle reduction, average load time 439ms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">SEO</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Cloudflare</span>
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
              <h3 className="text-xl font-medium mb-2 text-blue-400">
                LLM Fine-tuning Research
              </h3>
              <p className="text-gray-400 text-sm mb-3">AI Research Project</p>
              <p className="text-gray-300 mb-3">
                Fine-tuning LLMs (Mistral-7B) using LoRA for educational guidance in resource-constrained settings. 
                Focus on efficient deployment for developing regions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">LoRA</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Hugging Face</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">PyTorch</span>
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
              <h3 className="text-xl font-medium mb-2">
                <a 
                  href="https://github.com/codermillat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Open Source Contributions
                </a>
              </h3>
              <p className="text-gray-400 text-sm mb-3">GitHub Portfolio</p>
              <p className="text-gray-300 mb-3">
                29+ repositories covering AI/ML tools, web applications, Chrome extensions, and automation scripts. 
                Active contributor to AI agent and EdTech communities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Open Source</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Research Interests
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Large Language Model optimization and fine-tuning</li>
            <li>• Autonomous AI agent architectures</li>
            <li>• Resource-efficient AI deployment for developing regions</li>
            <li>• Educational technology and learning systems</li>
            <li>• Multi-agent collaboration and memory systems</li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">B.Tech in Computer Science & Engineering</h3>
              <p className="text-gray-400">Sharda University, Greater Noida, India</p>
              <p className="text-gray-500 text-sm">Expected Graduation: May 2026</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-4">
            Open to research collaborations, Masters/PhD opportunities, and EdTech projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:contact@millat.is-a.dev"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
            >
              Email Me
            </a>
            <a 
              href="https://github.com/codermillat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-700 hover:border-gray-600 rounded transition"
            >
              View GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 MD Millat Hosen. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  )
}
