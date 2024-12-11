import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link to={item?.url}>
      <div className="transform hover:scale-105 h-full flex flex-col bg-white border border-transparent rounded-3xl p-8 text-inherit cursor-pointer shadow-md items-start transition-all duration-300 ease-in-out hover:shadow-lg hover:border-gray-200">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg text-2xl mb-4">
          <img
            src={item?.image}
            alt="Image"
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-xl font-bold mb-4">{item?.title}</h3>
        <p className="text-sm text-gray-600">{item?.description}</p>
      </div>
    </Link>
  );
}
