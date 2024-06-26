import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const Profile = () => {
    const { user } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch(`https://stride1-pet-shop-server.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, [user])
    console.log(userInfo)
    return (
        <div className="flex pt-32 p-10 gap-10">
            <img className="rounded-full w-[300px] h-[300px] " src={userInfo.photo} alt="" />
            <div className=" ">
                <h1 className="text-4xl font-bold">{userInfo.name}</h1>
                <div className=" flex gap-6">
                    <Link to={`/updateProfile/${userInfo._id}`}>
                        <button

                            className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        >
                            <FaEdit className="mr-2" />
                            Edit
                        </button>
                    </Link>
                    <Link to={`/update-pass`}>
                        <button

                            className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        >
                            <FaEdit className="mr-2" />
                            Update password
                        </button>
                    </Link>
                </div>
                <p className="text-2xl mt-5 font-semibold">{userInfo.email}</p>
                <p className="text-2xl mt-5 font-semibold">AGE : {userInfo.age}</p>
                <p className="text-2xl mt-5 font-semibold">Phone number : {userInfo.number}</p>
            </div>
        </div>

    );
};

export default Profile;