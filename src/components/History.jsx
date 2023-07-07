import aboutImage1 from "../assets/about_image1.jpg";
import aboutImage2 from "../assets/about_image2.jpg";
import RoadMap from "./RoadMap";

const History = () => {
  return (
    <div id="history" className="h-full  container_fluid">
      <div className="grid mt-20 place-items-center pb-10">
        <h2 className="text-4xl font-semibold uppercase text-clrHeading sm:text-5xl md:text-5xl flex items-center">History</h2>
        <hr className="w-20 h-2 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2" />
        <p className="mt-10">Learn More About Ideal Science and Technology Aiming Research Council</p>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-20 ">
        <div className=" order-2 lg:order-1">
          <img className="" src={aboutImage1} alt="" />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-xl font-semibold sm:text-2xl lg:text-4xl">Who we are?</h2>
          <p className="mt-10 sm:text-xl/relaxed">
          Ideal Science and Technology Aiming Research Council the most promising and distinguished co-curricular activities club of Ideal School And College.
          </p>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
        <div className="order-2 lg:order-1">
        <h2 className="text-xl font-semibold sm:text-2xl lg:text-4xl">About ISTARC</h2>
          <p className="mt-10 sm:text-xl/relaxed">
          Ideal Science and technology Aiming Research Council widely known as "ISTARC" is one of the most promising versatile and active club in Ideal School and college. Since its inception 2001. It has been conducting various programs to promote science based thinking among the students.
          </p>
        </div>
        <img className="order-1 lg:order-2" src={aboutImage2} alt="" />
      </div>
      {/*  */}
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-20 ">
        <div className=" order-2 lg:order-1">
          <img className="" src={aboutImage1} alt="" />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-xl font-semibold sm:text-2xl lg:text-4xl">What we do?</h2>
          <p className="mt-10 sm:text-xl/relaxed">
          ISTARC gives the necessary guidelines in spreading scientific awarness. Science with its own engima is expected to enlighten the heart of the students.
          </p>
        </div>
      </div>
      {/*  */}
      <div>
        <p className="sm:text-xl/relaxed mt-5 lg:mt-0">
        </p>
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <div className="items-center  border-[6px] rounded-full border-emerald-200 text-center lg:w-44 lg:h-44   relative md:w-44 md:h-44 w-36 h-36 flex flex-col lg:mt-0 mt-10 justify-center mx-auto">
            <div className="w-full h-full rounded-full border-4 border-emerald-500">
              <div className="w-full h-full rounded-full flex flex-col justify-center border-[6px] border-emerald-200">
                <p className="mt-4 sm:mt-4 text-black font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg">20+</p>
                <p className="z-20 text-gray-500 mt-0 font-medium text-[14px] lg:text-lg">executive</p>
              </div>
            </div>
          </div>
          <div
            className="items-center  border-[6px] rounded-full border-orange-200 text-center lg:w-44 lg:h-44   relative md:w-44 md:h-44 w-36 h-36 flex flex-col lg:mt-0 mt-10 justify-center mx-auto"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-full h-full rounded-full border-4 border-orange-500">
              <div className="w-full h-full rounded-full flex flex-col justify-center border-[6px] border-orange-200">
                <p className="mt-4 sm:mt-4 text-black font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg">500+</p>
                <p className="z-20 text-gray-500 mt-0 font-medium text-[14px] lg:text-lg">members & volunteers</p>
              </div>
            </div>
          </div>
          <div
            className="items-center  border-[6px] rounded-full border-indigo-200 text-center lg:w-44 lg:h-44   relative md:w-44 md:h-44 w-36 h-36 flex flex-col lg:mt-0 mt-10 justify-center mx-auto"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-full h-full rounded-full border-4 border-indigo-500">
              <div className="w-full h-full rounded-full flex flex-col justify-center border-[6px] border-indigo-200">
                <p className="mt-4 sm:mt-4 text-black font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg">30+</p>
                <p className="z-20 text-gray-500 mt-0 font-medium text-[14px] lg:text-lg">events</p>
              </div>
            </div>
          </div>
          <div
            className="items-center  border-[6px] rounded-full border-indigo-200 text-center lg:w-44 lg:h-44   relative md:w-44 md:h-44 w-36 h-36 flex flex-col lg:mt-0 mt-10 justify-center mx-auto"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-full h-full rounded-full border-4 border-green-500">
              <div className="w-full h-full rounded-full flex flex-col justify-center border-[6px] border-indigo-200">
                <p className="mt-4 sm:mt-4 text-black font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg">20+</p>
                <p className="z-20 text-gray-500 mt-0 font-medium text-[14px] lg:text-lg">achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/* Road map */}
      <div className="mt-14">
        <div className="text-center">
          <p className="text-green-500">ROADMAP</p>
          <h2 className="text-4xl tracking-tight font-semibold text-clrHeading sm:text-5xl md:text-5xl">Our Journey</h2>
        </div>

        <RoadMap />
      </div>
    </div>
  );
};

export default History;
