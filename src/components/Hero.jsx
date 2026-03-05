import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] flex flex-col justify-between p-6 md:p-12 overflow-hidden">
      
      <div className="absolute top-8 left-8 hidden md:block z-30 opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-mono text-white uppercase tracking-[0.3em] leading-relaxed">
          Loc: 50.7167° N, 4.3833° E <br /> Waterloo, BE
        </p>
      </div>
      
      <div className="absolute top-8 right-8 hidden md:block text-right z-30 opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-mono text-white uppercase tracking-[0.3em] leading-relaxed">
          Status: Available <br /> For Hire 2026
        </p>
      </div>

      <div className="mt-20 md:mt-32 relative z-20">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[16vw] md:text-[12vw] font-bold tracking-tighter leading-[0.8] text-white"
          >
            Adam
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[16vw] md:text-[12vw] font-bold tracking-tighter leading-[0.8] text-white ml-[4vw] md:ml-[6vw]"
          >
            Korompai
          </motion.h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-20">
        
        <div className="hidden md:flex flex-col items-center gap-4">
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-20 bg-gradient-to-b from-white via-gray-800 to-transparent"
          />
          <span className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
            Scroll
          </span>
        </div>

        <div className="flex flex-col items-end text-right">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 120 }} 
            transition={{ delay: 1.3, duration: 0.8 }}
            className="h-[1px] bg-gray-800 mb-6 mr-10"
          />

          <div className="space-y-0 text-3xl md:text-5xl lg:text-6xl font-light text-gray-200 uppercase tracking-tighter leading-[0.9]">
            <div className="overflow-hidden py-1">
              <motion.h2 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }} 
                className="italic pr-10" 
              >
                Junior Backend
              </motion.h2>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.7 }} 
                className="italic pr-10"
              >
                Developer
              </motion.h2>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2.2 }}
            className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase mt-6 pr-10"
          >
            Java • AWS
          </motion.p>
        </div>
      </div>
    </section>
  )
}