'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon, PhoneIcon, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // State to track validation errors
    const [errors, setErrors] = useState({ email: '', mobile: '' });

    // Validation Logic
    const validateForm = (formData: FormData) => {
        const email = formData.get('from_email') as string;
        const mobile = formData.get('mobile_number') as string;
        const newErrors = { email: '', mobile: '' };
        let isValid = true;

        // Email Regex: Checks for standard format (user@domain.com)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        // Mobile Regex: Checks for exactly 10 digits
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('idle');

        if (formRef.current) {
            // Create FormData object to access values 
            const formData = new FormData(formRef.current);

            // Run validation before sending
            if (!validateForm(formData)) {
                return; // Stop execution if validation fails
            }

            setIsSubmitting(true);

            emailjs.sendForm(
                'service_r097s7m',
                'template_qlg4pyy',
                formRef.current,
                '__V8CmSCtTewFGnPV'
            )
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    setSubmitStatus('success');
                    formRef.current?.reset();
                    setErrors({ email: '', mobile: '' }); // Clear errors on success
                }, (error) => {
                    console.log('Failed to send email:', error.text);
                    setSubmitStatus('error');
                })
                .finally(() => {
                    setIsSubmitting(false);
                    setTimeout(() => setSubmitStatus('idle'), 5000);
                });
        }
    };

    // Helper to clear error when user starts typing again
    const handleInputFocus = (field: 'email' | 'mobile') => {
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    return (
        <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32 py-16">
            <SectionTitle
                text1="Contact"
                text2="Get in Touch"
                text3="Taking the first step is often the hardest. Whether you have questions or are ready to book, reach out today."
            />

            <form ref={formRef} onSubmit={sendEmail} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full' >

                {/* Name Field */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className='mb-2 font-medium text-slate-400'>Name</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-800 bg-slate-950/50 focus-within:border-pink-500 transition-colors'>
                        <UserIcon className='size-5 text-slate-500' />
                        <input
                            name='from_name'
                            type="text"
                            required
                            placeholder='Enter your name'
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600'
                        />
                    </div>
                </motion.div>

                {/* Mobile Number Field with Validation */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p className='mb-2 font-medium text-slate-400'>Mobile Number</p>
                    <div className={`flex items-center pl-3 rounded-lg border bg-slate-950/50 transition-colors ${errors.mobile ? 'border-red-500' : 'border-slate-800 focus-within:border-pink-500'}`}>
                        <PhoneIcon className={`size-5 ${errors.mobile ? 'text-red-500' : 'text-slate-500'}`} />
                        <input
                            name='mobile_number'
                            type="tel"
                            required
                            placeholder='Enter 10-digit number'
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600'
                            onFocus={() => handleInputFocus('mobile')}
                        />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobile}</p>}
                </motion.div>

                {/* Email Field with Validation */}
                <motion.div
                    className='sm:col-span-2'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className='mb-2 font-medium text-slate-400'>Email Address</p>
                    <div className={`flex items-center pl-3 rounded-lg border bg-slate-950/50 transition-colors ${errors.email ? 'border-red-500' : 'border-slate-800 focus-within:border-pink-500'}`}>
                        <MailIcon className={`size-5 ${errors.email ? 'text-red-500' : 'text-slate-500'}`} />
                        <input
                            name='from_email'
                            type="email"
                            required
                            placeholder='Enter your email'
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600'
                            onFocus={() => handleInputFocus('email')}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </motion.div>

                {/* Message Field */}
                <motion.div className='sm:col-span-2'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className='mb-2 font-medium text-slate-400'>Message</p>
                    <textarea
                        name='message'
                        required
                        rows={6}
                        placeholder='How can we help you?'
                        className='w-full p-3 bg-slate-950/50 outline-none rounded-lg border border-slate-800 focus:border-pink-500 transition-colors placeholder:text-slate-600 resize-none'
                    />
                </motion.div>

                {/* Submit Button & Messages */}
                <motion.div
                    className='sm:col-span-2 mt-4'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all w-full sm:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? (
                            <>Sending... <Loader2 className="animate-spin size-5" /></>
                        ) : (
                            <>Submit <ArrowRightIcon className="size-5" /></>
                        )}
                    </button>

                    {submitStatus === 'success' && (
                        <p
                            className="mt-3 text-sm font-medium animate-pulse"
                            style={{ color: 'oklch(70.4% 0.191 22.216)' }}
                        >
                            Message sent successfully! We will get back to you soon.
                        </p>
                    )}

                    {submitStatus === 'error' && (
                        <p className="text-red-400 mt-3 text-sm font-medium">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </motion.div>
            </form>
        </div>
    );
}