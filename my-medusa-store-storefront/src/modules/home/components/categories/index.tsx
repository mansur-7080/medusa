import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"

const categories = [
  {
    title: "Ступени",
    description: "Деревянные ступени различных размеров",
    href: "/store?category=steps",
    image: "🪜"
  },
  {
    title: "Подступенки", 
    description: "Качественные подступенки из дерева",
    href: "/store?category=risers",
    image: "📐"
  },
  {
    title: "Балясины",
    description: "Декоративные балясины и столбы",
    href: "/store?category=balusters", 
    image: "🏛️"
  },
  {
    title: "Поручни",
    description: "Поручни из различных пород дерева",
    href: "/store?category=handrails",
    image: "🤝"
  },
  {
    title: "Площадки",
    description: "Лестничные площадки и платформы",
    href: "/store?category=platforms",
    image: "🏗️"
  },
  {
    title: "Мебельный щит",
    description: "Щиты для изготовления мебели",
    href: "/store?category=furniture-boards",
    image: "🪵"
  }
]

const Categories = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
            Наша продукция
          </Heading>
          <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент комплектующих для деревянных лестниц из качественных материалов
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              href={category.href}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{category.image}</div>
                <Heading level="h3" className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {category.title}
                </Heading>
                <Text className="text-gray-600">
                  {category.description}
                </Text>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/store" 
            className="inline-flex items-center px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
          >
            Посмотреть весь каталог
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
