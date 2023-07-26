import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "OLX - Buy and Sell for free anywhere in Pakistan with OLX online classifieds",
  description:
    "OLX has 1000&#x27;s ads available in Pakistan of goods for sale from cars, furniture, electronics to jobs and services listings. Buy or sell something today!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/icon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/icon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/icon/favicon-32x32.png",
    },
  ],
  manifest: "/manifest.json",
  themeColor: { color: "#002f34" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
