"use client"

import { useState, useRef, useEffect, useMemo, useCallback } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SearchModal from "@modules/layout/components/search-modal"

// Search Icon Component
const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

// Menu Icon Component  
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

// Phone Icon Component
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

// Location Icon Component
const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

// Clock Icon Component
const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

// Sun Icon Component (Day mode)
const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

// Moon Icon Component (Night mode)
const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

// Globe Icon Component (Language)
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

// Uzbek regions data with contact information - Memoized for performance
const uzbekRegions = [
  { 
    id: "toshkent", 
    name: "Toshkent shahri",
    schedule: "Du-Ju: 8:00-20:00",
    address: "Amir Temur ko'chasi, 15",
    phones: ["+998 (71) 123-45-67"]
  },
  { 
    id: "samarkand", 
    name: "Samarqand viloyati",
    schedule: "Du-Ju: 9:00-19:00",
    address: "Registon ko'chasi, 25",
    phones: ["+998 (66) 223-45-67"]
  },  { 
    id: "bukhara", 
    name: "Buxoro viloyati",
    schedule: "Du-Ju: 9:00-18:00",
    address: "Mustaqillik ko'chasi, 33",
    phones: ["+998 (65) 223-11-22"]  }
]

// Custom Language Dropdown Component
const LanguageDropdown = ({ onLanguageChange }: { onLanguageChange: (language: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('UZ')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'UZ', name: 'O\'zbekcha' },
    { code: 'RU', name: 'Русский' },
    { code: 'EN', name: 'English' }
  ]

  // Notify parent component when language changes
  useEffect(() => {
    onLanguageChange(selectedLanguage)
  }, [selectedLanguage, onLanguageChange])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language.code)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-1.5 rounded hover:bg-slate-700 transition-colors group"
        aria-label="Change language"
      >
        <GlobeIcon className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs font-medium text-blue-400 group-hover:text-blue-300">{selectedLanguage}</span>
        <svg 
          className={`w-3 h-3 text-blue-400 group-hover:text-blue-300 transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                selectedLanguage === language.code 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{language.name}</span>
                <span className="text-gray-500">{language.code}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
const RegionDropdown = ({ onRegionChange }: { onRegionChange: (region: typeof uzbekRegions[0]) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState(uzbekRegions[0])
  const [searchQuery, setSearchQuery] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Notify parent component when region changes
  useEffect(() => {
    onRegionChange(selectedRegion)
  }, [selectedRegion, onRegionChange])
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchQuery("")
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleRegionSelect = (region: typeof uzbekRegions[0]) => {
    setSelectedRegion(region)
    setIsOpen(false)
    setSearchQuery("")
  }

  // Filter regions based on search query
  const filteredRegions = uzbekRegions.filter(region =>
    region.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div ref={dropdownRef} className="relative">      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 bg-slate-700/60 hover:bg-slate-600/70 px-2.5 py-1 rounded transition-all duration-200 border border-slate-600/40 hover:border-slate-500/60 group min-w-[140px]"
      >
        <LocationIcon className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-white text-xs font-medium truncate flex-1 text-left">
          {selectedRegion.name}
        </span>
        <svg 
          className={`w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full min-w-[220px] bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-64 overflow-hidden">
          {/* Search Input */}
          <div className="p-2 border-b border-gray-100">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Viloyatni qidiring..."
                className="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded text-xs text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Regions List */}
          <div className="py-1 max-h-40 overflow-y-auto">
            {filteredRegions.length > 0 ? (
              filteredRegions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionSelect(region)}
                  className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                    selectedRegion.id === region.id 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  {region.name}
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-xs text-gray-500 text-center">
                Viloyat topilmadi
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

interface NavClientProps {
  // Interface can be extended in the future if needed
}

export default function NavClient(props: NavClientProps = {}) {  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState(uzbekRegions[0])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('UZ')
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  // Memoized callbacks for better performance
  const handleRegionChange = useCallback((region: typeof uzbekRegions[0]) => {
    setSelectedRegion(region)
  }, [])

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const toggleProfileModal = useCallback(() => {
    setIsProfileModalOpen(prev => !prev)
  }, [])  // Memoized phone formatter for better performance
  const formatPhoneNumber = useCallback((value: string) => {
    const digits = value.replace(/\D/g, '')
    
    if (digits.length <= 2) {
      return digits
    } else if (digits.length <= 5) {
      return `${digits.slice(0, 2)}-${digits.slice(2)}`
    } else if (digits.length <= 7) {
      return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`
    } else {
      return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5, 7)}-${digits.slice(7, 9)}`
    }
  }, [])

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)
  }, [formatPhoneNumber])  // Memoized phone numbers display for better performance
  const phoneNumbersDisplay = useMemo(() => 
    selectedRegion.phones.map((phone: string, index: number) => (
      <a 
        key={index}
        href={`tel:${phone.replace(/\s/g, '')}`} 
        className="flex items-center gap-1.5 hover:bg-slate-700 text-xs font-medium transition-colors px-2 py-1 rounded text-blue-300 hover:text-white"
      >
        <PhoneIcon className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{phone}</span>
      </a>
    )), [selectedRegion.phones]
  )

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">      {/* Top info bar - Optimized for 13" MacBook */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="content-container py-2">
          <div className="flex justify-between items-center text-xs text-white">
            <div className="flex items-center gap-3">
              <LocalizedClientLink
                href="/"
                className="text-lg font-semibold text-white hover:text-blue-200 transition-colors duration-200 letter-spacing-wide"
                data-testid="nav-store-link"
              >
                ELITE WOOD
              </LocalizedClientLink>
              <div className="w-px h-5 bg-slate-600"></div>
              <RegionDropdown onRegionChange={handleRegionChange} />
            </div>
              
            {/* Search Bar optimized for 13" MacBook */}
            <div className="flex-1 flex items-center justify-center px-3">
              <div className="flex items-center relative max-w-sm w-full">
                <div className="relative w-full">
                  <SearchIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Yog'och turlari, zina qidiring..."
                    className="w-full pl-7 pr-2 py-1 border border-gray-300 rounded-full text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
                  />
                  <button className="absolute right-0.5 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-0.5 rounded-full transition-colors">
                    <SearchIcon className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </div>              <div className="flex items-center gap-1.5">
              {/* Day/Night Toggle - Compact for 13" */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-1 rounded hover:bg-slate-700 transition-colors"
                aria-label={isDarkMode ? "Light mode" : "Dark mode"}
              >
                {isDarkMode ? (
                  <SunIcon className="w-3 h-3 text-yellow-400 hover:text-yellow-300" />
                ) : (
                  <MoonIcon className="w-3 h-3 text-blue-400 hover:text-blue-300" />
                )}
              </button>              

              {/* Language Selection - Compact */}
              <LanguageDropdown onLanguageChange={handleLanguageChange} />

              {phoneNumbersDisplay}
            </div>
          </div>
        </div>
      </div>      {/* Main navigation - Optimized for 13" MacBook */}
      <header className="relative h-7 mx-auto border-b duration-200 bg-gradient-to-r from-white via-blue-50 to-white border-blue-100 shadow-md backdrop-blur-lg">        <nav className="content-container flex items-center justify-between w-full h-full">
          {/* Left side - Mobile menu button */}
          <div className="flex items-center">            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden p-1 rounded hover:bg-blue-100 transition-colors"
              aria-label="Menu"
            >
              <MenuIcon className="w-3.5 h-3.5 text-gray-600" />
            </button>
          </div>          {/* Center - Desktop Navigation Links for 13" MacBook */}
          <div className="hidden xl:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/"
              data-testid="nav-home-link"
            >
              Главная
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/catalog"
              data-testid="nav-catalog-link"
            >
              Каталог
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"              href="/price-list"
              data-testid="nav-price-link"
            >
              Прайс-лист
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/gallery"
              data-testid="nav-gallery-link"
            >
              Галерея
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/news"
              data-testid="nav-news-link"
            >
              Новости
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/useful"
              data-testid="nav-useful-link"
            >
              Полезное
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/payment-delivery"
              data-testid="nav-payment-link"
            >
              Оплата и доставка
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/about"
              data-testid="nav-about-link"
            >
              О компании
            </LocalizedClientLink>
            <LocalizedClientLink
              className="px-3 py-1.5 rounded hover:bg-blue-100 font-medium transition-colors text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              href="/contact"
              data-testid="nav-contact-link"
            >
              Контакты
            </LocalizedClientLink>
          </div>

          {/* Right side - Navigation & Actions for 13" MacBook */}
          <div className="flex items-center gap-1">
            {/* Account & Cart Section */}
            <div className="flex items-center gap-0.5">              {/* Account */}
              <button
                onClick={toggleProfileModal}
                className="flex items-center p-1.5 rounded hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
                aria-label="Profile"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="xl:hidden p-1.5 rounded hover:bg-blue-100 transition-colors"
                aria-label="Qidiruv"
              >
                <SearchIcon className="w-3.5 h-3.5 text-gray-600 hover:text-blue-600" />
              </button>              {/* Cart */}
              <LocalizedClientLink
                className="flex items-center p-1.5 rounded hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600 relative"
                href="/cart"
                data-testid="nav-cart-link"
              ><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 7h15l-1.5 9H6l-1.5-9zM4.5 7L3 2H1m3.5 5v0m13 11a1 1 0 100 2 1 1 0 000-2zm-9 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-xs font-medium px-1 py-0.5 rounded-full min-w-[12px] text-center leading-none">4</span>
              </LocalizedClientLink>
            </div>
          </div>
        </nav>        {/* Mobile Navigation Menu - Optimized for 13" MacBook */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b shadow-lg z-40">
            <div className="content-container py-3">
              {/* Mobile Search - Simplified */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Qidiring..."
                  className="w-full px-3 py-1.5 border border-blue-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>              <div className="space-y-1">
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/"
                  onClick={toggleMobileMenu}
                >
                  Главная
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/catalog"
                  onClick={toggleMobileMenu}
                >
                  Каталог
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/price-list"
                  onClick={toggleMobileMenu}
                >
                  Прайс-лист
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/gallery"
                  onClick={toggleMobileMenu}
                >
                  Галерея
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/news"
                  onClick={toggleMobileMenu}
                >
                  Новости
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/useful"
                  onClick={toggleMobileMenu}
                >
                  Полезное
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/payment-delivery"
                  onClick={toggleMobileMenu}
                >
                  Оплата и доставка
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/about"
                  onClick={toggleMobileMenu}
                >
                  О компании
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-blue-50 transition-colors font-medium text-sm"
                  href="/contact"
                  onClick={toggleMobileMenu}
                >
                  Контакты
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        )}
      </header>      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleProfileModal}
          ></div>
          
          {/* Modal Content - Exact match to design */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-auto p-6">            {/* Close Button */}
            <button
              onClick={toggleProfileModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>            {/* Modal Header */}
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Kirish yoki profil yaratish
              </h2>
            </div>{/* Phone Input - Functional input field with auto-formatting */}
            <div className="mb-4">
              <div className="flex border border-blue-300 rounded-lg p-3 focus-within:border-blue-400 transition-colors">
                <div className="flex items-center gap-2 border-r border-gray-200 pr-3">
                  <div className="w-6 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-1 bg-white rounded"></div>
                  </div>
                  <span className="font-medium text-gray-700">+998</span>
                </div>                <input
                  type="tel"
                  placeholder="90-559-70-80"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="flex-1 pl-3 outline-none text-gray-700 placeholder-gray-400 font-medium"
                  maxLength={12}
                />
              </div>
            </div>            {/* Get Code Button - Lighter blue */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-lg transition-colors mb-4">
              Kod olish
            </button>

            {/* Agreement - Lighter blue */}
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>              <p className="text-sm text-gray-600">
                <span className="text-blue-500 cursor-pointer hover:underline">Savdo maydonchasi qoidalari</span> va <span className="text-blue-500 cursor-pointer hover:underline">qaytarish shartlari</span> bilan roziman
              </p>
            </div>
          </div>
        </div>      )}

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  )
}
