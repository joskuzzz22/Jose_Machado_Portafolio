import { ImageResponse } from "next/og";

export const alt =
  "José Machado — AI Solutions Engineer & Digital Transformation Product Owner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#ffffff",
          color: "#1d1d1f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 600,
            color: "#86868b",
          }}
        >
          <span>José Leonardo Machado Tabraj</span>
          <span>Lima, Perú</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            AI-powered products. Measurable outcomes.
          </div>
          <div style={{ fontSize: 28, color: "#6e6e73" }}>
            AI Solutions Engineer · Digital Transformation Product Owner · SAP
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e8e8ed",
            paddingTop: 32,
            fontSize: 24,
            color: "#6e6e73",
          }}
        >
          <span style={{ display: "flex", gap: 40 }}>
            <span>7+ products in production</span>
            <span style={{ color: "#86868b" }}>·</span>
            <span>MCP · SAP · LLMs</span>
          </span>
          <span
            style={{ color: "#1d1d1f", fontWeight: 700, fontSize: 32 }}
          >
            JM.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
