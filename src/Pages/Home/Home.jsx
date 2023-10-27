import { useLoaderData } from "react-router-dom";
import CarBrands from "./Brands/CarBrands";

const Home = () => {
  const carBrandsData = useLoaderData();
  return (
    <div className="container mx-auto">
      <div>
        <CarBrands carBrandsData={carBrandsData} />
      </div>
    </div>
  );
};

export default Home;
