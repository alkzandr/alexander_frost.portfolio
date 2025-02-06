import { BlogPosts } from "app/components/posts"; // Fix path if necessary
import MagneticButton from "app/components/magneticButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Section 1 - Header and Intro */}
      <section className="text-center mb-12">
        <h1 className="mb-1 text-2xl font-semibold tracking-tighter">
          Alex Frost
        </h1>
        <h2 className="mb-1 text-xl font-medium">Electrical Engineer</h2>
        <h3 className="mb-8 text-lg font-normal text-gray-400">Wollongong, NSW</h3>
        <p className="mb-4">
          This is a showcase of various academic and personal projects I have completed throughout my career.
        </p>
      </section>

      {/* Section 2 - Magnetic Button */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Magnetic Button Example</h2>
        <MagneticButton />
      </section>

      {/* Section 3 - Blog Posts */}
      <section className="my-8 w-full max-w-3xl">
        <BlogPosts />
      </section>
    </main>
  );
}
