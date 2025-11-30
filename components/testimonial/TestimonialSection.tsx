import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Food Blogger",
      review:
        "Absolutely delicious! The flavors were authentic and the service was exceptional. Highly recommend!",
      avatar: "/avatars/user1.jpg",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Regular Customer",
      review:
        "Best restaurant in the city! Fresh ingredients and a diverse menu with something for everyone.",
      avatar: "/avatars/user2.jpg",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Chef & Critic",
      review:
        "Wonderful ambience and great food presentation. Every dish feels carefully crafted.",
      avatar: "/avatars/user3.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">What Our Guests Say</h2>
        <p className="text-muted-foreground mt-2">
          Real experiences from real guests.
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-6 shadow-sm hover:shadow-lg transition">
            <CardContent className="flex flex-col items-center text-center gap-4">
              
              {/* Avatar */}
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 rounded-full object-cover border"
              />

              {/* Name / Role */}
              <div>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-muted-foreground">{t.review}</p>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
