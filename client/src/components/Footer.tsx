import { useState } from "react";

export default function Footer() {
  const [language, setLanguage] = useState("en");
  const [region, setRegion] = useState("auto");

  const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sitemap", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57..."/></svg>,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452..."/></svg>,
    },
    {
      name: "YouTube",
      href: "#",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186..."/></svg>,
    },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  return (
    <footer className="bg-slate-900 text-white mt-12 py-6">
      <div className="text-center">
        <p className="mb-2">© 2024 VNX - Visnec Nexus</p>
        <div className="flex justify-center gap-4 text-slate-400">
          {socialLinks.map(link => (
            <a key={link.name} href={link.href} aria-label={link.name}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
