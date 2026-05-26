import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "New Biz Travel - Agencia de viajes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
              color: "white",
            }}
          >
            NB
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            New Biz Travel
          </div>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Agencia de viajes en Buenos Aires
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "16px",
          }}
        >
          Legajo EVyT 14764 · CUIT 30-71173463-1
        </div>
      </div>
    ),
    { ...size }
  );
}
