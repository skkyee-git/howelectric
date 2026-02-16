import { ImageResponse } from "next/og";

export const alt = "HowElectric — Powering India's Electric Future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A2647",
          position: "relative",
        }}
      >
        {/* Background gradient accents */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(46,134,171,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(78,205,196,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Bolt icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #2E86AB, #4ECDC4)",
            marginBottom: 32,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27 8L17 26h6l-3 14 12-18h-7l2-14z" fill="white" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            HowElectric
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 700,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            India&apos;s EV Charging Infrastructure Platform
          </div>
        </div>

        {/* Pillars bar */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
            padding: "16px 32px",
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {["Consulting", "Services", "CMS Platform", "Academy"].map(
            (pillar) => (
              <div
                key={pillar}
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 600,
                }}
              >
                {pillar}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 16,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          howelectric.com
        </div>
      </div>
    ),
    { ...size }
  );
}
