import type { Metadata } from "next";
import NotFoundPage from "@/components/not-found-page";
import { PERSON_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Page not found | ${PERSON_NAME}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
