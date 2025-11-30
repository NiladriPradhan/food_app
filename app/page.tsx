import Image from "next/image";
import bg_image from "@/public/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FeatureSection from "@/components/feature/FeatureSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import CTASection from "@/components/cta/CTASection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="relative h-[80vh] max-h-[800px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={bg_image}
                alt="hero background"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-start text-white mx-4 container">
              <h1 className="text-6xl font-bold">Authentic Flavour</h1>
              <span className="text-4xl font-semibold mt-2">
                <span className="text-green-400"> Exceptional</span> Dinner
              </span>
              <p className="text-white">
                Experience the finest culinary creation made with locaaly
                sourced ingridients and passion{" "}
              </p>
              <div className="flex gap-4 mt-4">
                <Button asChild size={"lg"} className="capitalize ">
                  <Link href="/menu" className="">
                    view menu <ChevronRight className="text-gray-50 " />{" "}
                  </Link>
                </Button>
                <Button
                  asChild
                  size={"lg"}
                  variant={"outline"}
                  className="bg-white text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  <Link href="/reservation"> Make Reservation</Link>
                </Button>
              </div>
            </div>
          </section>
          {/* Feature section */}
          <FeatureSection />
          {/* Testimonial section */}
          <TestimonialSection />
          {/* CTA section */}
          <CTASection />
          {/* Footer sectiovn */}
          <Footer />
        </main>
      </div>
    </>
  );
}
