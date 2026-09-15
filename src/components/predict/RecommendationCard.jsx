function RecommendationCard({ result }) {
  if (!result) return null;

  const recommendations =
    result === "On Time"
      ? [
          "Shipment is on schedule.",
          "Continue monitoring the shipment.",
          "Keep the customer informed.",
        ]
      : [
          "Increase shipment priority.",
          "Notify the customer immediately.",
          "Review warehouse operations.",
          "Consider faster transportation.",
        ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Recommendations
      </h2>

      <ul className="space-y-4">
        {recommendations.map((item, index) => (
          <li
            key={index}
            className="bg-blue-50 p-4 rounded-lg"
          >
            ✅ {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default RecommendationCard;