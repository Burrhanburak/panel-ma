import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://panelmanage.com"
    : "http://localhost:3000";

export default function OG() {
  return new ImageResponse(
    (
      <div style={container}>
        <img
          src={`${baseUrl}/panel-managez.png`}
          width={100}
          height={100}
          alt="PanelManage Logo"
        />
        <div style={title}>PanelManage — Management System Software</div>
        <div style={desc}>
          Custom management system software for appointments, clinics,
          employees, scholarships, and internal operations — built as secure,
          workflow-driven admin panels for real businesses.
        </div>
      </div>
    ),
    size
  );
}

const container: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  backgroundImage: `
    radial-gradient(circle at 24px 24px, rgba(0,0,0,0.12) 1.5%, transparent 0%),
    radial-gradient(circle at 72px 72px, rgba(0,0,0,0.12) 1.5%, transparent 0%),
    radial-gradient(circle at 48px 96px, rgba(0,0,0,0.06) 1.2%, transparent 0%),
    radial-gradient(circle at 96px 48px, rgba(0,0,0,0.06) 1.2%, transparent 0%)
  `,
  backgroundSize: "120px 120px",
};

const title: React.CSSProperties = {
  fontSize: 48,
  fontWeight: 700,
  color: "#000000",
  lineHeight: 1.2,
};

const desc: React.CSSProperties = {
  marginTop: 16,
  fontSize: 26,
  color: "#000000",
  opacity: 0.7,
  lineHeight: 1.4,
};
