/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ShowFeature = ({pet}) => {
    const {image, title, category, description,_id, price}=pet;
    return (
        <div>
            <div className="card w-full max-w-sm bg-base-100 shadow-xl transform transition duration-500 hover:scale-105">
                <figure>
                    <img src={image} alt={title} className="object-cover h-48 w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{title}</h2>
                    <p className="text-sm text-gray-500">{category}</p>
                    <p className="text-gray-700">{description}</p>
                    <div className="card-actions justify-between mt-4">
                        <span className="text-xl font-bold text-gray-900">${price}</span>
                       <Link to={`/details/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFeature;