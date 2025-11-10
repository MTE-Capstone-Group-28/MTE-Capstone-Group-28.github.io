export function Week7() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-left">Week 7</h1>
      <p className="text-lg text-gray-600 text-left mb-8">
        Here's our progress for week 7!
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Meetings</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside"></ul>
        <li className="text-gray-700 mb-2 text-left">
          Meeting with team and advisors: 11/10/2025
        </li>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">General</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside"></ul>
        <li className="text-gray-700 mb-2 text-left">
          Ordered drone parts: Dimitri - 11/05/2025
        </li>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Mechanical</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Continued on working on CAD model of the drone: Sehaj + Dimitri -
            11/02/2025
          </li>
        </ul>
      </section>
    </div>
  )
}
