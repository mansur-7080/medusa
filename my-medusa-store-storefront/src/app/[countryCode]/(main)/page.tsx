import { Metadata } from "next"

import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "Деревянные лестницы и комплектующие - Elite Wood",
  description:
    "Качественные деревянные лестницы, ступени, балясины, поручни и комплектующие из натурального дерева. Доставка по всей России.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <>
      <Hero />
    </>
  )
}
