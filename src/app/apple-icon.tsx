import { ImageResponse } from "next/og";

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
          backgroundColor: "#0A2647",
          borderRadius: 36,
        }}
      >
        <svg
          width="108"
          height="108"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M27 8L17 26h6l-3 14 12-18h-7l2-14z" fill="#2E86AB" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
