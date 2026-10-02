import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

const { hero } = content.en;

export const alt = `${hero.name} — ${hero.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors the v3 hero: monochrome, square corners, flush-left grid, portrait on the right.
export default async function OpenGraphImage() {
  const [portrait, inter400, inter600, inter700] = await Promise.all([
    readFile(join(process.cwd(), "public/jose-machado.png")),
    readFile(join(process.cwd(), "src/app/fonts/Inter-400.woff")),
    readFile(join(process.cwd(), "src/app/fonts/Inter-600.woff")),
    readFile(join(process.cwd(), "src/app/fonts/Inter-700.woff")),
  ]);
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          gap: 56,
          padding: 64,
          backgroundColor: "#ffffff",
          color: "#1d1d1f",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.01em" }}>
              {hero.name}
            </span>
            <span style={{ fontSize: 20, color: "#6e6e73" }}>{hero.role}</span>
          </div>

          <div
            style={{
              fontSize: 60,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.035em",
            }}
          >
            {hero.title}
          </div>

          <div
            style={{
              display: "flex",
              gap: 32,
              borderTop: "2px solid #1d1d1f",
              paddingTop: 20,
              fontSize: 20,
              color: "#6e6e73",
            }}
          >
            <span>{hero.loc}</span>
            <span>{hero.avail}</span>
          </div>
        </div>

        <img
          src={portraitSrc}
          alt=""
          width={402}
          height={502}
          style={{
            width: 402,
            height: 502,
            objectFit: "cover",
            objectPosition: "50% 15%",
            backgroundColor: "#f5f5f7",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
        { name: "Inter", data: inter600, weight: 600, style: "normal" },
        { name: "Inter", data: inter700, weight: 700, style: "normal" },
      ],
    }
  );
}
