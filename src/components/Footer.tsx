import { footerData } from "../data/footer";
import { LinkedinIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                {footerData.map((section) => (
                    <div key={section.title}>
                        <h3 className="font-semibold text-slate-200 mb-4">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="hover:text-pink-500 transition"
                                        onClick={(e) => {
                                            if (link.href.startsWith("#")) {
                                                e.preventDefault();
                                                const id = link.href.slice(1);
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: "smooth" });
                                                }
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-150">Creating a safe, judgment-free space for your mental wellness journey.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://www.linkedin.com/in/komal-hotchandani-0b69b3344/" rel="noreferrer">
                        <LinkedinIcon className="size-5 hover:text-pink-500" />
                    </a>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} Komal Hotchandani </p>
            </motion.div>
        </footer>
    );
}