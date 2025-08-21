import { Metadata } from "next";
import CustomLink from "@/components/ui/custom-link";

export const metadata: Metadata = {
  title: {
    template: "%s | Bloggy",
    default: "Bloggy",
  },
  description: "This is the landing page of bloggy.",
};

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#1f2937] font-sans">
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#f97316] mb-6">
          Welcome to <span className="text-[#ea580c]">Bloggy</span>
        </h1>
        <p className="text-lg text-[#6b7280] mb-10 max-w-2xl mx-auto">
          A space where ideas thrive. Read thought-provoking blogs, share your
          own, and connect with a growing community of curious minds.
        </p>
        <CustomLink
          name="Create Blogs"
          link={"/dashboard"}
          className="text-3xl"
        />
      </section>

      {/* Feature Section */}
      <section className="bg-transparent py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#fafafa] p-6 rounded-xl shadow-2xl hover:shadow-lg transition border border-[#e5e7eb]">
            <h3 className="text-2xl font-semibold text-[#f97316] mb-3">
              Write Freely
            </h3>
            <p className="text-[#6b7280]">
              Use our sleek editor to share your thoughts, guides, and
              creativity without limits.
            </p>
          </div>
          <div className="bg-[#fafafa] p-6 rounded-xl shadow-2xl hover:shadow-lg transition border border-[#e5e7eb]">
            <h3 className="text-2xl font-semibold text-[#f97316] mb-3">
              Stay Inspired
            </h3>
            <p className="text-[#6b7280]">
              Discover content curated by thinkers, developers, and storytellers
              from all walks of life.
            </p>
          </div>
          <div className="bg-[#fafafa] p-6 rounded-xl shadow-2xl hover:shadow-lg transition border border-[#e5e7eb]">
            <h3 className="text-2xl font-semibold text-[#f97316] mb-3">
              Grow Your Voice
            </h3>
            <p className="text-[#6b7280]">
              Build an audience and express your passion through powerful
              writing tools.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#f97316]">
          Ready to Start Blogging?
        </h2>
        <p className="text-[#6b7280] mb-8">
          Join hundreds of writers already sharing their voice on Bloggy.
        </p>
        <CustomLink
          name="Create Your First Blog"
          link="/dashboard"
          className="px-6 py-3 text-lg rounded-lg"
        />
      </section>
    </main>
  );
}
