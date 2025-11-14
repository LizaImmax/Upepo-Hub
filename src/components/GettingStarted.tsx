export default function GettingStarted() {
  const quickActions = [
    {
      title: 'Create Your Profile',
      description: 'Set up your account and join the community',
      icon: '👤',
      link: '/dashboard',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      title: 'Explore Services',
      description: 'Discover all 12 Upepo platforms',
      icon: '🧭',
      link: '#components',
      color: 'bg-indigo-500 hover:bg-indigo-600',
    },
    {
      title: 'Attend an Event',
      description: 'Register for workshops and meetups',
      icon: '📅',
      link: '/events',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      title: 'Start Learning',
      description: 'Access courses on Upepo Learn',
      icon: '🎓',
      link: '/components/learn',
      color: 'bg-orange-500 hover:bg-orange-600',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Getting Started
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to dive in? Here&apos;s how to make the most of Upepo Hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.link}
              className={`${action.color} text-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeIn group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {action.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="text-white/90 text-sm">{action.description}</p>
              <div className="mt-4 flex items-center space-x-2 text-sm font-medium">
                <span>Get started</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🌍</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Global Community
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with innovators, entrepreneurs, and learners across Africa and beyond
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🔗</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Unified Platform
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              One login to access cloud, learning, ventures, studio, and 8 more services
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Innovation First
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              From idea to launch: labs, funding, mentorship, and resources all in one place
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
