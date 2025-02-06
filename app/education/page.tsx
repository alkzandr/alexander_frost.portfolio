export default function WorkExperience() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">My Education and Major Acheivements</h1>
      <p className="mb-4">
        Below is an overview of my education and major achievements throughout my career.
      </p>

      <div className="mt-8">
        <h2 className="mb-1 text-xl font-medium">Education</h2>
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="mb-1 text-2xl font-semibold tracking-tighter dark:text-black">Bachelor of Engineering (Honours) (Electrical Engineering) | University of Wollongong </h3>
            <p className="text-sm">Expected Graduation: July 2025 </p>
          </div>
          {/* Add more jobs as needed */}
        </div>
      </div>
    </section>
  );
}
