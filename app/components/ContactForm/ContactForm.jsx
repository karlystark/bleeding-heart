import Image from 'next/image';
import { FaVimeo, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function ContactForm() {

    return (
        <div className="grid w-[90vw] my-6 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg
        md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col">
                    <Image className="pr-4 hover:rotate-3 transition-transform mb-6" src="/contact2.png" alt="bleeding heart pigeon says let's talk" width="500" height="700"/>
                    <div className="icons-list flex justify-center mt-6 space-x-4">
                        <FaVimeo size={42} className="hover:rotate-6 transition-transform"/>
                        <AiFillInstagram size={42} className="hover:rotate-6 transition-transform"/>
                        <FaLinkedin size={42} className="hover:rotate-6 transition-transform"/>
                    </div>
                </div>
            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full outline outline-[#68248c] p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded outline outline-[#68248c] dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded outline outline-[#68248c] dark:bg-gray-100"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded hover:scale-105 transition-transform dark:bg-[var(--buttons)] dark:text-gray-50">Send Message</button>
            </form>
        </div>
    );
}