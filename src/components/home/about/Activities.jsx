
const Activities = () => {
    return (
        <div>
            <div className="text-center mt-14 flex-col flex justify-center">
                
                <h1 className="text-4xl mb-3 mx-auto font-bold w-[450px] italic rounded text-center">------What We Do-----</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
               
            </div>

            <div className="grid px-6 items-center  gap-5  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   justify-between mt-12">
                <div className=" text-center flex flex-col justify-center items-center">
                    <img className=" bg-black w-[100px]" src="https://img.freepik.com/free-vector/adopt-pet-concept_23-2148533665.jpg?t=st=1717419017~exp=1717422617~hmac=84fb94c8c9d7c1bead8dd4d7db7921545fa7a4eb8e4572d7d935ea9b29f1337c&w=740" alt="" />
                    <div className="">
                        <h1 className="text-2xl font-bold mt-3 mb-2">PET ADOPTION</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>
                </div>

                <div className="text-center flex flex-col justify-center items-center">
                    <img className=" bg-black w-[100px]" src="https://img.freepik.com/free-vector/illustration-with-people-with-different-pets_23-2148404850.jpg?t=st=1717421504~exp=1717425104~hmac=115e1dd7de4542e71b4a1e7ec5ecce99ed7a81ff845d8dc471c108fa7ed4975c&w=740" alt="" />
                    <div className="">
                        <h1 className="text-2xl font-bold mt-3 mb-2">PET CARE</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>
                </div>

                <div className="text-center flex flex-col justify-center items-center">
                    <img className=" bg-black w-[100px]" src="https://img.freepik.com/free-vector/flat-design-people-with-pets_23-2148986576.jpg?t=st=1717421417~exp=1717425017~hmac=ea89af6b5e1183353f934b027be8eb3ee64e56ecefd03a76787c8241df965816&w=740" alt="" />
                    <div className="">
                        <h1 className="text-2xl font-bold mt-3 mb-2">PET TRAINING</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Activities;