import React from "react";
import img1 from "../assets/executives/1.png";
import img2 from "../assets/executives/2.png";
import img3 from "../assets/executives/3.png";
import img4 from "../assets/executives/4.png";
import img5 from "../assets/executives/5.png";
import img6 from "../assets/executives/6.png";
import img7 from "../assets/executives/7.png";
import img8 from "../assets/executives/8.png";
import img9 from "../assets/executives/9.png";
import img10 from "../assets/executives/10.png";
import img11 from "../assets/executives/11.png";
import img12 from "../assets/executives/12.png";

const Executives = () => {
  const allImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
  ];

  return (
    <React.Fragment>
      <div id="executives" className="container_fluid">
        <div className="grid mt-20 place-items-center pb-10">
          <h2 className="text-4xl font-semibold uppercase text-clrHeading sm:text-5xl md:text-5xl flex items-center">Executives</h2>
          <hr className="w-20 h-2 border-none bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl mt-2 mb-2" />
          <div className="w-5/6 mx-auto lg:mx-0 lg:w-[500px] overflow-hidden shadow my-9">
            <div className="py-4">
              <p className="text-gray-700  text-[14px] lg:text-base">
                <b></b>
              </p>
            </div>
          </div>
        </div>

        {/* images here */}
        <h3 id="member" className="font-bold text-2xl lg:text-3xl lg:w-4/6 mb-6 lg:mb-10">
          The 12 Executive Members of Ideal Science and Technology Aiming Research Council
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((image) => (
            <div className="" key={image.id}>
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image.src}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Executives;
