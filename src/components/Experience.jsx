import { motion } from 'framer-motion'

export default function Experience() {
  const points = [
    "Designed and implemented a robust Event-Driven Architecture (EDA) using Canonical Events.",
    "Developed production-grade REST APIs with Java & Spring Boot using Hexagonal Architecture.",
    "Provisioned Cloud Infrastructure (IaC) with Terraform on AWS (ECS, Lambda, SQS/SNS).",
    "Managed data persistence (RDS, DynamoDB) and automated deployments via CI/CD pipelines."
  ]

  return (
    <section className="w-full py-24 px-6 bg-[#0a0a0a] flex justify-center border-b border-gray-900">
      <div className="w-full max-w-5xl">
        
        <p className="text-sm uppercase tracking-[0.2em] text-gray-700 font-medium italic mb-20">03 — Experience</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 border-t border-gray-800 pt-12">
          
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-2 italic">
              DPG Media
            </h3>
            <p className="text-gray-400 font-light text-lg mb-6 leading-tight">
              Backend / Cloud Developer <br />
              <span className="text-sm text-gray-500 italic uppercase tracking-widest">Internship</span>
            </p>
            
            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em] space-y-1">
              <p>Sept 2025 — Dec 2025</p>
              <p>Antwerp, Belgium</p>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ul className="space-y-6">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-lg leading-snug flex gap-4"
                >
                  <span className="text-gray-800 font-mono text-xs mt-2">—</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}