import { useLoaderData } from "react-router-dom";


const PetDetails = () => {

    const loadedData =useLoaderData();
    console.log(loadedData)
    return (
        <div className="p-12 pt-28 lg:w-[700px] max-w-screen-sm">
            <div className="flex justify-between">
            <h1 className=" font-bold text-2xl">{loadedData.title}</h1>
            <p>Price {loadedData.price}</p>
            </div>
            <img src={loadedData.image} alt="" />

            
        </div>
    );
};

export default PetDetails;