"use client";

import { PiRocketLaunchDuotone } from "react-icons/pi";
import Link from "next/link";

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <PiRocketLaunchDuotone className="text-3xl text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-blue-600">
              Rocket Stats
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="#hero" 
              className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#curriculum" 
              className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors"
            >
              Curriculum
            </Link>
            <Link 
              href="#mentors" 
              className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors"
            >
              Mentors
            </Link>
            <a 
              href="https://wa.me/77001234567?text=Hello!%20I%20want%20to%20join%20the%20SAT%202-Month%20Marathon" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Join Marathon
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
