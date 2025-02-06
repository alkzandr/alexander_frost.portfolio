import { BlogPosts } from 'app/components/posts'
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Magnetic Button Example</h1>
      <MagneticButton />
    </main>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-1 text-2xl font-semibold tracking-tighter">
       Alex Frost
      </h1>
      <h2 className="mb-1 text-xl font-medium">Electrical Engineer</h2>
      <h3 className="mb-8 text-lg font-normal text-gray-600">Wollongong, NSW</h3>
      <p className="mb-4">
        {`This is a showcase of various academic and personal projects I have completed throughout my career`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
