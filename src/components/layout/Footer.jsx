function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              SmartDelivery AI
            </h2>

            <p className="text-gray-300 leading-7">
              A machine learning application that predicts
              whether an e-commerce shipment will arrive on
              time or be delayed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Predict</li>
              <li>Team</li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Built With
            </h3>

            <ul className="space-y-2">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Machine Learning</li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-400">
          © 2026 SmartDelivery AI. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;