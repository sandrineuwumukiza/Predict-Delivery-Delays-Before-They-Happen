import { Truck, Warehouse, Brain } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Delivery Prediction",
    description:
      "Predict whether a shipment will arrive on time or be delayed using AI.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Intelligence",
    description:
      "Monitor warehouse performance and improve logistics planning.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description:
      "Receive intelligent recommendations to reduce delivery risks.",
  },
];

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
          Why Choose SmartDelivery AI?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-slate-50 rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <Icon
                  size={50}
                  className="text-blue-700 mb-6"
                />

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;