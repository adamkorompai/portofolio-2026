import { motion } from 'framer-motion'

const projects = [
  {
    id: "01",
    title: "Riot Pulse",
    category: "Event-Driven Architecture",
    description: "A high-performance real-time data pipeline processing League of Legends match data. Built with a focus on low latency and scalability.",
    stack: ["Java", "Spring Boot", "Kafka", "AWS"],
    link: "https://github.com/adamkorompai/riot-pulse",
    image: "/src/assets/riot-pulse-schema.png" 
  }
]

export default function Projects() {
  return (
    <section className="w-full py-24 px-6 bg-[#0a0a0a] flex justify-center border-b border-gray-900">
      <div className="w-full max-w-5xl">
        
        <p className="text-sm uppercase tracking-[0.2em] text-gray-700 font-medium italic mb-20">02 — Selected Work</p>

        <div className="space-y-32">
          {projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-4 block">
                    {project.id} / {project.category}
                  </span>
                  <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 hover:italic transition-all cursor-default">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 border border-gray-800 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a 
                  href={project.link} target="_blank"
                  className="group flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white font-bold"
                  whileHover={{ x: 10 }}
                >
                  View Project 
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </motion.a>
              </div>

              <motion.div 
                className="lg:col-span-7 aspect-[16/10] bg-[#0f0f0f] border border-gray-900 overflow-hidden relative group"
                whileHover={{ borderColor: "#333" }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/800x500/0a0a0a/333333?text=Architecture+Diagram"; }}
                />
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}