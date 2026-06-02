"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, validateEmail } from "@/lib/utils";
import type { ContactErrorCode } from "@/lib/contact-errors";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailResult =
  | { data: unknown }
  | { error: ContactErrorCode };

export const sendEmail = async (formData: FormData): Promise<SendEmailResult> => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "invalidEmail" };
  }

  if (!validateEmail(senderEmail as string)) {
    return { error: "invalidEmailFormat" };
  }

  if (!validateString(message, 5000)) {
    return { error: "invalidMessage" };
  }

  if ((message as string).trim().length === 0) {
    return { error: "emptyMessage" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hudsonferrazmoc@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return { data };
  } catch {
    return { error: "sendFailed" };
  }
};
