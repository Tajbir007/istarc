import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/img3.jpg";

const About = () => {
  return (
    <div id="about" className="container_fluid">
      <div className="grid mt-20 place-items-center pb-10">
        <h2 className="text-4xl tracking-tight font-semibold uppercase text-clrHeading sm:text-5xl md:text-5xl flex items-center">About Us</h2>
        <hr className="w-20 h-2 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2" />
        <p className="mt-10">
        ‘Science in Creation, not Annihilation’ holding this noble motto, a senior teacher of Ideal School and College, Md. Motahar Hossain, inaugurated the flag of ISTARC.Being the first and only science club of Ideal School and College, ISTARC still stands as the most versatile one. The organisations recognition has glorified the institutions name and presented ISTARC in front of the whole world for its world class standard quality in arranging workshops & fests since 2008.
Renowned lecturers, educationalists, content creators and teachers all over Bangladesh recognises this club as the heart of Ideal School And College for its brilliant event arrangements. Thus, spreading the zeal of science among the members is the only goal ISTARC looks out for.
        </p>
      </div>
      {/* grid image */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* <!--Card 1--> */}
        <div className="rounded overflow-hidden shadow-custom hover:shadow-custom2 duration-300 transition-shadow cursor-pointer">
          <div className="px-2 lg:px-6 py-4">
          </div>
        </div>
        {/* <!--Card 2--> */}

        {/* <!--Card 3--> */}
      </div>
    </div>
  );
};

export default About;
