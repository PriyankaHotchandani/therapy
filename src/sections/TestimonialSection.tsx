'use client' // Ensure this is at the top if using Next.js App Router
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                text1="Testimonials"
                text2="Stories of Healing"
                text3="Therapy is a personal step, but you don't have to walk it alone. Read experiences from individuals who found the courage to prioritize their mental peace with us."
            />

            {/* --- MOBILE VIEW: Vertical Static List --- */}
            {/* This replaces the marquee on small screens for better readability */}
            <div className="flex flex-col gap-6 mt-11 md:hidden items-center">
                {testimonialsData.map((testimonial: ITestimonial, index: number) => (
                    <div key={index} className="w-full max-w-sm">
                        <TestimonialCard index={index} testimonial={testimonial} />
                    </div>
                ))}
            </div>

            {/* --- DESKTOP VIEW: Animated Marquee --- */}
            {/* 'hidden md:block' hides this on mobile and shows it on medium screens+ */}
            <div className="hidden md:block mt-11">
                <Marquee
                    className="max-w-5xl mx-auto"
                    gradient={true}
                    gradientWidth={100} // Reduced from default 200px so it doesn't hide too much
                    speed={50}
                    gradientColor="#000" // Ensure this matches your background color (is it #000 or the dark pink?)
                    pauseOnHover={true}
                >
                    <div className="flex items-center justify-center py-5 overflow-hidden gap-6 pl-6">
                        {/* Added gap-6 and pl-6 to separate cards inside marquee */}
                        {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                            <TestimonialCard key={index} index={index} testimonial={testimonial} />
                        ))}
                    </div>
                </Marquee>
            </div>

        </div>
    );
}