const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Instagram', href: '#' },
];

export function Footer() {
  return (
    <footer id="visit" className="bg-[#160d09] text-white/40 py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-14 pb-14 border-b border-white/8">
          <a href="#" className="font-playfair text-3xl font-bold tracking-[0.2em] text-white">
            UMBER
          </a>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase font-medium hover:text-white/80 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <address className="not-italic text-[12px] leading-[1.9] text-white/40">
            142 Roastery Lane<br />
            Portland, OR 97201<br />
            hello@umber.coffee
          </address>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] tracking-[0.1em]">
          <p>&copy; {new Date().getFullYear()} Umber Coffee Co. All rights reserved.</p>
          <p>Crafted with care in Portland.</p>
        </div>

      </div>
    </footer>
  );
}
