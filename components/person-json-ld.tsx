import {
  GITHUB_URL,
  LINKEDIN_URL,
  PERSON_DESCRIPTION,
  PERSON_JOB_TITLE,
  PERSON_NAME,
  PROFILE_IMAGE_PATH,
  SITE_URL,
} from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE_IMAGE_PATH}`,
  jobTitle: PERSON_JOB_TITLE,
  description: PERSON_DESCRIPTION,
  sameAs: [LINKEDIN_URL, GITHUB_URL],
};

export default function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
