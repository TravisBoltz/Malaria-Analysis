"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import { ModeToggle } from "./mode-toogle";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback } from "./ui/avatar";

const getPageTitle = (pathname: string) => {
  const path = pathname.split("/").pop() || "Dashboard";
  if (path === "") return "Dashboard";

  // Format the path to title case and replace hyphens with spaces
  return path
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header
      className={`sticky top-0 transition-all duration-300 z-50 py-4 md:py-6 
        ${
          isScrolled
            ? "bg-white/10 dark:bg-gray-900/10 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-8"
          />
          <h1 className="text-lg font-medium">{pageTitle}</h1>
        </div>
        <div className="flex gap-4">
          {/* <ModeToggle />
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <ModeToggle />
            </SheetContent>
          </Sheet> */}
          <Avatar className="">
            <AvatarFallback className="bg-gray-900 text-white">
              A
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
