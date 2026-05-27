import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "../styles/landingpage.css";

export const metadata = {
  title: "GetMeTask",
  description: "AI Powered Placement Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}