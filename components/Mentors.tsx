"use client";

import Image from "next/image";

export default function Mentors() {
  const mentors = [
    {
      name: "Main Mentor",
      role: "Program Director",
      image: "/mentors/main-mentor.jpg",
      description: "Studies at NU. Achieved exceptional high scores in all test categories.",
      highScore: "SAT: 1580",
    },
    {
      name: "SAT Math Mentor",
      role: "Mathematics Specialist",
      image: "/mentors/sat-math-mentor.jpg",
      description: "Studies at NU. Scored perfect 800 on SAT Math section.",
      highScore: "SAT Math: 800",
    },
    {
      name: "SAT Verbal Mentor",
      role: "Verbal Skills Specialist",
      image: "/mentors/sat-verbal-mentor.jpg",
      description: "Studies at NU. Achieved outstanding scores in SAT Reading and Writing.",
      highScore: "SAT Verbal: 780",
    },
    {
      name: "NUET Mentor",
      role: "NUET Specialist",
      image: "/mentors/nuet-mentor.jpg",
      description: "Studies at NU. Scored exceptionally high on NUET entrance exam.",
      highScore: "NUET: 98%",
    },
    {
      name: "IELTS Mentor",
      role: "IELTS Specialist",
      image: "/mentors/ielts-mentor.jpg",
      description: "Studies at NU. Achieved band 9.0 in IELTS examination.",
      highScore: "IELTS: 9.0",
    },
  ];

  return (
    <section id="mentors" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Meet Our Expert Mentors
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Learn from the best in the field with years of experience and proven results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-zinc-200">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-zinc-900 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {mentor.role}
                </p>
                <p className="text-sm text-zinc-600 mb-3">
                  {mentor.description}
                </p>
                
                {/* High Score */}
                <div className="pt-3 border-t border-gray-200">
                  <span className="text-xs text-zinc-500 block mb-1">High Score</span>
                  <span className="text-sm font-bold text-blue-600">{mentor.highScore}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
