import type { TestimonialCardProps } from "../types";

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="p-6 rounded-xl w-full h-full bg-pink-950/20 border border-pink-900/30 flex flex-col shadow-lg">
            <div className="flex gap-4 items-center mb-4">
                <img
                    className="w-12 h-12 rounded-full object-cover border border-pink-500/30"
                    src={testimonial.image}
                    alt={testimonial.name}
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-white text-lg leading-tight">{testimonial.name}</p>
                    <span className="text-xs text-pink-400 font-medium">{testimonial.handle}</span>
                </div>
            </div>

            <p className="text-sm text-slate-300 flex-1 leading-relaxed text-justify opacity-90">
                {testimonial.quote}
            </p>
        </div>
    );
}