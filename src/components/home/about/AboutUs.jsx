

const AboutUs = () => {
    return (
      <div className="flex flex-col p-6 mt-12 md:flex-row items-center justify-center min-h-screen bg-gray-100">
        <div className="md:w-1/2 p-4">
          <img src="https://i.ibb.co/hBjqTmF/about-img.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-justify mb-6">
          anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
          </p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">
            READ MORE
          </button>
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  