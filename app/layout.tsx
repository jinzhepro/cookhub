import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "CookHub - 名厨菜谱集合",
  description: "发现和学习来自互联网平台的名厨菜谱",
  icons: {
    icon: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
