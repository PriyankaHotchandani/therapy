'use client'
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";

export default function HeroSection() {
    const specialFeatures = [
        "Transparent, low fees",
        "Secure & confidential",
        "Pay per session",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-pink-600 blur-[300px]"></div>

            <motion.a
                href="mailto:healwithkomalhotchandani@gmail.com?subject=Request:%20Free%20Consultation%20Call&body=Hi,%0D%0A%0D%0AI%20am%20interested%20in%20therapy%20but%20have%20a%20few%20questions%20first.%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20call.%0D%0A%0D%0AMy%20Name:%20%0D%0AMy%20Age:%20"
                className="group inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-pink-200/10 border border-white/10 hover:border-pink-500/30 transition-all mt-44 text-pink-100 w-fit max-w-full"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-pink-700 text-white text-[10px] font-bold px-3 py-1 rounded-full ml-1 shrink-0">
                    NEW
                </span>

                <div className="flex flex-col md:flex-row md:gap-1 text-sm leading-tight md:leading-normal text-left">
                    <span className="font-semibold">Not sure yet?</span>
                    <span className="font-normal text-pink-200/80">Get a free consultation call</span>
                </div>

                <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300 shrink-0" />
            </motion.a>

            <motion.h1 className="text-5xl/17 md:text-6xl/21 font-medium max-w-2xl text-center mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Empathetic, Affordable Therapy for a {" "}
                <span className="move-gradient px-3 rounded-xl text-nowrap">Better You</span>
            </motion.h1>

            <motion.p className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Professional, affordable support for everyone. Your journey to mental wellness starts here.
            </motion.p>

            <motion.div className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <a href="#pricing">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-7 h-11 transition-colors">
                        Book a Session
                    </button>
                </a>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p className="flex items-center gap-2" key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="size-5 text-pink-600" />
                        <span className="text-slate-400">{feature}</span>
                    </motion.p>
                ))}
            </div>
            <TiltedImage />
        </div>
    );
}