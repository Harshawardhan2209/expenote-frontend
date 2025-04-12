import React from "react";
import HeroSection from "@/components/hero";
import Features from "@/components/features";
import Stats from "@/components/stats";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Features />
      <Stats />

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container relative mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700
                         px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl
                         transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
