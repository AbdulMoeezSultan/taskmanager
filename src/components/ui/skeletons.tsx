export const BlogSkeleton = () => {
  return (
    <main className="min-h-screen bg-[#fff] text-[#1f2937] font-sans">
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-[#f97316]">Latest Posts</h2>

        <div className="space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-[#fafafa] rounded-2xl p-6 shadow animate-pulse border border-[#e5e7eb]"
            >
              <div className="h-6 bg-[#fff7ed] rounded w-2/3 mb-4" />
              <div className="h-4 bg-[#fff7ed] rounded w-full mb-2" />
              <div className="h-4 bg-[#fff7ed] rounded w-5/6 mb-4" />
              <div className="h-3 bg-[#e5e7eb] rounded w-1/3 mb-6" />
              <div className="flex justify-end">
                <div className="h-8 bg-[#f97316] rounded w-24" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export const BlogDetailsSkeleton = () => {
  return (
    <main className="min-h-screen bg-[#fff] text-[#1f2937] font-sans px-4 py-12">
      <div className="max-w-3xl mx-auto animate-pulse">
        {/* Title */}
        <div className="h-10 bg-[#fff7ed] rounded w-3/4 mb-6" />

        {/* Author and Date */}
        <div className="h-4 bg-[#fff7ed] rounded w-1/3 mb-8" />

        {/* Content */}
        <div className="bg-[#fafafa] p-6 rounded-2xl shadow space-y-4 border border-[#e5e7eb]">
          <div className="h-4 bg-[#fff7ed] rounded w-full" />
          <div className="h-4 bg-[#fff7ed] rounded w-11/12" />
          <div className="h-4 bg-[#fff7ed] rounded w-10/12" />
          <div className="h-4 bg-[#fff7ed] rounded w-9/12" />
          <div className="h-4 bg-[#fff7ed] rounded w-8/12" />
        </div>
      </div>
    </main>
  );
};
