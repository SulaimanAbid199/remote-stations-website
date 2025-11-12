
import { LocateUsSection } from "./LocateUsSection"
import { MapSection } from "./MapSection"


export const metadata = {
  title: "Locate Us",
  description: "Find our location and get in touch",
}


export default function Location() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        <MapSection />
        <LocateUsSection />
      </div>
    </main>
  )
}
