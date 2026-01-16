import { motion } from "motion/react";
import type { TestimonialCardProps } from "../types";

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div
            className="p-4 rounded-lg w-full h-full md:w-[36rem] md:h-80 bg-pink-950/30 border border-pink-950 flex flex-col"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div className="flex gap-2">
                <img className="size-11 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} height={50} width={50} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="font-medium text-slate-200">{testimonial.name}</p>
                    </div>
                    <span className="text-xs text-slate-500">{testimonial.handle}</span>
                </div>
            </div>

            <p className="text-sm pt-4 text-slate-300 flex-1 whitespace-pre-line text-justify">
                {testimonial.quote}
            </p>
        </motion.div>
    );
}