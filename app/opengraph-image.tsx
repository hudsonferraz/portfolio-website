import { ImageResponse } from "next/og";
import { PERSON_DESCRIPTION, PERSON_JOB_TITLE, PERSON_NAME } from "@/lib/site";

export const runtime = "edge";

export const alt = `${PERSON_NAME} | ${PERSON_JOB_TITLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fbe2e3 0%, #dbd7fb 45%, #676394 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "900px",
          }}
        >
          <p
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#1f2937",
              margin: 0,
            }}
          >
            {PERSON_NAME}
          </p>
          <p
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {PERSON_JOB_TITLE}
          </p>
          <p
            style={{
              fontSize: 26,
              color: "#374151",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {PERSON_DESCRIPTION}
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
