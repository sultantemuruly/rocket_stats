"use client";

import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mb-6 leading-tight">
            Launch Your Success with
            <span className="block text-blue-600">
              Rocket Stats
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-700 mb-8 max-w-2xl mx-auto">
            Master SAT, IELTS, and NUET exams with our intensive 2-month marathon program
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl text-zinc-800 mb-6 font-semibold">
              SAT 2-Month Marathon Starts In:
            </h2>
            <CountdownTimer />
            <div className="mt-6 text-zinc-700">
              <p className="text-lg font-semibold">Price: 50,000 ₸ per person</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Register Now
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zinc-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
