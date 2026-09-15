import { useState } from "react";

function PredictionForm({ setResult }) {
  const [formData, setFormData] = useState({
    warehouse: "",
    shipmentMode: "",
    customerCareCalls: "",
    customerRating: "",
    productImportance: "",
    weight: "",
    cost: "",
    priorPurchases: "",
    discount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prediction =
      Number(formData.customerRating) >= 3
        ? "On Time"
        : "Delayed";

    setResult(prediction);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 px-10 py-12">

      {/* Header */}

      <div className="text-center mb-12">

        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl">
          🚚
        </div>

        <h2 className="text-4xl font-bold text-slate-900">
          Predict Delivery
        </h2>

        <p className="text-slate-500 mt-3 text-lg">
          Fill in shipment information to estimate whether delivery
          will arrive on time.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-x-8 gap-y-8"
      >

        {/* Warehouse */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Warehouse
          </label>

          <select
            name="warehouse"
            value={formData.warehouse}
            onChange={handleChange}
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          >
            <option value="">Select Warehouse</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </select>
        </div>

        {/* Shipment */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Shipment Mode
          </label>

          <select
            name="shipmentMode"
            value={formData.shipmentMode}
            onChange={handleChange}
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          >
            <option value="">Select Mode</option>
            <option>Flight</option>
            <option>Road</option>
            <option>Ship</option>
          </select>
        </div>

        {/* Weight */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Weight (g)
          </label>

          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter weight"
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Discount */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Discount (%)
          </label>

          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="Enter discount"
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Rating */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Customer Rating
          </label>

          <input
            type="number"
            min="1"
            max="5"
            name="customerRating"
            value={formData.customerRating}
            onChange={handleChange}
            placeholder="1 - 5"
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Calls */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Customer Care Calls
          </label>

          <input
            type="number"
            name="customerCareCalls"
            value={formData.customerCareCalls}
            onChange={handleChange}
            placeholder="Number of calls"
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Cost */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Product Cost ($)
          </label>

          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            placeholder="Enter cost"
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Importance */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Product Importance
          </label>

          <select
            name="productImportance"
            value={formData.productImportance}
            onChange={handleChange}
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          >
            <option value="">Select Importance</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Prior Purchases */}

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Prior Purchases
          </label>

          <input
            type="number"
            name="priorPurchases"
            value={formData.priorPurchases}
            onChange={handleChange}
            placeholder="Previous purchases"
            className="w-full h-14 rounded-xl border border-slate-300 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Button */}

        <div className="md:col-span-2 flex justify-center pt-6">

          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg transition"
          >
            🚀 Predict Delivery
          </button>

        </div>

      </form>

    </div>
  );
}

export default PredictionForm;