"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: "blue" | "white" | "gray"
  text?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = "md", 
  color = "blue", 
  text,
  className = ""
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }

  const colorClasses = {
    blue: "border-blue-600",
    white: "border-white",
    gray: "border-gray-600"
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`
        ${sizeClasses[size]} 
        border-4 border-t-transparent ${colorClasses[color]} 
        rounded-full animate-spin
      `} />
      {text && (
        <p className={`mt-3 text-sm font-medium ${color === 'white' ? 'text-white' : 'text-gray-600'}`}>
          {text}
        </p>
      )}
    </div>
  )
}

export function LoadingBar({ progress = 0, className = "" }: { progress?: number, className?: string }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  )
}

export function LoadingDots({ className = "" }: { className?: string }) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
          style={{
            animationDelay: `${index * 0.3}s`,
            animationDuration: '1.5s'
          }}
        />
      ))}
    </div>
  )
}

export function LoadingSkeleton({ 
  lines = 3, 
  className = "",
  showAvatar = false 
}: { 
  lines?: number
  className?: string
  showAvatar?: boolean 
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="flex items-start space-x-4">
        {showAvatar && (
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        )}
        <div className="flex-1 space-y-3">
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={`h-4 bg-gray-300 rounded ${
                index === lines - 1 ? 'w-3/4' : 'w-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
