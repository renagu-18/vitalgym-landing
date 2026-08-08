import { ImageResponse } from "next/og";
import { negocio } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};

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
          background: "#0A0A0A",
          color: "#F5F5F5",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 700,
            color: "#F5F5F5",
            letterSpacing: -2,
          }}
        >
          <span>Vital</span>
          <span style={{ color: "#CC1A1A" }}>Gym</span>
        </div>
        <div style={{ fontSize: 40, color: "#CC1A1A", marginTop: 12 }}>
          Entrenamiento 100% personalizado
        </div>
        <div style={{ fontSize: 28, color: "#A3A3A3", marginTop: 24 }}>
          {negocio.ubicacion}
        </div>
      </div>
    ),
    { ...size }
  );
}
