export function ContactSecondSection() {
  return (
    <div className="px-[10%] flex flex-col my-20 gap-12 lg:flex-row">
      <div className="lg:w-1/2">
        <h2 className="font-bold text-blue-950 text-2xl">Informations</h2>
        <p className="my-3 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In modi quae
          et perferendis.
        </p>
        <div className="flex gap-2 mt-4.5">
          <span className="bg-blue-700 h-6 w-6 rounded-full"></span>
          <span className="bg-pink-500 h-6 w-6 rounded-full"></span>
          <span className="bg-green-400 h-6 w-6 rounded-full"></span>
        </div>
      </div>
      <div className="lg:w-1/2">
        <h2 className="font-bold text-2xl text-blue-950">Contacts</h2>
        <div className="mt-6">
          <p className="font-bold text-xl mb-3 text-gray-400">
            <span className="text-blue-950 font-bold text-xl">Email: </span>
            dadinaut@gmail.com
          </p>
          <p className="font-bold text-xl text-gray-400">
            <span className="text-blue-950 font-bold text-xl">Tel:</span> +229
            0196550124
          </p>
        </div>
      </div>
    </div>
  );
}
