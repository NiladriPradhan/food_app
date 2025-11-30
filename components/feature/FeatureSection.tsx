import { Clock, Leaf, Utensils } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function FeatureSection() {
  const featuresData = [
    {
      title: "open daily",
      time: " Monday–Sunday: 11am to 10pm",
      icon: <Clock className="h-10 w-10 text-gray-900" />,
    },
    {
      title: "deverse menu",
      time: " 50+ dishes crafted by our master chefs",
      icon: <Utensils className="h-10 w-10 text-gray-900" />,
    },
    {
      title: "fresh ingradients",
      time: "Locally source , organic produced ",
      icon: <Leaf className="h-10 w-10 text-gray-900" />,
    },
  ];
  return (
    <section className="container mx-auto py-16 mt-8 bg-secondary/10">
      <h2 className="text-4xl text-center mb-8 font-bold">Our Feature</h2>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuresData?.length > 0 &&
            featuresData.map(({ title, time, icon }) => (
              <Card key={title} className="flex h-36 items- gap-x-4 p-4">
                {/* Left: Icon */}
                <div className="flex gap-x-10 items-center center  pt-7">
                  <div className="flex-shrink-0">{icon}</div>
                  {/* Right: Text details */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{time}</p>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
