import { ImageResponse } from "next/og";
import { siteData } from "@/lib/site-data";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #fcfaf6 0%, #f5efe5 45%, #efe5d6 100%)",
          color: "#171411",
          fontFamily: "serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 18%, rgba(182,144,88,0.18), transparent 20%), radial-gradient(circle at 84% 22%, rgba(255,255,255,0.8), transparent 20%), linear-gradient(rgba(23,20,17,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(23,20,17,0.035) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 44px 44px, 44px 44px",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "92px 68px 70px",
            gap: 40,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 720,
              gap: 18,
            }}
          >
            <div
              style={{
                letterSpacing: "0.26em",
                fontSize: 22,
                textTransform: "uppercase",
                color: "#b69058",
              }}
            >
              Guntur, Andhra Pradesh
            </div>
            <div
              style={{
                fontSize: 84,
                lineHeight: 1,
                color: "#171411",
              }}
            >
              {siteData.companyName}
            </div>
            <div
              style={{
                fontSize: 32,
                lineHeight: 1.4,
                color: "#655a4d",
              }}
            >
              {siteData.tagline}
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: "#2b241d",
                maxWidth: 700,
              }}
            >
              Premium residential and commercial interiors across Andhra Pradesh and Hyderabad.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 280,
            }}
          >
            {["Residential", "Commercial", "Turnkey"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "24px 28px",
                  borderRadius: 28,
                  background: "rgba(255,255,255,0.72)",
                  color: "#171411",
                  border: "1px solid rgba(23,20,17,0.06)",
                  fontSize: 28,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
