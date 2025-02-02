import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <h2 className="mb-4 text-xl font-medium">Electrical Engineer</h2>
      <p className="mb-4">
        {`I am a final-year Electrical Engineering student at the University of Wollongong, 1 part-time semester away from having completed all my coursework, and I am eager to apply my technical knowledge and problem-solving skills in a practical environment. With a solid foundation in engineering, a passion for problem-solving, and experience in drafting technical diagrams and liaising with vendors professionally, I am confident I can add significant value to the company.
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
