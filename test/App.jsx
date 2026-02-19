export default function App() {
  return (
    <div className="min-h-screen bg-gdg-black text-gdg-grey-light">

      {/* Hero Section */}
      <section className="bg-gdg-black-dark py-24 px-8 text-center border-b border-gdg-grey-dark">
        <h1 className="text-6xl font-bold mb-6 text-gdg-white">
          GDG Dark Theme
        </h1>
        <p className="text-xl text-gdg-grey max-w-2xl mx-auto">
          Tailwind v4 theme tokens powered by custom GDG brand colors.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <button className="bg-gdg-blue hover:scale-105 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-gdg-blue/30">
            Blue Action
          </button>

          <button className="bg-gdg-red hover:scale-105 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-gdg-red/30">
            Red Action
          </button>

          <button className="bg-gdg-green hover:scale-105 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-gdg-green/30">
            Green Action
          </button>
        </div>
      </section>

      {/* Brand Colors Grid */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gdg-white">
          Brand Color Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <ColorCard name="GDG Blue" bg="bg-gdg-blue" />
          <ColorCard name="GDG Red" bg="bg-gdg-red" />
          <ColorCard name="GDG Yellow" bg="bg-gdg-yellow text-gdg-black" />
          <ColorCard name="GDG Green" bg="bg-gdg-green" />
          <ColorCard name="Grey" bg="bg-gdg-grey text-gdg-black" />
          <ColorCard name="Grey Dark" bg="bg-gdg-grey-dark" />
          <ColorCard name="Black Light" bg="bg-gdg-black-light" />
          <ColorCard name="Black" bg="bg-gdg-black" border />
        </div>
      </section>

      {/* UI Samples */}
      <section className="py-20 px-8 bg-gdg-black-light border-t border-gdg-grey-dark">
        <div className="max-w-5xl mx-auto space-y-12">

          <h2 className="text-4xl font-bold text-gdg-white">
            UI Components Preview
          </h2>

          {/* Card */}
          <div className="bg-gdg-black p-10 rounded-3xl border border-gdg-grey-dark shadow-2xl">
            <h3 className="text-2xl font-semibold text-gdg-blue mb-4">
              Developer Card
            </h3>
            <p className="text-gdg-grey mb-6">
              This card uses layered dark surfaces with accent highlights.
            </p>
            <button className="bg-gdg-yellow text-gdg-black px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition">
              Join Event
            </button>
          </div>

          {/* Border examples */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-gdg-blue rounded-xl">
              <p className="text-gdg-grey-light">Blue Border</p>
            </div>
            <div className="p-6 border-2 border-gdg-red rounded-xl">
              <p className="text-gdg-grey-light">Red Border</p>
            </div>
            <div className="p-6 border-2 border-gdg-green rounded-xl">
              <p className="text-gdg-grey-light">Green Border</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gdg-black-dark py-12 text-center border-t border-gdg-grey-dark">
        <p className="text-gdg-grey">
          GDG Dark Theme — Tailwind v4 Custom Tokens 🚀
        </p>
      </footer>

    </div>
  );
}

function ColorCard({ name, bg, border }) {
  return (
    <div
      className={`${bg} ${
        border ? "border border-gdg-grey-dark" : ""
      } text-gdg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center text-xl font-semibold`}
    >
      {name}
    </div>
  );
}