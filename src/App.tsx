function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-[#1F3864]"
          >
            Nefoxion<span className="text-[#6A3D9A]">.</span>
          </a>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
            AI Workspace
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <span className="mb-5 inline-flex rounded-full border border-[#2DE1C2]/50 bg-[#2DE1C2]/10 px-4 py-2 text-sm font-medium text-[#1F3864]">
            Your documents, simplified
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-[#1F3864] sm:text-5xl">
            AI Document Summarizer
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Turn lengthy documents into clear summaries and key takeaways in
            seconds.
          </p>
        </div>

        {/* Document input */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-4 flex items-center justify-between gap-3">
            <label htmlFor="document" className="font-semibold text-gray-900">
              Your document
            </label>

            <span className="text-sm text-gray-400">Paste text below</span>
          </div>

          <textarea
            id="document"
            placeholder="Paste your document here..."
            className="min-h-64 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-6 outline-none transition placeholder:text-gray-400 focus:border-[#6A3D9A] focus:ring-2 focus:ring-[#6A3D9A]/10"
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer"
            >
              + Upload document
            </button>

            <button
              type="button"
              className="rounded-lg bg-[#1F3864] px-6 py-3 font-semibold text-white transition hover:bg-[#182d50] focus:outline-none focus:ring-2 focus:ring-[#6A3D9A] focus:ring-offset-2 cursor-pointer"
            >
              Summarize document →
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            PDF and Word support will be added after the upload requirements are
            confirmed.
          </p>
        </section>

        {/* Results placeholder */}
        <section className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white/70 p-8 text-center sm:p-12">
          <h2 className="mt-4 text-lg font-semibold text-gray-800">
            Your summary will appear here
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            Add your document above to get a concise TL;DR and a list of key
            points.
          </p>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-400">
          Powered by{" "}
          <span className="font-semibold text-[#1F3864]">Nefoxion</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
