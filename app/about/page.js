export const metadata = {
  title: "About | ThreeJS Showcase",
  description: "About the 3D showcase and interactive ThreeJS experiments.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          Overview
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          About
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          An interactive sandbox and portfolio built with Next.js, Three.js, and React Three Fiber.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white mb-2">Technologies</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Exploring WebGL, shaders, physical materials, lighting, controls, and 3D UI integrations using React Three Fiber & Drei.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white mb-2">Purpose</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Crafting immersive digital experiences, interactive geometry, and high-performance WebGL graphics on the web.
          </p>
        </div>
      </div>
    </div>
  );
}
