import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       Alex Frost
      </h1>
      <h2 className="mb-4 text-xl font-medium">Electrical Engineer</h2>
      <p className="mb-4">
        {`This is a showcase of projects I have completed as an Electrical Engineer`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
