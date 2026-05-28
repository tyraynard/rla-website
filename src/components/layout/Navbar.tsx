"use client";

import { useState, useEffect, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Navbar() {
  const menuId = useId();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Scroll → add backdrop blur + border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Track active section via hash; read initial value on mount
  useEffect(() => {
    setActiveHash(window.location.hash);
    const onHash = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleLinkClick = (href: string) => {
    closeMenu();
    setActiveHash(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-nav",
          "transition-all duration-350 ease-out-expo",
          scrolled
            ? "bg-rla-obsidian/95 backdrop-blur-md border-b border-rla-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-rla">
          <nav
            className="flex items-center justify-between h-16 md:h-[72px]"
            aria-label="Main navigation"
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group"
              aria-label={`${SITE_NAME} — Home`}
            >
              <div className="relative w-8 h-8 shrink-0 overflow-hidden rounded-sm">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="32px"
                  priority
                />
              </div>
              <span className="font-display font-light text-rla-cream text-lg tracking-wide leading-none">
                Raynard{" "}
                <span className="text-rla-stone font-light">Land Advisory</span>
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center gap-8" role="menubar">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    "text-ui-sm font-body font-medium uppercase tracking-widest",
                    "transition-colors duration-250",
                    activeHash === link.href
                      ? "text-rla-sage"
                      : "text-rla-stone hover:text-rla-cream"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className={cn(
                  "inline-flex items-center h-9 px-5",
                  "text-ui-sm font-body font-medium uppercase tracking-widest",
                  "text-rla-cream border border-rla-border rounded-sm",
                  "transition-all duration-250 ease-out-expo",
                  "hover:border-rla-sage-muted hover:text-rla-sage-pale"
                )}
              >
                Contact
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 text-rla-stone hover:text-rla-cream transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-0 z-overlay md:hidden",
          "flex flex-col bg-rla-obsidian/98 backdrop-blur-lg",
          "transition-all duration-450 ease-out-expo",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close button */}
        <div className="flex justify-end px-6 h-16 items-center">
          <button
            className="flex items-center justify-center w-9 h-9 text-rla-stone hover:text-rla-cream transition-colors"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 pt-8 gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={cn(
                "py-4 border-b border-rla-border",
                "font-display font-light text-display-lg text-rla-cream",
                "transition-colors duration-200 hover:text-rla-sage-pale",
                menuOpen ? "animate-fade-up" : "",
                `delay-${(i + 1) * 100}`
              )}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className={cn(
              "mt-8 inline-flex items-center justify-center h-12 px-8",
              "font-body font-medium text-ui-md uppercase tracking-widest",
              "text-rla-sage border border-rla-sage-muted rounded-sm",
              "transition-colors duration-250",
              "hover:text-rla-sage-pale hover:border-rla-sage",
              menuOpen ? "animate-fade-up delay-500" : ""
            )}
          >
            Start a Conversation
          </a>
        </nav>
      </div>
    </>
  );
}
