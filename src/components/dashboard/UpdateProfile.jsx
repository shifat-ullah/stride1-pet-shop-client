import { useLoaderData } from "react-router-dom";


const UpdateProfile = () => {

    const updatedUser= useLoaderData();
    console.log(updatedUser)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const number = form.number.value;
       

            const userUpdateInfo={
                name,
                email: updatedUser?.email,
                age,
                number,
                

            }
           fetch(`http://localhost:5000/user/${updatedUser.email}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userUpdateInfo)
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data)
           })
    }
    return (
        <form onSubmit={handleSubmit}  className="max-w-md mt-20 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    defaultValue={updatedUser.name}
                    placeholder="Enter name"
                    name="name"
                    required
                />
            </div>

            {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    Image URL
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="file"
                    placeholder="Enter image URL"
                    name="image"
                    required
                />
            </div> */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Email"
                    placeholder="Enter Email"
                    name="Email"
                    disabled
                    defaultValue={updatedUser.email}
                    required
                ></input>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Age
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Age"
                    type="number"
                    placeholder="Enter Age"
                    name="age"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Number"
                    type="number"
                    placeholder="Enter Phone Number"
                    name="number"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UpdateProfile;