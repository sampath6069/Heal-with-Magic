import { ImageResponse } from "next/og";

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
            "linear-gradient(135deg, #fbf9ff 0%, #f4eef9 45%, #efe7f8 100%)",
          color: "#5f5698",
          fontFamily: "serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 18%, rgba(95,86,152,0.16), transparent 20%), radial-gradient(circle at 80% 22%, rgba(241,138,105,0.18), transparent 20%), radial-gradient(circle at 78% 80%, rgba(228,223,249,0.9), transparent 24%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 46,
            left: 54,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            letterSpacing: "0.28em",
            fontSize: 24,
            textTransform: "uppercase",
            color: "#4f4b78",
          }}
        >
          <div>Heal with Magic</div>
          <div style={{ fontSize: 18, letterSpacing: "0.22em", opacity: 0.75 }}>
            By Shamitha Venkat
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "120px 70px 70px",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 650,
              gap: 20,
            }}
          >
            <div
              style={{
                fontSize: 84,
                lineHeight: 1,
                color: "#5f5698",
              }}
            >
              Heal with Magic
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.4,
                color: "#66627f",
              }}
            >
              Gentle healing, manifestation, and transformation for women
              ready to release, align, and grow.
            </div>
            <div
              style={{
                display: "flex",
                gap: 18,
                marginTop: 10,
              }}
            >
              {["21-day programs", "1:1 healing", "WhatsApp support"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      padding: "14px 24px",
                      borderRadius: 999,
                      background: "#5f5698",
                      color: "white",
                      fontSize: 22,
                    }}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 320,
              height: 320,
              borderRadius: 999,
              background: "rgba(255,255,255,0.88)",
              boxShadow: "0 30px 70px rgba(95,86,152,0.15)",
              border: "8px solid rgba(255,255,255,0.72)",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 240,
                height: 240,
                borderRadius: 999,
                background: "linear-gradient(180deg, #6a63a4 0%, #5f5698 100%)",
                color: "#d6efe6",
                fontSize: 38,
                textAlign: "center",
                lineHeight: 1.05,
                padding: 30,
              }}
            >
              Heal
              <br />
              with
              <br />
              Magic
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
