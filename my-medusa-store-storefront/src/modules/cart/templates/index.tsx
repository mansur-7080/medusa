import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {  // Mock data for demonstration - Zina mahsulotlari
  const mockCartItems = [
    {
      id: "1",
      title: "Yog'och zina pog'onasi, qayrag'och 90cm",
      description: "Tabiiy qayrag'och • 900x300x40mm • Lakli",
      thumbnail: "/api/placeholder/80/80",
      quantity: 12,
      unit_price: 285000,
      original_price: 320000
    },
    {
      id: "2", 
      title: "Metall tutqich, po'lat 120cm",
      description: "Nerjoydon po'lat • 1200mm • Oval shakl",
      thumbnail: "/api/placeholder/80/80",
      quantity: 2,
      unit_price: 450000,
      original_price: 520000
    },
    {
      id: "3",
      title: "Zina ostidagi shkaf, MDF", 
      description: "Oq rang • 180x60x40cm • To'rt eshikli",
      thumbnail: "/api/placeholder/80/80",
      quantity: 1,
      unit_price: 1250000,
      original_price: 1450000
    },
    {
      id: "4",
      title: "LED yoritgich, zina uchun",
      description: "Issiq oq • 3W • Motion sensor", 
      thumbnail: "/api/placeholder/80/80",
      quantity: 8,
      unit_price: 95000,      original_price: 115000
    }
  ]
  // Agar savat bo'sh bo'lsa
  if (!mockCartItems || mockCartItems.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <div className="content-container py-8" data-testid="cart-container">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h4.5" />
                </svg>
              </div>              <h2 className="text-xl font-bold text-gray-900 mb-2">Savatchangiz bo'sh</h2>
              <p className="text-gray-600 mb-6">Zina uchun kerakli mahsulotlarni tanlang va buyurtma bering!</p>              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg">
                Zina katalogini ko'rish
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="content-container py-2" data-testid="cart-container">
        {/* Progress Bar */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-gray-900">Buyurtma jarayoni</h2>
            <span className="text-xs text-gray-500">1/4 qadam</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              <span className="ml-2 text-xs font-medium text-purple-600">Savat</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 rounded">
              <div className="h-1 bg-purple-600 rounded w-1/4"></div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs">2</div>
              <span className="ml-2 text-xs text-gray-500">Manzil</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs">3</div>
              <span className="ml-2 text-xs text-gray-500">To'lov</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs">4</div>
              <span className="ml-2 text-xs text-gray-500">Tasdiqlash</span>
            </div>
          </div>
        </div>

        {/* Ultra-ixcham Sarlavha */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-3 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h4.5" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 leading-tight">Savat</h1>
                <p className="text-xs text-gray-500">{mockCartItems.length} mahsulot • Ertaga yetkazish</p>
              </div>
            </div>            <div className="text-right">
              <p className="text-xs text-gray-500 mb-0.5">Jami summa</p>
              <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">4 880 000 so'm</p>
            </div>
          </div>
        </div>        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Aqlli Mahsulot Kartalari */}
          <div className="lg:col-span-2 space-y-2">
            
            {/* Quick Actions */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-3 mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-all">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Hammasini o'chirish
                  </button>
                  <button className="flex items-center gap-2 text-xs bg-purple-50 text-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-100 transition-all">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Sevimlilar
                  </button>
                </div>
                <div className="text-xs text-gray-500">
                  Jami: <span className="font-bold text-gray-900">{mockCartItems.length} mahsulot</span>
                </div>
              </div>
            </div>
            {mockCartItems.map((item, index) => (
              <div key={item.id} className="bg-white shadow-md border border-gray-100 rounded-xl p-2.5 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-2.5">                  <div className="relative flex-shrink-0">
                    {item.id === "1" && (
                      <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">2</div>
                    )}
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-purple-300 transition-colors">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                    <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 line-clamp-2 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                    
                    {/* Zaxira holati */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">✓ Mavjud</span>
                      <span className="text-xs text-gray-500">5+ dona qoldi</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Miqdor boshqaruvi - Kattalashtitilgan */}
                        <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg shadow-sm">
                          <button className="px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-all rounded-l-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="px-4 py-2 text-sm font-bold min-w-[40px] text-center border-x border-gray-200">{item.quantity}</span>
                          <button className="px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-all rounded-r-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Sevimlilar va o'chirish - Kattalashtitilgan va masofali */}
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all ml-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Narx va chegirma */}
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-bold text-gray-900">
                          {item.unit_price.toLocaleString()} so'm
                        </p>
                        {item.original_price > item.unit_price && (
                          <div className="flex items-center gap-1 justify-end">
                            <p className="text-xs text-gray-400 line-through">
                              {item.original_price.toLocaleString()}
                            </p>
                            <span className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 px-1.5 py-0.5 rounded-full shadow-sm">
                              -{Math.round((1 - item.unit_price / item.original_price) * 100)}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Qo'shimcha Savdo - Tez-tez birga olinadi */}
            <div className="bg-white shadow-md border border-gray-100 rounded-xl p-3 mt-3">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <h3 className="font-semibold text-gray-900 text-sm">Zina uchun qo'shimcha</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">-15% chegirma</span>
              </div>              <div className="flex gap-2 overflow-x-auto pb-1">
                {[
                  { name: "Zina qoplagichi", price: "125 000", image: "/api/placeholder/40/40" },
                  { name: "Mahkamlash vintlari", price: "45 000", image: "/api/placeholder/40/40" },
                  { name: "Zina kilimi", price: "320 000", image: "/api/placeholder/40/40" }
                ].map((rec, i) => (
                  <div key={i} className="flex-shrink-0 w-16 text-center border border-gray-200 rounded-lg p-1.5 hover:border-purple-300 cursor-pointer transition-all">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg mb-1 mx-auto overflow-hidden">
                      <img src={rec.image} alt={rec.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-gray-700 line-clamp-2 mb-0.5">{rec.name}</p>
                    <p className="text-xs font-bold text-purple-600">{rec.price}</p>
                    <button className="text-xs bg-purple-100 text-purple-700 px-1 py-0.5 rounded mt-0.5 hover:bg-purple-200 transition-colors">+</button>
                  </div>
                ))}
              </div>
            </div>
          </div>          {/* Boy Buyurtma Xulasasi - Sticky */}
          <div className="space-y-2 lg:sticky lg:top-4 lg:max-h-screen lg:overflow-y-auto">
              {/* Xavfsizlik va ishonch nishonlari - Ko'zga ko'ringan */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-green-700 font-bold">SSL Himoyalangan</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-blue-700 font-bold">Kafolatlangan</span>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-600 mt-2">
                  🔒 Sizning ma'lumotlaringiz 256-bit shifrlash bilan himoyalangan
                </p>
              </div>

              {/* Yetkazib berish */}
            <div className="bg-white shadow-md border border-gray-100 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-sm">Yetkazib berish</h3>
                <span className="text-xs text-white bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full font-bold shadow-sm">Bepul</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-gray-600 bg-blue-50 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Ertaga, 24-dekabr</span>
                  <span className="text-green-600 font-bold">✓ Tez yetkazish</span>
                </div>
                <button className="text-purple-600 hover:text-purple-700 text-xs font-medium hover:underline transition-all">
                  Manzilni tanlash →
                </button>
              </div>
            </div>            {/* To'lov usuli */}
            <div className="bg-white shadow-md border border-gray-100 rounded-xl p-3">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">To'lov usuli</h3>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer transition-all">
                  <div className="w-6 h-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold mb-1">💳</div>
                  <span className="text-xs text-gray-600">Karta</span>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer transition-all">
                  <div className="w-6 h-4 bg-gradient-to-r from-green-600 to-green-800 rounded text-white text-xs flex items-center justify-center font-bold mb-1">💵</div>
                  <span className="text-xs text-gray-600">Naqd</span>
                </div>
              </div>
              <button className="text-purple-600 hover:text-purple-700 text-xs font-medium hover:underline transition-all">
                Kirish yoki ro'yxatdan o'tish →
              </button>
            </div>

            {/* Mijoz ma'lumotlari */}
            <div className="bg-white shadow-md border border-gray-100 rounded-xl p-3">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Qabul qiluvchi</h3>
              <div className="flex items-center gap-2 mb-2 bg-amber-50 p-2 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-700 font-medium">Ma'lumotlaringizni kiriting</span>
              </div>
              <button className="text-purple-600 hover:text-purple-700 text-xs font-medium hover:underline transition-all">
                Kirish yoki ro'yxatdan o'tish →
              </button>
            </div>            {/* Buyurtma jami - Professional dizayn */}
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-3 shadow-lg">              <div className="space-y-1.5 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Mahsulotlar (23 ta)</span>
                  <span className="font-semibold">5 335 000 so'm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Chegirma</span>
                  <span className="text-red-600 font-semibold">-455 000 so'm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Yetkazish</span>
                  <span className="text-green-600 font-semibold">Bepul</span>
                </div>
                <div className="border-t-2 border-purple-200 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Jami</span>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">4 880 000 so'm</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1 font-medium">Siz 455 000 so'm tejaysiz! 🎉</p>
                </div>
              </div><button className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-2 text-sm transform hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center gap-2 relative">
                  <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h4.5" />
                  </svg>
                  <span>Buyurtma berish</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>

              {/* Ishonch ko'rsatkichlari */}
              <div className="space-y-1.5">
                <div className="flex items-start gap-2 text-xs text-gray-600">
                  <svg className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-tight">Foydalanish shartlari va qaytarish qoidalariga roziman</span>
                </div>
                
                {/* Xavfsizlik va ishonch nishonlari */}
                <div className="flex items-center justify-between pt-2 border-t border-purple-200">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600 font-medium">Xavfsiz</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600 font-medium">Tez</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600 font-medium">Qulay</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600 font-medium">Sifatli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTemplate
