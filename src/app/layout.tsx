import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import ReduxProvider from "@/lib/redux/ReduxProvider";
// import { Toaster } from 'react-hot-toast';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Badminton Gallery",
  description: "Website for badminton rackets, shuttles, and more",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
export default function RootLayout() {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        {/* <ReduxProvider>
          {children}
        </ReduxProvider>
        <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} /> */}
        <h1>We are currently under maintenance. Thank you for your patience!</h1>
      </body>
    </html>
  );
}
