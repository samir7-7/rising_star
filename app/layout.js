import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rising Diamond Consultancy - International Education & Career Guidance",
  description: "Your trusted partner for international education and career opportunities. Expert guidance for study abroad, visa processing, and career development. Serving students worldwide.",
  keywords: "study abroad, international education, visa processing, career counseling, university applications, IELTS, PTE, Canada, UK, Australia, UAE",
  authors: [{ name: "Rising Diamond Consultancy" }],
  openGraph: {
    title: "Rising Diamond Consultancy - International Education & Career Guidance",
    description: "Your trusted partner for international education and career opportunities. Expert guidance for study abroad, visa processing, and career development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rising Diamond Consultancy - International Education & Career Guidance",
    description: "Your trusted partner for international education and career opportunities.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
