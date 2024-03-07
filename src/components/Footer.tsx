import Link from "next/link";

const routes = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-sm text-white/25">
      <small className="text-sm">
        &copy; 2024 mosmartin. All Rights Reserved
      </small>

      <ul>
        {
          <ul className="flex gap-x-3 sm:gap-x-8">
            {routes.map(({ label, href }) => (
              <li
                key={href}
                className="text-white/50 hover:text-accent transition"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        }
      </ul>
    </footer>
  );
}
