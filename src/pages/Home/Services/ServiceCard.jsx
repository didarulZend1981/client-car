import { Link } from "react-router-dom";


const ServiceCard = ({serviceCard}) => {
  const {_id,title,img,price}=serviceCard;

  return (
    <div className="card w-100 bg-base-100 shadow-xl">
  <figure className="px-5 pt-5">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl text-orange-700">price:{price}</p>
    <div className="card-actions">
      <Link to={`../book/${_id}`}>
        <button className="btn btn-primary">Buy Now</button>
      </Link>
     
    </div>
  </div>
</div>
  );
};

export default ServiceCard;