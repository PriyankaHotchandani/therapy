'use client'
import { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";
import { X } from "lucide-react";

export default function TestimonialSection() {
    const [activeTestimonial, setActiveTestimonial] = useState<ITestimonial | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32 relative">
            <SectionTitle
                text1="Testimonials"
                text2="Stories of Healing"
                text3="Therapy is a personal step, but you don't have to walk it alone. Read experiences from individuals who found the courage to prioritize their mental peace with us."
            />

            <div className="mt-11">
                <Marquee
                    className="max-w-5xl mx-auto py-4"
                    gradient={true}
                    gradientWidth={isMobile ? 20 : 100}
                    speed={40}
                    gradientColor="#000"
                    pauseOnHover={true}
                    play={activeTestimonial === null}
                >
                    <div className="flex items-stretch gap-6 pl-6 h-full">
                        {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                            <div
                                key={index}
                                onClick={() => setActiveTestimonial(testimonial)}
                                className="cursor-pointer transition-transform duration-300 active:scale-95 md:hover:scale-105 group h-full"
                            >
                                <div
                                    className="relative h-[240px] overflow-hidden rounded-xl md:w-auto md:h-auto md:overflow-visible"
                                    style={{
                                        flex: isMobile ? '0 0 280px' : 'auto',
                                        width: isMobile ? '280px' : 'auto',
                                        whiteSpace: 'normal'
                                    }}
                                >
                                    <div className="w-full h-full [&_*]:whitespace-normal [&_*]:break-words pointer-events-none">
                                        <TestimonialCard index={index} testimonial={testimonial} />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/80 to-transparent md:hidden rounded-b-xl z-10 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* --- MODAL / ENLARGED VIEW --- */}
            {activeTestimonial && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="absolute inset-0" onClick={() => setActiveTestimonial(null)}></div>

                    <div className="relative w-full max-w-lg bg-black border border-pink-500/30 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setActiveTestimonial(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                {activeTestimonial.image && (
                                    <img src={activeTestimonial.image} alt={activeTestimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                )}
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{activeTestimonial.name}</h3>
                                    <p className="text-sm text-pink-400">{activeTestimonial.handle}</p>
                                </div>
                            </div>

                            <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                <p className="text-slate-300 leading-relaxed text-base italic">
                                    "{activeTestimonial.quote}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}