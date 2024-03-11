

const ServiceCard = ({service}) => {
    // console.log(service)
    const {_id, img, title,description,price} = service;
  return (
    <div>
      <div>
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex">
          <p className="text-red-500 text-xl">price:${price}</p>
          <a className="btn-circle ml-10">❯</a>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ServiceCard;
