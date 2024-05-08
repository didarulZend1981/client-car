import { useLoaderData } from "react-router-dom";


const Checkout = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default Checkout;