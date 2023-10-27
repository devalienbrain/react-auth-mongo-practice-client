import { useLoaderData, useParams } from "react-router-dom";
import BrandedCarCard from "./BrandedCarCard";

const BrandedCars = () => {
  const brandedCars = useLoaderData();
  const { name } = useParams();
  // console.log(brandedCars, name);
  const filteredBrandedCars = brandedCars.filter((brandedCar) => {
    // console.log(brandedCar.brand);
    return name === brandedCar.brand;
  });
  // console.log(filteredBrandedCars);
  return (
    <>
      {filteredBrandedCars.length === 0 ? (
        <div className="container mx-auto flex justify-center items-center min-h-screen bg-blue-300 text-white font-bold text-3xl my-10">
          <div>
            <p>
              Sorry! No Data Available For Brand:{" "}
              <span className="text-blue-800">{name} </span>!
            </p>
            <p>Please Visit Later.</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center my-10  container mx-auto">
            <h3 className="text-4xl font-black text-blue-950">
              Brand: {name} Cars
            </h3>
            <div className="py-9 grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredBrandedCars.map((brandedCar) => (
                <BrandedCarCard
                  key={brandedCar._id}
                  brandedCar={brandedCar}
                ></BrandedCarCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandedCars;
