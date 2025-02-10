import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          async
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
