export default function WorkExperience() {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-white">My Work Experience</h1>
      <p className="mb-4">
        Below is an overview of my professional journey, showcasing my previous roles and the skills I gained.
      </p>

      <div className="mt-8">
        <h2 className="ext-xl font-bold text-black">Previous Jobs</h2>
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="mb-1 text-2xl font-semibold tracking-tighter">Draftsperson | Molenaar x McNeice</h3>
            <p className="text-sm text-gray-600">June 2021 - Current</p>
            <p className="mt-2 text-gray-700">
              Assisted with the creation of technical diagrams and blueprints, ensuring accuracy and clarity in the drafting process for electrical systems, as well as extensively using communication skills to liaise with vendors and develop strong workplace relationships.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Creating technical diagrams and blueprints</li>
              <li>Liaising with vendors to ensure project success</li>
              <li>Developing strong workplace relationships through communication</li>
              <li>Ensuring clarity and accuracy in all draft designs</li>
            </ul>
          </div>

          {/* Add more jobs as needed */}
        </div>
      </div>
    </section>
  );
}
