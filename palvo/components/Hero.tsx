import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-black to-[#020617]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <span className="inline-block mb-4 text-sm font-semibold text-cyan-400">
            New Arrival
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Palvo Pendant
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            A discreet AI-powered smart pendant designed to capture ideas,
            conversations, and moments — securely and effortlessly.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-lg bg-cyan-500 px-6 py-3 text-black font-semibold hover:bg-cyan-400 transition">
              Join Waitlist
            </button>

            <button className="rounded-lg border border-gray-500 px-6 py-3 text-white hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <Image
            src="/palvo-hero.png"
            alt="Palvo smart pendant"
            width={420}
            height={600}
            priority
            className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>
    </section>
  );
}
