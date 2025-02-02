import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       Alex Frost
      </h1>
      <h2 className="mb-4 text-xl font-medium">Electrical Engineer</h2>
      <p className="mb-4">
        {`I am Alex Frost, a final-year Electrical Engineering student at the University of Wollongong.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
