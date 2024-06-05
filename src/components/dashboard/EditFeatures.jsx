
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";


const EditFeatures = () => {

    const token = localStorage.getItem("token")
    const updatePets = useLoaderData()
    const navigate = useNavigate();
    const location = useLocation()

    const from = location?.state?.from.pathname || '/dashboard/manageFeature'

    const handleUpdatePet = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const image = form.image.value;
        const petsData = {
            title,
            price,
            category,
            description,
            image
        };

        fetch(`http://localhost:5000/pets/${updatePets._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`

            },
            body: JSON.stringify(petsData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully updated data')
                navigate(from, { replace: true })
            })
    };
    return (
        <div>
            <form onSubmit={handleUpdatePet} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        defaultValue={updatePets.title}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        defaultValue={updatePets.category}
                        name="category"
                        required
                    >
                        <option value="">Select category</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Fish">Fish</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="url"
                        defaultValue={updatePets.image}
                        placeholder="Enter image URL"
                        name="image"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        defaultValue={updatePets.description}
                        placeholder="Enter description"
                        name="description"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        defaultValue={updatePets.price}
                        placeholder="Enter price"
                        name="price"
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
        </div>
    );
};

export default EditFeatures;