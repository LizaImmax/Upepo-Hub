import CollaborationRequests from '@/components/CollaborationRequests'

export default function CollaboratePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Collaborate
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find opportunities, share skills, and work together on exciting projects
          </p>
        </div>

        {/* Collaboration Content */}
        <CollaborationRequests />
      </div>
    </div>
  )
}
