import { useAuth0 } from '@auth0/auth0-react';
import PodcastTile from './PodcastTile';

const Navbar = () => {
  const { logout } = useAuth0();

  return (
    <nav className="bg-customTeal text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-4xl font-bold">GenEarth</div>
        <div className="flex space-x-6">
          <a href="/" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Home
          </a>
          <a href="/about" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            About Us
          </a>
          <button
            className="bg-lightGray text-customTeal px-5 py-2 rounded transition duration-300 text-lg font-semibold shadow-md"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

const Podcasts = () => {
    const podcasts = [
        { title: "Bengaluru has ZERO water | Bengaluru Water Crisis Explained | Abhi and Niyu", url: "https://youtu.be/-gou87q9BfE?si=5BYdkvEKe-JhwPjI", thumbnail: "/bang.jpg" },
        { title: "Solving The Global Water Crisis in 7 Minutes | Hamza Farrukh | TEDxNorthAdams", url: "https://youtu.be/MnTgx11eQ74?si=D6Ozc-74leNP_h6y", thumbnail: "/2_TEDX.jpg" },
        { title: "Our drinking water - Is the world drying up? | DW Documentary", url: "https://youtu.be/t6sg2C-jqw?si=XPBHeeIx2euq8Xf", thumbnail: "/3_DW_Docu.jpg" },
        { title: "Water Changes Everything | charity: water", url: "https://youtu.be/BCHhwxvQqxg?si=AAXmZk0BcDx_2R7a", thumbnail: "/4_charity_water.jpg" },
        { title: "Delhi has ZERO water | Delhi water crisis explained | Abhi and Niyu", url: "https://youtu.be/z-jRyuQ5dmo?si=49NW9w4lrRuaTq-G", thumbnail: "/5_IndiasWaterProblem.jpg" },
        { title: "Water Crisis in India: How can we solve India's Water Problem", url: "https://youtu.be/qQ1TcQQ-wig?si=KvqRBIrO0QBt-t6e", thumbnail: "/6_shushant_pradhan.jpg" },
        { title: "Managing Water Resource Problems | Dr.Divas Bahadur Basnyat | Sushant Pradhan Podcast", url: "https://youtu.be/TXjd9EGRfcg?si=u0_QPvPtCcfF0Jou", thumbnail: "/7_Bengaluru_PalkiSharma.jpg" },
        { title: "India's Bengaluru Faces Water Crisis; Viral Post Reveals Grim Details | Vantage with Palki Sharma", url: "https://youtu.be/ADflYCs1UwQ?si=8ecTWZh7cqwJTvO8", thumbnail: "/8_himalaya_water_crisis.jpg" },
        { title: "Water crisis in the Himalayas: How climate change is affecting 1.5b people | Green Pulse podcast", url: "https://youtu.be/l8qYTBKByMw?si=Vr4gGo2j1BpBnGWe", thumbnail: "/9_Delhi_ANN.jpg" }
    ];

  return (
    <div className="min-h-screen flex flex-col bg-lightGray">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-tealBlue">Podcasts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <PodcastTile key={index} {...podcast} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;