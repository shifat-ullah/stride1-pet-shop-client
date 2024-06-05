import { useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageAllfeature = () => {

  const token = localStorage.getItem("token")

  const loadedData = useLoaderData();
  const [pets, setPets] = useState(loadedData)
  const [searchText, setSearchText] = useState(""); 



  console.log(loadedData)
  const handleDelete = (id) => {

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

        fetch(`https://stride1-pet-shop-server.vercel.app/pets/${id}`, {
          method: "DELETE",
          headers:{
            'content-type':'application/json',
            authorization:`Bearer ${token}`

        },
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remaining = pets.filter(pet => pet._id !== id)
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

    console.log({ id })

  }


  // search

  const handleSearch=()=>{
    fetch(`https://stride1-pet-shop-server.vercel.app/pets/${searchText}`)
    .then(res=> res.json())
    .then(data=>{
      setPets(data)
    })
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-4xl mb-3 mx-auto font-bold w-[600px] italic rounded text-center">------Manage all Features-----</h1>

      {/* search option */}

      <div className="flex items-center justify-center mt-10 mb-9 bg-gray-100">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          onChange={(e)=> setSearchText(e.target.value)}
          placeholder="Search..."
          className="pl-4 pr-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none flex items-center space-x-2">
          <FaSearch />
          <span>Search</span>
        </button>
      </div>
    </div>




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
                <Link to={`/dashboard/editFeatures/${pet._id}`}>
                  <button
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  // onClick={() => onEdit(index)}
                  >
                    <FaEdit />
                  </button>
                </Link>
                <button
                  className="text-red-500 hover:text-red-700 mx-2"
                  // onClick={() => onDelete(index)}
                  onClick={() => handleDelete(pet._id)}
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