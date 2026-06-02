import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #fbe2e3 0%, #dbd7fb 50%, #676394 100%)",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.05em",
          }}
        >
          HF
        </span>
      </div>
    ),
    { ...size }
  );
}
