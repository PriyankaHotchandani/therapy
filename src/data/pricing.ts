import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Pay-As-You-Go",
        price: 699,
        period: "session",
        features: [
            "50-minute 1-on-1 session",
            "Secure Video Call",
            "No commitment required",
            "Instant online booking",
            "Pay per visit"
        ],
        mostPopular: false,
        buttonText: "Book Now",
        buttonHref: "mailto:healwithkomalhotchandani@gmail.com?subject=Purchase:%20Single%20Session&body=Hi,%0D%0A%0D%0AI%20want%20to%20book%20a%20single%20session%20(Rs%20699).%20Please%20share%20the%20payment%20QR%20code%20and%20your%20next%20available%20slot."
    },
    {
        name: "Wellness Bundle",
        price: 2599,
        period: "4 sessions",
        perSession: 650,
        features: [
            "4 x 50-minute sessions",
            "Valid for 60 days",
            "Priority slot booking",
            "Perfect for weekly therapy",
            "Free Self-Care Toolkit",
            "Flexible rescheduling"
        ],
        mostPopular: true,
        buttonText: "Start Your Journey",
        buttonHref: "mailto:healwithkomalhotchandani@gmail.com?subject=Purchase:%20Wellness%20Bundle&body=Hi,%0D%0A%0D%0AI%20would%20like%20to%20purchase%20the%20Wellness%20Bundle%20(Rs%202599).%20Please%20send%20me%20the%20payment%20details%20to%20get%20started."
    },
    {
        name: "Deep Healing",
        price: 4799,
        period: "8 sessions",
        perSession: 600,
        features: [
            "8 x 50-minute sessions",
            "Valid for 4 months",
            "Best for long-term growth",
            "Guaranteed slot weekly",
            "Free quarterly progress review"
        ],
        mostPopular: false,
        buttonText: "Commit to Growth",
        buttonHref: "mailto:healwithkomalhotchandani@gmail.com?subject=Purchase:%20Deep%20Healing%20Package&body=Hi,%0D%0A%0D%0AI%20want%20to%20commit%20to%20the%20Deep%20Healing%20Package%20(Rs%204799).%20Please%20guide%20me%20on%20the%20payment%20process."
    }
];