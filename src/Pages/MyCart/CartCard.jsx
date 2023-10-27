import Swal from "sweetalert2";

const CartCard = ({ cartItem, cartItems, setCartItems }) => {
  // console.log(cartItem);
  const { _id, image, name, type, brand, price } = cartItem;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Want to delete, sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = cartItems.filter(
                (cartItem) => cartItem._id !== _id
              );
              setCartItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row p-3 my-5 border border-green-900 rounded-md gap-8">
      <div className="flex-1">
        <img className="w-full h-72 rounded-md p-5" src={image} alt="Loading" />
      </div>
      <div className="flex-1 text-blue-500 font-semibold text-lg">
        <div className="text-center md:text-left p-5">
          <p>{name}</p>
          <p>Brand: {brand}</p>
          <p>{type}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="p-5 text-center md:text-left">
          <button
            onClick={() => handleDelete(_id)}
            className="px-7 py-2 rounded-md drop-shadow-2xl bg-red-600 text-white text-sm hover:bg-red-500"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
