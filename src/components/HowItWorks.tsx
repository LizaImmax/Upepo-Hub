export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover Services',
      description: 'Browse through 12 interconnected Upepo platforms tailored to your needs',
      icon: '🔍',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      number: '02',
      title: 'Join the Community',
      description: 'Connect with 12,847+ members, collaborate on projects, and share knowledge',
      icon: '🤝',
      color: 'from-purple-500 to-purple-700',
    },
    {
      number: '03',
      title: 'Engage & Learn',
      description: 'Attend events, access resources, and grow with certifications and training',
      icon: '🎓',
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '04',
      title: 'Build & Innovate',
      description: 'Launch projects, get funding, and scale your ideas with Upepo ecosystem',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your journey through the Upepo ecosystem in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-transparent -z-10"></div>
              )}

              <div className="text-center">
                {/* Number Badge */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl mb-4 shadow-lg`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
