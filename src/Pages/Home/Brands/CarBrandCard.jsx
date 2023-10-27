import { Link } from "react-router-dom";

const CarBrandCard = ({ carBrandData }) => {
  // console.log(carBrandData);

  const { name, image } = carBrandData || {};

  return (
    <Link to={`/brandedCars/${name}`}>
      <div className="rounded-lg flex flex-col justify-center items-center space-y-5 border border-blue-50 drop-shadow-2xl p-5">
        <img
          className="rounded-full w-32 h-32 mx-auto"
          src={image}
          alt="Alternative Image"
        />
        <div className="p-4 text-center md:text-left">
          <h3 className="text-2xl text-center font-black mb-3">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CarBrandCard;
