import { useEffect, useState } from "react";
// import pets from "../../data/data";
import ShowFeature from "./ShowFeature";

const Feature = () => {

    const [pets, setPets]=useState([]);

    useEffect(()=>{
        fetch('https://stride1-pet-shop-server.vercel.app/pets')
        .then(res=>res.json())
        .then(data=>{
            setPets(data)
        })
    },[])

    console.log(pets)
    return (
        <div className="  pt-32 mb-16 lg:w-[1200px] mx-auto ">
            <h1 className="text-4xl mb-3 mx-auto font-bold w-[450px] italic rounded text-center">------Our Features-----</h1>

            <div className="grid mt-16 lg:ml-0 ml-12  mx-auto gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

                {
                    pets.map((pet, i) => <ShowFeature pet={pet} key={i}></ShowFeature>)
                }
            </div>
        </div>
    );
};

export default Feature;