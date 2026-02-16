import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function getAboutContent() {
  try {
    const path = join(process.cwd(), "content", "about.md");
    return readFileSync(path, "utf8").trim();
  } catch (_) {
    return "";
  }
}

export const metadata = {
  title: "About Us | San Diego Amazing Homes",
  description: "About Rosamelia Lopez-Platt, REALTOR® — over 40 years in San Diego. La Jolla, Del Mar, Coronado, Rancho Santa Fe, and all of San Diego County.",
};

export default function AboutPage() {
  const body = getAboutContent();

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-slate-900">About Us</h1>
      <div className="prose prose-slate max-w-none">
        {body ? (
          <div className="whitespace-pre-wrap text-slate-600 leading-relaxed">{body}</div>
        ) : (
          <>
            <p className="text-slate-600 leading-relaxed">
              Rosamelia Lopez-Platt has been a San Diego resident for over 40 years. Houses have been her passion for just as long—she has explored every corner of the county and understands the unique character of each neighborhood.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Whether you are looking in La Jolla, Del Mar, Coronado, Rancho Santa Fe, Downtown, Mission Valley, or the South Bay, Rosamelia has the experience to understand your needs: to help you find a home you love or to get your house sold.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              She is a REALTOR® with Royal California Real Estate (DRE #02026714) and is based in La Jolla.
            </p>
          </>
        )}
      </div>
      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-600">
          <a href="mailto:Rosamelialp@hotmail.com" className="flex items-center gap-2 text-sd-600 hover:text-sd-700 font-medium">
            <Mail className="w-5 h-5 shrink-0" /> Rosamelialp@hotmail.com
          </a>
          <a href="tel:+16195482832" className="flex items-center gap-2 text-sd-600 hover:text-sd-700 font-medium">
            <Phone className="w-5 h-5 shrink-0" /> (619) 548-2832
          </a>
        </div>
        <div className="flex items-start gap-2 text-slate-600 mt-3">
          <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
          <span>7445 Girard Ave. Suite #11, La Jolla, CA 92037</span>
        </div>
      </div>
      <p>
        <Link href="/" className="text-sd-600 hover:text-sd-700 font-medium">
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}
