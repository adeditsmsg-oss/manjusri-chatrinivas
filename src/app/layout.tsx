import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "মঞ্জুশ্রী ছাত্রীনিবাস | Manjusri Chatrinivas (Ladies Mess) Midnapore",
  description: "Manjusri Chatrinivas (মঞ্জুশ্রী ছাত্রীনিবাস) is a premium ladies hostel, girls PG, and student accommodation in Ramayanpara, near Bidla Traffic Point, Tantigeria, Midnapore. Safe environment, daily homely mess, and modern amenities.",
  keywords: ["Ladies Hostel Midnapore", "Girls PG Midnapore", "Manjusri Chatrinivas", "Ladies Mess Midnapore", "Student Hostel Midnapore", "Girls PG Tantigeria"],
  authors: [{ name: "Manjusri Chatrinivas Management" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn-IN" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
