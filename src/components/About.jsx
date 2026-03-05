import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="w-full py-24 px-6 bg-[#0a0a0a] flex justify-center border-b border-gray-900">
      <div className="w-full max-w-5xl">
        
        <p className="text-sm uppercase tracking-[0.2em] text-gray-700 font-medium italic mb-12">01 — About</p>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 aspect-square overflow-hidden bg-black border border-gray-900"
          >
            <img 
              src="/src/assets/portrait.png" 
              alt="Portrait of Adam Korompai" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-8"
          >
            <p className="text-2xl md:text-3xl text-gray-200 leading-tight font-light mb-8 italic">
              "Based in Waterloo, Belgium, I am a Software Engineer focused on building resilient, event-driven systems."
            </p>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                My journey in software engineering began at 42 Belgium (2022–2025), where I developed a deep foundation in problem-solving and low-level programming. 
              </p>
              <p>
                I later specialized in the Java ecosystem through an intensive industry-focused training at Switchfully. This path led me to DPG Media, where I contributed to production-grade architectures and cloud infrastructure. 
              </p>
              <p>
                I am driven by clean code principles, Hexagonal Architecture, and the challenges of real-time data streaming.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}