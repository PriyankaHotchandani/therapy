'use client'
import SectionTitle from "../components/SectionTitle"
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Pricing" text2="Our Pricing Plans" text3="Flexible pricing options designed to meet your needs. Mental health support shouldn't break the bank. Choose a plan that fits your journey." />

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div key={index}
                        className={`w-72 text-center border border-pink-950 p-6 pb-8 rounded-xl relative flex flex-col ${plan.mostPopular ? 'bg-pink-950' : 'bg-pink-950/30'}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {plan.mostPopular && (
                            <p className="absolute px-3 text-sm -top-3.5 left-1/2 -translate-x-1/2 py-1 bg-pink-500 text-white font-medium rounded-full shadow-lg whitespace-nowrap">Most Popular</p>
                        )}

                        <p className="font-semibold text-lg text-slate-100">{plan.name}</p>

                        <div className="mt-4 mb-2">
                            <h1 className="text-4xl font-bold text-white">
                                ₹{plan.price}
                                <span className="text-gray-400 font-normal text-sm ml-1">/{plan.period}</span>
                            </h1>

                            {plan.perSession && (
                                <div className={`mt-3 inline-block px-4 py-1.5 rounded-full shadow-md border ${plan.mostPopular
                                    ? 'bg-black border-white/20'       // Black Box for Wellness Bundle
                                    : 'bg-pink-600 border-pink-400'    // Pink Box for Deep Healing
                                    }`}>
                                    <p className={`text-xs font-bold tracking-wide ${plan.mostPopular
                                        ? 'text-pink-400'  // Pink text on Black box
                                        : 'text-white'     // White text on Pink box
                                        }`}>
                                        Effective: ₹{plan.perSession}/session
                                    </p>
                                </div>
                            )}
                        </div>

                        <ul className="list-none text-slate-300 mt-6 space-y-3 text-left text-sm flex-1">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckIcon className="size-4 text-pink-500 mt-0.5 shrink-0" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>

                        <a href={plan.buttonHref} className={`inline-block w-full py-3 rounded-lg font-medium mt-8 transition-all text-center shadow-lg active:scale-95 ${plan.mostPopular ? 'bg-white text-pink-950 hover:bg-slate-100' : 'bg-pink-600 text-white hover:bg-pink-700'}`}>
                            {plan.buttonText}
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}