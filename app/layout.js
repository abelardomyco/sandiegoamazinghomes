import "./globals.css";
import { Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSerif = Source_Serif_4({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "San Diego Amazing Homes | Real Estate in San Diego",
  description:
    "San Diego real estate with Rosamelia Lopez-Platt, REALTOR®. La Jolla, Del Mar, Coronado, Rancho Santa Fe, and all of San Diego County. Royal California Real Estate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body className="font-body min-h-screen flex flex-col bg-slate-50">
        <Header />
        <div
          role="presentation"
          className="w-full h-2 bg-sd-600"
        />
        <main className="flex-1 w-full min-h-[40vh]">
          <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-10">
            {children}
          </div>
        </main>
        <div role="presentation" className="w-full h-1 bg-slate-300" />
        <Footer />
      </body>
    </html>
  );
}
