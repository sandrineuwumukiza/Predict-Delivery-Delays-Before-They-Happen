import { useState } from "react";

import PredictionForm from "../components/predict/PredictionForm";
import PredictionResult from "../components/predict/PredictionResult";
import RecommendationCard from "../components/predict/RecommendationCard";

function Predict() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero Section */}

      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-200/20 border border-blue-300 text-sm font-semibold">
            🚚 AI Powered Delivery Prediction
          </span>

          <h1 className="mt-6 text-5xl font-extrabold">
            Predict Shipment Delivery
          </h1>

          <p className="mt-6 text-blue-100 text-lg max-w-3xl mx-auto leading-8">
            Enter shipment information to predict whether your delivery
            will arrive on time or be delayed using our Machine Learning model.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <PredictionForm
            setResult={setResult}
            setLoading={setLoading}
          />

          {loading && (
            <div className="mt-10">
              <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin mx-auto"></div>

                <h3 className="text-2xl font-bold mt-6 text-slate-800">
                  Analyzing Shipment...
                </h3>

                <p className="text-slate-500 mt-2">
                  Our AI model is processing your shipment details.
                </p>

              </div>
            </div>
          )}

          {!loading && result && (
            <>
              <PredictionResult result={result} />

              <RecommendationCard result={result} />
            </>
          )}

        </div>

      </section>

    </div>
  );
}

export default Predict;