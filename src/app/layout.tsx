import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "মঞ্জুশ্রী ছাত্রীনিবাস (Ladies Hostel) | Premium Female PG near Tantigeria, Midnapore",
  description: "মঞ্জুশ্রী ছাত্রীনিবাস (Manjusri Chatrinivas Ladies Mess) provides premium, secure accommodation and delicious home daily meals in Ramayanpara, Tantigeria, Midnapore. Admission open for August session.",
  keywords: ["Manjusri Chatrinivas", "Ladies Mess Midnapore", "Tantigeria Ladies PG", "Female Hostel Midnapore", "Ramayanpara Ladies PG", "Midnapore College hostel", "মঞ্জুশ্রী ছাত্রীনিবাস"],
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
