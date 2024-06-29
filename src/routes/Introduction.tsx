function Introduction() {
  return (
    <div className="flex flex-col md:flex-row gap-y-2 gap-x-[30px] mt-4 p-3 ">
      <div className="w-[160px] md:min-w-[160px] h-[220px] bg-gray-500"></div>
      <div className="flex flex-col gap-y-6 pr-3 pb-6 text-[15px]">
        <div>
          <strong>Name:&nbsp;</strong>
          Malan Gunaratne
        </div>

        <p className="flex flex-col">
          <strong>Personal Statement:&nbsp;</strong>
          I've been working with the web since 2020. I chose to specialise in
          full-stack development as I have a keen interest in working with both
          client-side and server-side code. I built this website to document my
          exploration into frontend development.
        </p>
        <div>
          <strong>Places lived:&nbsp;</strong>
          <ul className="list-disc ">
            <li className="flex flex-col my-2 font-medium">
              Auckland, New Zealand
              <span className="text-[13px] text-gray-600">
                Current town/city
              </span>
            </li>
            <li className="flex flex-col mb-2 font-medium">
              Brisbane, Queensland, Australia
              <span className="text-[13px] text-gray-600">Hometown</span>
            </li>
          </ul>
        </div>

        <p className="flex flex-col">
          <strong>Interests:&nbsp;</strong>
          <ul className="list-disc list-inside my-2">
            <li>Health & Fitness</li>
            <li>Usability & Ergonomics</li>
            <li>PC & Console Gaming</li>
            <li>Arts & Film</li>
            <li>Food & Cooking</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Introduction;
