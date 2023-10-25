import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start space-y-11">
      <h2 className="text-4xl font-black ">Oops.. </h2>
      <h1 className="text-3xl text-red-700 font-bold">
        ERROR 404! Page Not Found.
      </h1>
      <Link
        to={"/"}
        className="px-5 py-2 border border-black text-sm font-semibold hover:bg-black hover:text-white rounded-md drop-shadow-2xl"
      >
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
