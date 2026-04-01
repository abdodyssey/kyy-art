"use client";

import { motion } from "framer-motion";
import { Home, Image, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/constants/dummy";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Gallery",
    href: "/#gallery",
    icon: Image,
  },
  {
    name: "Order",
    href: WHATSAPP_URL,
    icon: ShoppingBag,
    isExternal: true,
  },
  {
    name: "About",
    href: "/#about",
    icon: User,
  },
];

export const BottomNav = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    if (href === "/" && pathname === "/" && !activeHash) return true;
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      return pathname === path && activeHash === `#${hash}`;
    }
    return pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-xl border-t border-zinc-100"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-around h-16 px-6">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              className="relative flex flex-col items-center justify-center w-full h-full gap-1.5 transition-all active:scale-95"
            >
              <div className="relative">
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className={`transition-all duration-300 ${
                    active ? "text-orange-500 scale-110" : "text-zinc-400"
                  }`}
                />
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-orange-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
              <span
                className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  active ? "text-zinc-950" : "text-zinc-400"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};
