import { LinkedinPlain } from "devicons-react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

function Contact({ language }) {
  return (
    <div className="border-b border-neutral-900 pb-12 md:pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="my-6 md:my-10 text-center text-3xl md:text-4xl font-semibold"
        >
          {language === "es" ? "Contáctame" : "Contact me"}
        </motion.h1>

        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Address */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-center"
          >
            <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0" />
            <p className="text-base md:text-lg tracking-tight">
              {CONTACT.address[language]}
            </p>
          </motion.div>

          {/* Phone Number with WhatsApp link */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
            <a
              href="https://wa.me/+524432381825?text=Hola,%20quisiera%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg border-b border-neutral-600 hover:border-white 
    hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors pb-0.5"
            >
              {CONTACT.phoneNo}
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <LinkedinPlain className="w-5 h-5 text-neutral-400 flex-shrink-0" />
            <a
              href="https://www.linkedin.com/in/roboam-ismael-rangel-ceja-87a2b72b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg border-b border-neutral-600 hover:border-white 
    hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors pb-0.5"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
            <a className="text-base md:text-lg tracking-tight">
              {CONTACT.email}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
