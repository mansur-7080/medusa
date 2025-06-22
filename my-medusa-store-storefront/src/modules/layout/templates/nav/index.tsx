import { Suspense } from "react"
import LoadingSpinner from "@modules/layout/components/loading"
import NavClient from "./nav-client"

export default async function Nav() {
  return (
    <Suspense fallback={<LoadingSpinner className="h-16" />}>
      <NavClient />
    </Suspense>
  )
}
