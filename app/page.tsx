import { BlogPosts } from "app/components/posts"

export default function Page() {
  return (
    <section>
      <h1 className="mb-1 text-2xl font-semibold tracking-tighter">Alex Frost</h1>
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
