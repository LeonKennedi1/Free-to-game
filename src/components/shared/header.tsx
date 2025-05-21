//src/app/components/shared/header.tsx
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const platforms = [
  { name: "PC (Windows)", slug: "pc" },
  { name: "Веб-браузер", slug: "browser" },
  { name: "Все платформы", slug: "all" },
];

const categories = [
  { name: "MMORPG", slug: "mmorpg" },
  { name: "Shooter", slug: "shooter" },
  { name: "Strategy", slug: "strategy" },
  { name: "MOBA", slug: "moba" },
  { name: "Card Games", slug: "card" },
  { name: "Fighting", slug: "fighting" },
  { name: "Social", slug: "social" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const platformDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        platformDropdownRef.current &&
        !platformDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPlatformDropdownOpen(false);
      }
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => pathname === path;
  const isDropdownActive = (basePath: string) => pathname.startsWith(basePath);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const togglePlatformDropdown = () => {
    setIsPlatformDropdownOpen(!isPlatformDropdownOpen);
    setIsCategoryDropdownOpen(false);
  };
  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsPlatformDropdownOpen(false);
  };

  const closeAllDropdownsAndMobileMenu = () => {
    setIsPlatformDropdownOpen(false);
    setIsCategoryDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({
    href,
    children,
    exact = true,
  }: {
    href: string;
    children: React.ReactNode;
    exact?: boolean;
  }) => {
    const active = exact ? isActive(href) : isDropdownActive(href);
    return (
      <Link
        href={href}
        onClick={closeAllDropdownsAndMobileMenu}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
          ${
            active
              ? "bg-indigo-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
      >
        {children}
      </Link>
    );
  };

  const DropdownLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      onClick={closeAllDropdownsAndMobileMenu}
      className="block px-4 py-2 text-sm text-gray-200 hover:bg-indigo-600 hover:text-white w-full text-left"
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={closeAllDropdownsAndMobileMenu}
              className="text-2xl font-bold
             bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-600
             hover:from-blue-400 hover:via-sky-300 hover:to-indigo-500
             bg-clip-text text-transparent
             transition-all duration-300 ease-in-out"
            >
              FreeToGame
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/games">Все игры</NavLink>

              <div className="relative" ref={platformDropdownRef}>
                <button
                  onClick={togglePlatformDropdown}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors
                    ${
                      isDropdownActive("/games/platform")
                        ? "bg-indigo-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  aria-expanded={isPlatformDropdownOpen}
                >
                  Платформы
                  {isPlatformDropdownOpen ? (
                    <FiChevronUp className="ml-1" />
                  ) : (
                    <FiChevronDown className="ml-1" />
                  )}
                </button>
                {isPlatformDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {platforms.map((platform) => (
                      <DropdownLink
                        key={platform.slug}
                        href={`/games/platform/${platform.slug}`}
                      >
                        {platform.name}
                      </DropdownLink>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" ref={categoryDropdownRef}>
                <button
                  onClick={toggleCategoryDropdown}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors
                    ${
                      isDropdownActive("/games/category")
                        ? "bg-indigo-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  aria-expanded={isCategoryDropdownOpen}
                >
                  Категории
                  {isCategoryDropdownOpen ? (
                    <FiChevronUp className="ml-1" />
                  ) : (
                    <FiChevronDown className="ml-1" />
                  )}
                </button>
                {isCategoryDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {categories.map((category) => (
                      <DropdownLink
                        key={category.slug}
                        href={`/games/category/${category.slug}`}
                      >
                        {category.name}
                      </DropdownLink>
                    ))}
                  </div>
                )}
              </div>
              <NavLink href="/about" exact={false}>
                О нас
              </NavLink>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Открыть главное меню</span>
              {isMobileMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/games">Все игры</NavLink>

            <div className="border-t border-gray-700 pt-2">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400">
                Платформы
              </span>
              {platforms.map((platform) => (
                <DropdownLink
                  key={`mobile-${platform.slug}`}
                  href={`/games/platform/${platform.slug}`}
                >
                  {platform.name}
                </DropdownLink>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-2">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400">
                Категории
              </span>
              {categories.map((category) => (
                <DropdownLink
                  key={`mobile-${category.slug}`}
                  href={`/games/category/${category.slug}`}
                >
                  {category.name}
                </DropdownLink>
              ))}
            </div>
            <NavLink href="/about" exact={false}>
              О нас
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
