"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { t } = useLanguage();
  const contactSection = t("nav.contact");
  const { ref } = useSectionInView(contactSection);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t("contact.title")}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t("contact.description")}{" "}
        <a
          className="underline"
          href="mailto:hudsonferrazmoc@gmail.com"
          aria-label="Send email to hudsonferrazmoc@gmail.com"
        >
          hudsonferrazmoc@gmail.com
        </a>{" "}
        {t("contact.or")}
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(t("contact.successMessage"));
          formRef.current?.reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("contact.emailPlaceholder")}
          aria-label="Your email address"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t("contact.messagePlaceholder")}
          required
          maxLength={5000}
          aria-label="Your message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
