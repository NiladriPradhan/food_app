import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center px-6 max-w-3xl">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Experience Exceptional Taste?
        </h2>

        <p className="text-lg text-white/80 mb-8">
          Book your table now and enjoy handcrafted dishes prepared with fresh, locally sourced ingredients.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-primary font-semibold">
            Reserve a Table
          </Button>

          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
            View Menu
          </Button>
        </div>

      </div>
    </section>
  );
}
