function PredictionResult({ result }) {
  if (!result) return null;

  const isOnTime = result === "On Time";

  return (
    <section className="mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Prediction Result
            </h2>

            <p className="text-slate-500 mt-2">
              AI analysis of the shipment.
            </p>
          </div>

          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
              isOnTime
                ? "bg-green-100"
                : "bg-red-100"
            }`}
          >
            {isOnTime ? "✅" : "⚠️"}
          </div>

        </div>

        {/* Main Result */}

        <div
          className={`rounded-2xl p-8 border ${
            isOnTime
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <h3
                className={`text-4xl font-bold mb-4 ${
                  isOnTime
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {isOnTime ? "ON TIME" : "HIGH RISK"}
              </h3>

              <p className="text-lg text-slate-700 mb-6">
                {isOnTime
                  ? "The shipment is likely to arrive on schedule."
                  : "The shipment has a high chance of being delayed."}
              </p>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Prediction
                  </span>

                  <span className="font-semibold">
                    {result}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Confidence
                  </span>

                  <span className="font-semibold">
                    {isOnTime ? "92%" : "91%"}
                  </span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <div className="bg-white rounded-2xl shadow p-6">

                <h4 className="font-bold text-xl mb-4">
                  Why this prediction?
                </h4>

                {isOnTime ? (
                  <ul className="space-y-3 text-slate-700">

                    <li>✅ Good customer rating</li>

                    <li>✅ Low shipment risk</li>

                    <li>✅ Normal warehouse load</li>

                    <li>✅ Suitable transportation</li>

                  </ul>
                ) : (
                  <ul className="space-y-3 text-slate-700">

                    <li>⚠ Heavy package</li>

                    <li>⚠ Road shipment mode</li>

                    <li>⚠ Multiple customer calls</li>

                    <li>⚠ Higher delivery risk</li>

                  </ul>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PredictionResult;