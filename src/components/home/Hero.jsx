import { Link } from "react-router-dom";
import { Truck } from "lucide-react";

function Hero() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Truck size={18} />
          AI-Powered Delivery Prediction
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Predict Delivery Delays
          <br />
          Before They Happen
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          SmartDelivery AI helps logistics teams predict shipment delays,
          improve customer satisfaction, and make smarter delivery decisions
          using Machine Learning.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/predict"
            className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Predict Shipment
          </Link>

          <Link
            to="/about"
            className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;