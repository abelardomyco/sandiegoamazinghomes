import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { Mail, Phone, MapPin, Home, ExternalLink } from "lucide-react";

const INSTAGRAM_HANDLE = "sandiegoamazinghomes";
const INSTAGRAM_URL = "https://instagram.com/sandiegoamazinghomes";
const PARTNER_SITE = {
  name: "The Baja Land Company",
  url: "https://thebajalandcompany.com/",
  description: "Looking for land in Baja California, Mexico? Our partner helps you acquire land across the border—same region, different side.",
};

function getHomeContent() {
  try {
    const path = join(process.cwd(), "content", "homepage.md");
    const raw = readFileSync(path, "utf8");
    const sections = {};
    let current = "";
    let body = [];
    raw.split("\n").forEach((line) => {
      if (line.startsWith("## ")) {
        if (current) sections[current] = body.join("\n").trim();
        current = line.replace(/^##\s*/, "").trim();
        body = [];
      } else if (current) {
        body.push(line);
      }
    });
    if (current) sections[current] = body.join("\n").trim();
    return sections;
  } catch (_) {
    return {};
  }
}

export default function HomePage() {
  const sections = getHomeContent();
  const welcome = sections["Welcome"] || "";
  const tagline = sections["Tagline"] || "Houses are my passion!";

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          San Diego Amazing Homes
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-2">
          {welcome || "Welcome to San Diego Amazing Homes! San Diego is dubbed \"America's Finest City\" for a reason. With year-round amazing weather, San Diego has seen tremendous growth over the last few decades. I have been here for much of it over the 40+ years I have lived here and since houses have been my passion for so long, have explored all of San Diego."}
        </p>
        <p className="text-slate-700 font-medium">{tagline}</p>
      </section>

      <section className="grid sm:grid-cols-2 gap-6">
        <Link
          href="#contact"
          className="flex items-center gap-3 p-5 rounded-xl border-2 border-sd-200 bg-white hover:border-sd-500 hover:shadow-md transition-all"
        >
          <Home className="w-8 h-8 text-sd-600 shrink-0" />
          <div>
            <span className="font-semibold text-slate-900 block">Looking for a house?</span>
            <span className="text-sm text-slate-600">Get in touch—we&apos;ll help you find your next home.</span>
          </div>
        </Link>
        <Link
          href="#contact"
          className="flex items-center gap-3 p-5 rounded-xl border-2 border-sd-200 bg-white hover:border-sd-500 hover:shadow-md transition-all"
        >
          <Home className="w-8 h-8 text-sd-600 shrink-0" />
          <div>
            <span className="font-semibold text-slate-900 block">Want to list your home?</span>
            <span className="text-sm text-slate-600">Sell with an agent who knows San Diego.</span>
          </div>
        </Link>
      </section>

      <section id="contact" className="border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
        <p className="text-slate-600 mb-6">Please call or email with any questions you may have!</p>
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 max-w-md">
          <p className="font-bold text-slate-900 text-lg">Rosamelia Lopez-Platt</p>
          <p className="text-sm text-slate-600">REALTOR® · DRE #02026714</p>
          <p className="text-slate-700">Royal California Real Estate</p>
          <a
            href="mailto:Rosamelialp@hotmail.com"
            className="flex items-center gap-2 text-sd-600 hover:text-sd-700 font-medium"
          >
            <Mail className="w-5 h-5 shrink-0" />
            Rosamelialp@hotmail.com
          </a>
          <a
            href="tel:+16195482832"
            className="flex items-center gap-2 text-sd-600 hover:text-sd-700 font-medium"
          >
            <Phone className="w-5 h-5 shrink-0" />
            (619) 548-2832
          </a>
          <div className="flex items-start gap-2 text-slate-600">
            <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
            <span>7445 Girard Ave. Suite #11, La Jolla, CA 92037</span>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 pt-10">
        <h2 className="text-xl font-bold text-slate-900 mb-2">About Rosamelia</h2>
        <p className="text-slate-600 leading-relaxed max-w-2xl">
          Rosamelia knows San Diego! She has been here for over 40 years and understands the niche markets throughout the county of San Diego—whether it is La Jolla, Del Mar, Coronado, Rancho Santa Fe, Downtown or Mission Valley or South Bay—she has the experience to understand your needs to both deliver something you love or get your house sold.
        </p>
      </section>

      <section className="border-t border-slate-200 pt-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Follow on Instagram</h2>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sd-600 hover:text-sd-700 font-medium"
        >
          @{INSTAGRAM_HANDLE}
          <ExternalLink className="w-4 h-4" aria-hidden />
        </a>
      </section>

      <section className="border-t border-slate-200 pt-10">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Also check out</h2>
        <p className="text-slate-600 mb-4 max-w-2xl">{PARTNER_SITE.description}</p>
        <a
          href={PARTNER_SITE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-200 px-5 py-3 bg-white hover:border-sd-400 text-slate-800 font-medium transition-colors"
        >
          {PARTNER_SITE.name}
          <ExternalLink className="w-4 h-4" aria-hidden />
        </a>
      </section>
    </div>
  );
}
