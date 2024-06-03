import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageAllfeature = () => {

    const loadedData=useLoaderData();
    const [pets, setPets]=useState(loadedData)
    
console.log(loadedData)
    const handleDelete=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

            fetch(`http://localhost:5000/pets/${id}`,{
                method:"DELETE"
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    const remaining = pets.filter(pet=> pet._id !== id)
                    setPets(remaining)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
               
            })
            }
          });
       
console.log({id})

    }
    return (
        <div className="overflow-x-auto">
            <h1>pet length : {pets.length}</h1>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, index) => (
              <tr
                key={index}
                className="transition duration-500 ease-in-out transform hover:bg-yellow-100 hover:scale-105"
              >
                <td className="py-2 px-4 border">
                  <img src={pet.image} alt={pet.title} className="w-20 h-20 object-cover rounded-full mx-auto" />
                </td>
                <td className="py-2 px-4 border">{pet.title}</td>
                <td className="py-2 px-4 border">{pet.category}</td>
                <td className="py-2 px-4 border">${pet.price}</td>
                <td className="py-2 px-4 border text-center">
                  <button
                    className="text-blue-500 hover:text-blue-700 mx-2"
                    // onClick={() => onEdit(index)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 mx-2"
                    // onClick={() => onDelete(index)}
                    onClick={()=>handleDelete(pet._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
    };
    

export default ManageAllfeature;