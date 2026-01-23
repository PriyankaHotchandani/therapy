'use client'
import { useState, useEffect, useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
    const [activeTestimonial, setActiveTestimonial] = useState<ITestimonial | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const isHoveringRef = useRef(false);
    const isManualScrollingRef = useRef(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const extendedData = [...testimonialsData, ...testimonialsData, ...testimonialsData];

    // --- SINGLETON ANIMATION LOOP ---
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const loop = () => {
            if (!isHoveringRef.current && !isManualScrollingRef.current) {
                scrollContainer.scrollLeft += 1.0;

                // Infinite Scroll Reset
                if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
                    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
                }
            }
            animationRef.current = requestAnimationFrame(loop);
        };

        animationRef.current = requestAnimationFrame(loop);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // --- MANUAL SCROLL HANDLER ---
    const handleManualScroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            isManualScrollingRef.current = true;

            const scrollAmount = isMobile ? 304 : 600;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });

            timeoutRef.current = setTimeout(() => {
                isManualScrollingRef.current = false;
            }, 1500);
        }
    };

    return (
        <div id="testimonials" className="relative pb-12">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <SectionTitle
                    text1="Testimonials"
                    text2="Stories of Healing"
                    text3="Therapy is a personal step, but you don't have to walk it alone. Read experiences from individuals who found the courage to prioritize their mental peace with us."
                />
            </div>

            <div className="mt-8 relative w-full max-w-6xl mx-auto">

                {/* --- LEFT BUTTON --- */}
                <button
                    onClick={() => handleManualScroll("left")}
                    className="flex absolute left-2 md:-left-20 top-1/2 -translate-y-1/2 z-30 
                    p-3 rounded-full cursor-pointer transition-all duration-300 active:scale-95
                    bg-white/5 backdrop-blur-md border border-white/10 text-white/70 
                    hover:text-white hover:bg-white/10 hover:border-white/30 shadow-lg"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* --- RIGHT BUTTON --- */}
                <button
                    onClick={() => handleManualScroll("right")}
                    className="flex absolute right-2 md:-right-20 top-1/2 -translate-y-1/2 z-30 
                    p-3 rounded-full cursor-pointer transition-all duration-300 active:scale-95
                    bg-white/5 backdrop-blur-md border border-white/10 text-white/70 
                    hover:text-white hover:bg-white/10 hover:border-white/30 shadow-lg"
                >
                    <ChevronRight size={24} />
                </button>

                {/* --- SCROLL CONTAINER --- */}
                <div
                    ref={scrollRef}
                    className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth py-12 px-4 
                    [&:has(.testimonial-card:hover)_.testimonial-card:not(:hover)]:blur-[2px] 
                    [&:has(.testimonial-card:hover)_.testimonial-card:not(:hover)]:scale-95
                    [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {extendedData.map((testimonial: ITestimonial, index: number) => (
                        <div
                            key={index}
                            className="testimonial-card flex-shrink-0 cursor-pointer select-none relative transition-all duration-300 ease-out 
                                       md:hover:!blur-none md:hover:scale-110 md:hover:z-20
                                       h-90 md:h-auto"
                            style={{ width: isMobile ? '300px' : '36rem' }}

                            onClick={() => setActiveTestimonial(testimonial)}
                            onMouseEnter={() => { isHoveringRef.current = true; }}
                            onMouseLeave={() => { isHoveringRef.current = false; }}
                        >
                            <div className="w-full h-full relative group/card">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl opacity-0 md:group-hover/card:opacity-75 blur transition duration-300"></div>

                                {/* Card Content */}
                                <div className="relative w-full h-full bg-black rounded-xl overflow-hidden md:group-hover/card:ring-1 md:group-hover/card:ring-pink-500/50 transition-all duration-300">
                                    <div className="w-full h-full">
                                        <TestimonialCard index={index} testimonial={testimonial} />
                                    </div>

                                    {/* Mobile Indicator */}
                                    <div className="absolute bottom-4 left-0 w-full flex justify-center md:hidden z-20 pointer-events-none">
                                        <span className="text-[10px] font-bold tracking-wide text-pink-200 bg-pink-950/80 px-3 py-1 rounded-full border border-pink-500/30 shadow-lg backdrop-blur-md animate-pulse">
                                            Tap to read
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/90 to-transparent md:hidden rounded-b-xl z-10 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MODAL --- */}
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
                                <p className="text-slate-300 leading-relaxed text-base italic text-justify">
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