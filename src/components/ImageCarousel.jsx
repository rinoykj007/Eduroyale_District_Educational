import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          speed: 3000,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          speed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 2500,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          speed: 2000,
        },
      },
    ],
  };

  const imageHashes = [
    "3ce3f1fb0985436dbb2faf2017159a79",
    "c8314a80bbb3375ff27588e3ecce9432",
    "f5ed8545ffcb6d3668bad612381e87bc",
    "1fdcf2db8383570315c91dcdf804d9ed",
    "f9477c9952b2f29845b18873c844ee3f",
    "d9e70bc008cb5ae4b2f6132249a27e01",
    "9c5d825225116e38c5f22dc07f5b59da",
    "9e6f8ab38b6fda5fd6af1dd4c5da9f66",
    "83275f7fe549a68c1201fc3e9c32c46d",
    "8e92eeeab3f14c13b766bf548721e52c",
    "0358163b629b39bf02bdf2cd11d8a058",
    "67f88982903e56445ad967d7f55e76d9",
    "42807388ede8dc8c729b9431f737dfba",
    "420baa53266b884945112fb63c8ba048",
    "acc8ae86571ff0b7bfca4146a54e28a0",
    "a22dd0f76b223df57a72a16b963aa760",
    "6af0aa61208564fdc28722dc9ecab764",
    "4cbadae035de5f4b09251023318b4b2f",
    "9f1745efb1c9b6e00a828e70351d6696",
    "0ee66f30fde9882cfff2869da41a6070",
    "056d64bc3a2837ccb68b8f8e4ca37b2f",
    "9c4d17f624780f8d450c89a0ecde2720",
    "997e30ee94295dac3fb2158e77cc1e9b",
    "f6268fabc089e88fe896d00a0e348f79",
    "9fb283a49d84813f247be9a7d1408d7b",
    "0ab42d5bbd1f0a9826f5f3f2749f87a1",
    "0373d1333a7cc0608ce230e7a66ad8c2",
    "0953e474c8b0ae41b5d50f7365eb2bbe",
    "dfa79cce7d547d12c7f02d68f278241b",
    "3f5bc1a00da93a27ff1019cedcad169a",
    "618857b8b1afa1ccca5fcf6f9dbf6795",
    "4e34f4fd4db7695d1292dc5d4b82d71c",
    "82aee53f27b1ffdbb1c39af28c9269aa",
    "208b6a1b01f8f2f5df1a68caa960869e",
    "dd5f231e50d883192b24dbef463d074b",
    "e6f0323e792f19711225ec20040e3672",
    "ae58d9c5b58d1faf9c137dbb67d2d4d1",
    "b1b8dadad5bf52038739aa667b0491be",
    "b3d9af3ce643289c3a3093f20286f713",
    "011c755fd5618fbfe8a4326cd07dcd41",
    "873778d309e3d0f36ff6d3fee423b178",
    "99dd4fb9b75968b4b76abd96692a9e25",
    "6400d74f7205e940b5630221e7265622",
    "bff335fedf893875fad4f3e0055c7d7b",
    "a3016d7809819b9f3bba003a31679c2d",
  ];

  return (
    <div>
      <div className="w-full bg-white p-5 rounded-lg font-outfit tracking-tight text-3xl font-extrabold leading-snug text-center mb-8 shadow-md transition-all duration-300">
        <span className="bg-gradient-to-br from-amber-500 to-red-500 bg-clip-text text-transparent">
          Our Partner Universities
        </span>
      </div>

      <Slider {...settings}>
        {imageHashes.map((index) => (
          <div key={index} className="px-2">
            <img
              src={`https://www.eduroyale.com/images/university_logo/thumb${index}.jpg`}
              alt={`University logo ${index + 1}`}
              className="w-50 h-50 object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
