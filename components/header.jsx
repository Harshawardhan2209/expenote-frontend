import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 shadow-lg transition-all duration-300 hover:bg-white/80">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 hover:opacity-70 transition-opacity duration-300"></div>
      <nav className="container relative mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="transform hover:scale-105 transition-transform duration-300">
          <Image
            src={"/logo-new.svg"}
            alt="Expenote Logo"
            width={140}
            height={32}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
            >
              <Button
                variant="outline"
                className="bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 border-blue-200 hover:border-transparent group"
              >
                <LayoutDashboard size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden md:inline ml-2">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center gap-2"
              >
                <PenBox size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-4">
              <SignInButton forceRedirectUrl="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-2 font-medium"
                >
                  Login
                </Button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
