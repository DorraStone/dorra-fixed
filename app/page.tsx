import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Pillars } from "@/components/pillars"
import { Collections } from "@/components/collections"
import { Stones } from "@/components/stones"
import { Making } from "@/components/making"
import { BrandStory } from "@/components/brand-story"
import { Values } from "@/components/values"
import { Experience } from "@/components/experience"
import { FutureVision } from "@/components/future-vision"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CartDrawer />
      <Hero />
      <Philosophy />
      <Pillars />
      <Collections />
      <Stones />
      <Making />
      <Experience />
      <BrandStory />
      <Values />
      <FutureVision />
      <Contact />
      <Footer />
    </main>
  )
}
