import { FaCoffee } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-16 px-6 flex flex-col md:flex-row items-center justify-around gap-10 font-poppins">

      {/* About Section */}
      <div className="max-w-lg text-center md:text-left animate__animated animate__fadeInLeft">
        <h2 className=" text-2xl lg:text-4xl font-extrabold text-purple-700 mb-6 leading-tight drop-shadow-md">
          🚀 Welcome to JobSphere
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          <span className="font-semibold text-purple-800">JobSphere</span> is your smart gateway to jobs that matter! Whether you’re looking for <span className="text-indigo-600 font-semibold">Govt Jobs</span>, <span className="text-pink-600 font-semibold">Private Roles</span>, or <span className="text-green-600 font-semibold">Self Employment</span>, we have everything in one place — easy, clean, and reliable.
        </p>
        <p className="mt-4 text-gray-700 italic">
          "Designed to empower job seekers, built with ❤️ by a developer who understands your struggle."
        </p>
      </div>

      {/* Coffee Section */}
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center animate__animated animate__fadeInRight hover:shadow-2xl transition-shadow duration-500 border border-purple-200">
        <FaCoffee className="mx-auto text-6xl text-amber-500 animate-bounce mb-4" />
        <h3 className="text-3xl font-bold text-purple-700 mb-2">Love This Platform?</h3>
        <p className="text-gray-600 mb-4">
          Fuel this project by buying me a coffee! Every cup powers new features ☕💻
        </p>
        <a
          href="https://www.buymeacoffee.com/rahulxyz" //////////////////i will change this link after createing buy me a coffee account
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
        >
          Buy Me a Coffee
        </a>
      </div>
    </div>
  );
};

export default About;
