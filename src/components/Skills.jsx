import { motion } from 'framer-motion'

export default function Stack() {
  const technologies = ["Java 17+", "Spring Boot", "Angular", "Docker", "AWS", "PostgreSQL", "Kafka", "Git", "JUnit"]
  const certifications = ["AWS Certified Developer", "AWS Cloud Practitioner", "Java SE Programmer", "Docker Associate"]
  const education = ["42 Belgium", "Switchfully"]

  return (
    <section className="w-full py-24 px-6 bg-[#0a0a0a] flex justify-center border-b border-gray-900">
      <div className="w-full max-w-5xl">
        
        <p className="text-sm uppercase tracking-[0.2em] text-gray-700 font-medium italic mb-20">04 — Stack & Education</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-0">
          
          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-8 italic">Stack</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {technologies.map((tech) => (
                <span key={tech} className="text-gray-300 font-light text-base tracking-tight italic hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-8 italic">Certifications</h4>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert} className="text-gray-300 font-light text-base tracking-tight leading-tight italic hover:text-white transition-colors">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-8 italic">Education</h4>
            <ul className="space-y-4">
              {education.map((edu) => (
                <li key={edu} className="text-gray-300 font-light text-base tracking-tight leading-tight italic hover:text-white transition-colors">
                  {edu}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}