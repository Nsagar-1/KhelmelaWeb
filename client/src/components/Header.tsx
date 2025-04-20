import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#download", label: "Download" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2">
              <h1 className="text-2xl font-bold font-orbitron tracking-wider">
                <span className="text-primary">Khel</span>
                <span className="text-secondary">Mela</span>
              </h1>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`font-rajdhani text-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-secondary"
                      : "text-light hover:text-secondary"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-orbitron py-2 px-6 rounded-md transition-all hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] transform hover:-translate-y-0.5 font-bold"
            >
              <Link href="/#download">
                <a>Get The App</a>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light hover:text-secondary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col space-y-4 py-4 px-4 bg-dark/80 backdrop-blur-md border-t border-gray-800">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`font-rajdhani py-2 px-4 text-lg transition-colors ${
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-light hover:text-secondary"
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/#download">
            <a
              className="bg-primary hover:bg-primary/90 text-white text-center font-orbitron py-3 px-6 rounded-md transition-all hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] font-bold mt-2"
              onClick={closeMobileMenu}
            >
              Get The App
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
