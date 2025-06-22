"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
// Icons as SVG components
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const LoaderIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
)

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchResult {
  id: string
  title: string
  price: number
  image?: string
  category: string
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Mock search results
    const mockResults: SearchResult[] = [
      {
        id: "1",
        title: "Деревянный стол Elite Oak",
        price: 25000,
        category: "Столы",
        image: "/api/placeholder/80/80"
      },
      {
        id: "2", 
        title: "Деревянный стул Premium",
        price: 8500,
        category: "Стулья",
        image: "/api/placeholder/80/80"
      },
      {
        id: "3",
        title: "Шкаф из массива дуба",
        price: 45000,
        category: "Шкафы",
        image: "/api/placeholder/80/80"
      }
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    setResults(mockResults)
    setIsLoading(false)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  if (!mounted) return null

  const modalContent = (
    <div className={`fixed inset-0 z-[100] transition-all duration-300 ${
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`absolute top-0 left-0 right-0 bg-white shadow-2xl transform transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="container mx-auto max-w-4xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Поиск товаров</h2>            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>          {/* Search Input */}
          <div className="relative mb-6">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по каталогу..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              autoFocus
            />
            {isLoading && (
              <LoaderIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-spin" />
            )}
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">            {query.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <SearchIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg">Начните вводить для поиска товаров</p>
              </div>
            ) : results.length === 0 && !isLoading ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">По запросу "{query}" ничего не найдено</p>
                <p className="text-sm mt-2">Попробуйте изменить поисковый запрос</p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                    onClick={() => {
                      // Navigate to product
                      window.location.href = `/products/${result.id}`
                    }}
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 flex-shrink-0">
                      {result.image && (
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{result.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{result.category}</p>
                      <p className="text-lg font-bold text-blue-600">
                        {result.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
