"use client";

export default function Curriculum() {
  const exams = [
    {
      name: "SAT",
      description: "Comprehensive preparation for SAT Math and Verbal sections",
      duration: "2 months",
      price: "50,000 ₸",
      features: [
        "Intensive Math & Verbal training",
        "Practice tests & mock exams",
        "Personalized study plans",
        "Expert mentorship",
      ],
      color: "blue",
    },
    {
      name: "IELTS",
      description: "Master all four IELTS components: Reading, Writing, Listening, Speaking",
      duration: "2 months",
      price: "50,000 ₸",
      features: [
        "All 4 skills covered",
        "Speaking practice sessions",
        "Writing feedback & improvement",
        "Test-taking strategies",
      ],
      color: "blue",
    },
    {
      name: "NUET",
      description: "Specialized preparation for NUET entrance examination",
      duration: "2 months",
      price: "50,000 ₸",
      features: [
        "NUET-specific curriculum",
        "Comprehensive subject coverage",
        "Previous year papers analysis",
        "Dedicated NUET mentor",
      ],
      color: "blue",
    },
  ];

  return (
    <section id="curriculum" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Choose your path to success with our intensive marathon programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-zinc-200"
            >
              {/* Blue accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 rounded-t-2xl"></div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  {exam.name}
                </h3>
                <p className="text-zinc-600 mb-6">
                  {exam.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-zinc-500">Duration</span>
                    <span className="font-semibold text-zinc-900">{exam.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500">Price</span>
                    <span className="font-bold text-lg text-blue-600">{exam.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exam.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
