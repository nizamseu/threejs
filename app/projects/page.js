export const metadata = {
  title: "Projects | ThreeJS Showcase",
  description: "Explore 3D projects and interactive scenes.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Projects
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          A collection of experiments, 3D interactive scenes, and web applications.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        {[
          { title: "3D Gizmo & Controls", tag: "R3F / Controls", desc: "Interactive pivot and transform controls on dynamic 3D meshes." },
          { title: "Mesh Reflections", tag: "Shaders / Materials", desc: "Real-time surface reflections using MeshReflectorMaterial." },
          { title: "Floating Text & HTML", tag: "Drei / Typography", desc: "HTML occlusion and 3D animated typography integration in canvas." },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-200"
          >
            <span className="inline-block text-xs font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40 px-2.5 py-1 rounded-full mb-3">
              {item.tag}
            </span>
            <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
