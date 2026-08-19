"use client";

export default function ContactPage() {

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="space-y-4 text-center">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Contact
        </h1>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto">
          Have an idea for a 3D web experience or want to collaborate? Feel free to reach out.
        </p>
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm shadow-xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] transition-all duration-200 shadow-lg shadow-indigo-600/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
