import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Background() {
  const [mounted, setMounted] = useState(false)
  
  // Only render animations and shapes after hydration to prevent mismatches
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* 1. Fixed Ambient Layer (Drifting bubbles, vignette) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
        
        {/* Light Mode Soft Iridescent Bubble Background */}
        {mounted && (
          <div className="absolute inset-0 block dark:hidden opacity-98">
            {/* Top Left Bubble (Yellow/Orange) */}
            <motion.div
              animate={{ 
                x: [0, 50, -25, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-yellow-250/50 via-orange-200/45 to-pink-200/50 blur-[70px]"
            />

            {/* Top Right Bubble (Pink/Blue/Purple) */}
            <motion.div
              animate={{ 
                x: [0, -40, 40, 0],
                y: [0, 40, -40, 0],
                scale: [1, 0.9, 1.1, 1]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-[5%] top-[10%] h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-pink-300/60 via-purple-300/50 to-sky-300/60 blur-[75px]"
            />

            {/* Center Left Bubble (Mint/Teal) */}
            <motion.div
              animate={{ 
                x: [0, 30, -40, 0],
                y: [0, 50, -25, 0]
              }}
              transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[5%] top-[40%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-200/50 via-teal-200/40 to-sky-200/50 blur-[70px]"
            />

            {/* Bottom Right Bubble (Lavender/Purple) */}
            <motion.div
              animate={{ 
                x: [0, -50, 30, 0],
                y: [0, -40, 50, 0]
              }}
              transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-[10%] -right-[5%] h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-purple-200/60 via-fuchsia-250/50 to-pink-250/60 blur-[80px]"
            />
          </div>
        )}

        {/* Dark Mode Cyber Nebula Background */}
        {mounted && (
          <div className="absolute inset-0 hidden dark:block">
            <motion.div
              animate={{ 
                opacity: [0.2, 0.3, 0.2], 
                scale: [1, 1.05, 1],
                x: [0, 40, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-[10%] -top-[10%] h-[550px] w-[550px] rounded-full bg-emerald-500/20 blur-[100px]"
            />
            <motion.div
              animate={{ 
                opacity: [0.15, 0.25, 0.15], 
                scale: [1, 1.1, 1],
                x: [0, -30, 0],
                y: [0, -40, 0]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-[10%] -right-[10%] h-[650px] w-[650px] rounded-full bg-purple-600/18 blur-[110px]"
            />
            <motion.div
              animate={{ 
                opacity: [0.1, 0.2, 0.1], 
                scale: [1, 1.1, 1],
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[25%] top-[35%] h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[100px]"
            />
          </div>
        )}

        {/* Edge Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent_50%,rgba(0,0,0,0.01)_100%)] dark:bg-[radial-gradient(circle_800px_at_50%_50%,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* 2. Floating Glass 3D Shapes Layer */}
      <div className="pointer-events-none fixed inset-0 -z-[9] overflow-hidden w-full h-full">
        {/* Soft grid masking for a high-end feel */}
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)]" />
        
        {mounted && (
          <>
            {/* Top Left Sphere */}
            <div className="absolute top-[8%] left-[5%] h-24 w-24 glass-sphere animate-float-slow opacity-95 dark:opacity-50" />

            {/* Top Right Ring (Large, wraps around top right of card/profile image) */}
            <div className="absolute -top-[5%] -right-[15%] h-[460px] w-[460px] glass-ring border-[36px] border-white/20 dark:border-zinc-800/20 animate-float-slow opacity-80 dark:opacity-40" />

            {/* Middle Left Ring */}
            <div className="absolute top-[45%] left-[8%] h-24 w-24 glass-ring border-[16px] border-white/35 dark:border-zinc-800/35 animate-float-fast opacity-95 dark:opacity-50" />

            {/* Middle Right Sphere (Peeking from screen edge) */}
            <div className="absolute top-[38%] -right-[3%] h-16 w-16 glass-sphere animate-float-medium opacity-95 dark:opacity-50" />

            {/* Bottom Left Sphere */}
            <div className="absolute bottom-[18%] left-[10%] h-32 w-32 glass-sphere animate-float-medium opacity-98 dark:opacity-55" />

            {/* Bottom Right Ring */}
            <div className="absolute bottom-[10%] right-[5%] h-32 w-32 glass-ring border-[20px] border-white/25 dark:border-zinc-800/25 animate-float-fast opacity-85 dark:opacity-45" />

            {/* Floating Developer Symbols (Right Side) */}
            {/* 1. Angle Brackets </> */}
            <div className="absolute top-[22%] right-[18%] font-mono text-[56px] sm:text-[68px] font-bold text-emerald-500/20 dark:text-emerald-400/10 animate-float-slow select-none pointer-events-none filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.05)]">
              &lt;/&gt;
            </div>
            
            {/* 2. Curly Braces {} */}
            <div className="absolute top-[52%] right-[15%] font-mono text-[64px] sm:text-[76px] font-medium text-purple-500/20 dark:text-purple-400/10 animate-float-medium select-none pointer-events-none filter drop-shadow-[0_2px_10px_rgba(168,85,247,0.05)]">
              {"{}"}
            </div>

            {/* 3. Semicolon ; */}
            <div className="absolute top-[66%] right-[22%] font-mono text-[72px] sm:text-[84px] font-bold text-zinc-400/25 dark:text-zinc-650/15 animate-float-fast select-none pointer-events-none">
              ;
            </div>

            {/* 4. Parentheses () */}
            <div className="absolute top-[80%] right-[12%] font-mono text-[48px] sm:text-[60px] font-semibold text-zinc-400/20 dark:text-zinc-600/15 animate-float-slow select-none pointer-events-none">
              ()
            </div>
          </>
        )}
      </div>

      {/* 3. Central Glass Blur Barrier */}
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[95vw] lg:max-w-6xl -z-[8] bg-slate-50/5 dark:bg-zinc-950/5 backdrop-blur-[3px] [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]" />
    </>
  )
}
