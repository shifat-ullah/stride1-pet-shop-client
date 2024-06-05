import { Link } from 'react-router-dom';
import banner from '../../../assets/pet shop/slider-bg.jpg'
const Benner = () => {
  //     return (
  //         <div className="carousel w-full">
  //             <div id="slide1" className="carousel-item relative w-full">
  //                 <img src="https://img.freepik.com/free-photo/cute-puppy-group-sitting-looking-camera-indoors-generated-by-artificial-intelligence_188544-113182.jpg?t=st=1717397495~exp=1717401095~hmac=cbc726cb5392ec2a9723fefda6b89ce5ace2dcc54b4da3d0619bce1e0fcd9f94&w=740" className="w-full max-h-screen" />
  //                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  //                     <a href="#slide4" className="btn btn-circle">❮</a>
  //                     <a href="#slide2" className="btn btn-circle">❯</a>
  //                 </div>
  //             </div>
  //             <div id="slide2" className="carousel-item relative w-full">
  //                 <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  //                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  //                     <a href="#slide1" className="btn btn-circle">❮</a>
  //                     <a href="#slide3" className="btn btn-circle">❯</a>
  //                 </div>
  //             </div>
  //         </div>
  //     );
  // };

  return (
    <div className="relative  flex items-center justify-center   bg-gray-50">
      <div className="relative w-full max-h-screen">
        <img src={banner} alt="Pet Shop" className="w-full max-h-screen object-cover" />
        <div className="absolute mt-5 inset-0 lg:pl-14 flex flex-col justify-center items-start p-10 bg-opacity-50">
          <h1 className="text-4xl font-bold text-black mb-4">WELCOME TO OUR PET SHOP</h1>
          <p className=" text-gray-700 text-justify lg:w-[500px] mb-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          </p>
          <div className="flex">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 hover:bg-green-700">READ MORE</button>
            <Link to='/contact'>
              <button className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200">CONTACT US</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benner;