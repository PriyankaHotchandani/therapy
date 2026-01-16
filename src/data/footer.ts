import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "#" },
            { name: "Features", href: "#features" },
            { name: "Philosophy", href: "#philosophy" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Pricing", href: "#pricing" },
        ]
    },
    {
        title: "Patient Support",
        links: [

            // External Link to Government/NGO Help
            { name: "Emergency Helplines", href: "https://icallhelpline.org/" },

            // External Link to Credible Articles
            { name: "Mental Health Blog", href: "https://www.verywellmind.com/" },

            // External Link to Free Worksheets
            { name: "Self-Care Tools", href: "https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself" },
        ]
    },
    {
        title: "Policies",
        links: [
            // These MUST be internal pages eventually, but for now use placeholders
            { name: "Privacy & Confidentiality", href: "#privacy" },
            { name: "Cancellation Policy", href: "#cancellation" },

            // External Link to RCI (Shows you follow official ethics)
            { name: "Code of Ethics (RCI)", href: "https://rehabcouncil.nic.in/" },
        ]
    }
];