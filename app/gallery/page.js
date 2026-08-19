export const metadata = {
  title: "Gallery | ThreeJS Showcase",
  description: "Visual 3D gallery and visual renders.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          Showcase
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Gallery
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Visual renders, mesh topologies, and lighting setups.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-video rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center justify-center p-6 text-center group hover:border-neutral-700 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:scale-110 group-hover:bg-indigo-950/80 group-hover:text-indigo-400 transition-all mb-3">
              <span className="font-mono text-sm font-semibold">0{i}</span>
            </div>
            <p className="text-sm font-medium text-neutral-300">Scene Render #{i}</p>
            <p className="text-xs text-neutral-500 mt-1">Placeholder slot</p>
          </div>
        ))}
      </div>
    </div>
  );
}
