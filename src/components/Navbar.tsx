import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* --- DESKTOP NAVBAR --- */}
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="#">
                    <img
                        className="h-12 md:h-16 w-auto"
                        src="/assets/logo.png"
                        alt="logo"
                        width={420}
                        height={126}
                    />
                </a>

                <div className="hidden md:flex items-center gap-8 transition duration-500 flex-1 justify-center ml-25">
                    {navlinks.map((link: INavLink) => (
                        <a key={link.name} href={link.href} className="text-lg font-medium hover:text-pink-500 transition">{link.name}</a>
                    ))}
                </div>

                <button className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full">
                    <a href="mailto:healwithkomalhotchandani@gmail.com?subject=Inquiry:%20Starting%20my%20therapy%20journey&body=Hi,%0D%0A%0D%0AI%20am%20interested%20in%20starting%20therapy%20and%20would%20like%20to%20know%20the%20next%20steps.%0D%0A%0D%0AThanks.">Start your journey</a>
                </button>
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            {/* --- MOBILE SIDE DRAWER --- */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* 1. Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* 2. Side Drawer */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-fit min-w-[280px] px-10 bg-black/30 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[100] md:hidden flex flex-col items-center pt-8"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 35 }}
                        >
                            {/* Close Button Header (Aligned Right within the centered flex) */}
                            <div className="w-full flex justify-end mb-8">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <XIcon size={28} />
                                </button>
                            </div>

                            {/* Nav Links (Centered) */}
                            <div className="flex flex-col gap-8 text-center w-full">
                                {navlinks.map((link: INavLink, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-slate-100 hover:text-pink-500 transition-colors block"
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + (index * 0.1) }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Mobile CTA Button */}
                            <motion.div
                                className="mt-12 w-full"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a
                                    href="mailto:healwithkomalhotchandani@gmail.com?subject=Inquiry:%20Starting%20my%20therapy%20journey&body=Hi,%0D%0A%0D%0AI%20am%20interested%20in%20starting%20therapy%20and%20would%20like%20to%20know%20the%20next%20steps.%0D%0A%0D%0AThanks."
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-900/20 whitespace-nowrap transition-all active:scale-95"
                                >
                                    Start your journey
                                </a>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}