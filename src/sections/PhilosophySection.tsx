'use client'
import SectionTitle from "../components/SectionTitle"
import { motion } from "motion/react"
import { HeartHandshake, BrainCircuit, Sprout, Target, Eye } from "lucide-react"

export default function PhilosophySection() {
    return (
        <section id="philosophy" className="relative px-4 md:px-16 lg:px-24 xl:px-32">

            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-800/20 rounded-full blur-[80px]" />
            </div>

            <SectionTitle
                text1="Philosophy"
                text2="Our Approach"
                text3="We believe in compassionate, evidence-based care that meets people where they are. Our approach balances empathy, practical tools, and measurable progress to support lasting change."
            />

            {/* Core Values Cards */}
            <motion.div
                className="mt-20 grid gap-6 md:grid-cols-3"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 70 }}
            >
                {/* Card 1: Empathy */}
                <div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-pink-500/20 hover:-translate-y-1">
                    <div className="size-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                        <HeartHandshake className="size-6 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">Empathy-First</h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        We prioritize understanding each person's unique story. We listen without judgment to create a safe foundation for healing.
                    </p>
                </div>

                {/* Card 2: Evidence */}
                <div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-pink-500/20 hover:-translate-y-1">
                    <div className="size-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                        <BrainCircuit className="size-6 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">Evidence-Based</h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        Our interventions aren't just guesses. They are rooted in proven psychological methods adapted to your specific needs.
                    </p>
                </div>

                {/* Card 3: Growth */}
                <div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-pink-500/20 hover:-translate-y-1">
                    <div className="size-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                        <Sprout className="size-6 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">Sustainable Growth</h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        We don't just solve today's problem. We focus on building practical tools that empower you long after therapy ends.
                    </p>
                </div>
            </motion.div>

            {/* Split Section: Therapist & Mission */}
            <div className="mt-24 mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Therapist Photo */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex flex-col items-center text-center"
                    >
                        {/* Glow Effect behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/30 blur-[80px] rounded-full -z-10"></div>

                        <div className="relative">
                            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-br from-slate-700 to-slate-900 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 relative z-10">
                                    <img
                                        src="/assets/therapist.png"
                                        className="w-full h-full object-cover transition-transform duration-700 scale-100 hover:scale-120"
                                        alt="Komal Hotchandani"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-2">
                            <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Komal Hotchandani</h3>
                            <div className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                                <p className="text-pink-400 text-sm font-medium tracking-wide">Lead Counselling Psychologist</p>
                            </div>
                            <p className="text-slate-500 text-sm">M.A. Counselling Psychology</p>
                        </div>
                    </motion.div>

                    {/* Right Column - Mission & Vision */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Mission Card */}
                        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-pink-500/20 transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target className="size-24 text-pink-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <Target className="size-5 text-pink-500" />
                                <h4 className="text-lg font-semibold text-slate-200">Mission</h4>
                            </div>
                            <p className="text-slate-400 leading-relaxed relative z-10">
                                After years of learning, listening, and personal growth, I offer counselling from a warm, confidential space. My mission is to help individuals feel <span className="text-slate-200 font-medium">heard, supported, and empowered</span> to heal, gain clarity, and restore emotional balance through ethical counselling.                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-900/10 to-slate-900/50 border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-pink-500/20 transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Eye className="size-24 text-pink-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="size-5 text-pink-500" />
                                <h4 className="text-lg font-semibold text-slate-200">Vision</h4>
                            </div>
                            <p className="text-slate-400 leading-relaxed relative z-10">
                                To support people in building emotional strength, self-awareness, and inner resilience. I strive to empower individuals to gain deeper self-understanding, providing support that is <span className="text-slate-200 font-medium">compassionate, practical, and accessible</span> to everyone.                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}