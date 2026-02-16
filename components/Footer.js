import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

const partnerLink = {
  href: "https://thebajalandcompany.com/",
  label: "The Baja Land Company",
  external: true,
};

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-slate-200 bg-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-600 hover:text-sd-600 transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href={partnerLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-sd-600 transition-colors"
            >
              {partnerLink.label}
            </a>
          </div>
          <a
            href="https://instagram.com/sandiegoamazinghomes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-sd-600 transition-colors"
          >
            IG: @sandiegoamazinghomes
          </a>
        </div>
        <p className="mt-6 pt-6 border-t border-slate-200 text-xs text-slate-500 text-center md:text-left">
          San Diego Amazing Homes — Royal California Real Estate. Rosamelia Lopez-Platt, REALTOR® DRE #02026714.
        </p>
      </div>
    </footer>
  );
}
