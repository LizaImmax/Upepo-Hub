export default function HubLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const textSizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  }

  return (
    <div
      className={`${sizes[size]} rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex items-center justify-center shadow-lg animate-pulse`}
    >
      <span className={`${textSizes[size]}`}>🌍</span>
    </div>
  )
}
