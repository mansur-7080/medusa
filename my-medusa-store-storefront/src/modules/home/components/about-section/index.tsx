import { Heading, Text, Button } from "@medusajs/ui"
import Link from "next/link"

const AboutSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-6">
              О компании Elite Wood
            </Heading>
            <Text className="text-lg text-gray-600 mb-6">
              Мы специализируемся на производстве и продаже качественных деревянных лестниц 
              и комплектующих к ним. Наша продукция изготавливается из натуральных экологически 
              чистых материалов различных пород древесины.
            </Text>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-green-600">✓</span>
                <Text>Любые категории и размеры</Text>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600">✓</span>
                <Text>Различные породы древесины</Text>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600">✓</span>
                <Text>Доставка по всей России за 3-5 дней</Text>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600">✓</span>
                <Text>Консультация специалистов</Text>
              </div>
            </div>
            <Link href="/about">
              <Button variant="secondary" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                Подробнее о компании
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🏘️</div>
              <Text className="text-lg text-amber-800 font-medium">
                Качественные материалы<br />
                для вашего дома
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
