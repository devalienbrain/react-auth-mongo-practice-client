import { Link } from "react-router-dom";

const BrandedCarCard = ({ brandedCar }) => {
  // console.log(brandedCar);
  const { image, name, brand, type, price, ratings, _id } = brandedCar || {};
  // console.log(_id);
  return (
    <div className="rounded-lg flex flex-col border border-blue-400 drop-shadow-2xl">
      <img
        className="rounded-t-lg w-full h-64 p-7"
        src={image}
        alt="Alternative Image"
      />
      <div className="p-4 text-center">
        <h3 className="text-base font-semibold text-blue-500 mb-3">
          Name: {name}
          <p> Brand Name: {brand}</p>
          <p> Type: {type}</p>
          <p> Price: $ {price}</p>
          <p> Rating: {ratings} / 5 </p>
        </h3>
      </div>
      <div className="p-4 text-center text-lg font-semibold">
        <Link to={`/details/${_id}`}>
          <button className="mr-3 px-7 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-lg drop-shadow-xl">
            Details
          </button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button className="ml-3 px-7 py-3 border border-blue-700 text-blue-700 hover:text-blue-900 rounded-lg drop-shadow-xl">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandedCarCard;
