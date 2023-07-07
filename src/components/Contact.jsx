const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-gray-50 py-16 mt-16">
        <div className="md:container_fluid">
          <div className="grid place-items-center">
            <h2 className="text-4xl tracking-tight font-semibold uppercase text-clrHeading sm:text-5xl md:text-5xl flex items-center">Contact Us</h2>
            <hr className="w-20 h-2 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5  mt-16  bg-gray-900 rounded-2xl z-20">
            <div className="col-span-2 z-20 md:px-4 md:py-20 px-2 py-8 lg:w-9/12 md:w-full w-11/12 mx-auto ">
              <div>
                <h3 id="contact_h" className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 gradient-text">
                  Send Messages
                </h3>
                <hr id="contact_hr" className="w-32 h-2 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-3" />
              </div>
              <p id="contact_text" className="mt-4 sm:mt-4 md:mt-16 text-lg font-normal text-gray-300">
                Send me a feedback about my website and projects, for any collaboration, feel free to reach out to me, I would be happy to get
                connected.
                <br />
                Send message via this form or you can mail me at
                <a href="mailto:accbnccplatoon@accbncc.com" className=" text-blue-500 ml-2 ">
                info.istarc@gmail.com
                </a>
              </p>
              <div id="contact_btn" className="mt-16 ">
                <div className="grid grid-cols-3 ">
                  <a
                    name="Send Email"
                    title="Send Email"
                    href="mailto:accbnccplatoon@accbncc.com"
                    className="h-14 w-14 text-lg grid place-items-center bg-blue-500 text-gray-50 rounded-sm"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path>
                    </svg>
                  </a>
                  <a
                    name="Call Phone"
                    title="Call"
                    href="tel:01754042898"
                    className="h-14 w-14 text-lg grid place-items-center bg-blue-500 text-gray-50 rounded-sm"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                    </svg>
                  </a>
                  <a
                    name="LinkedIn"
                    title="LinkedIn"
                    href="#"
                    target="_blank"
                    className="h-14 w-14 text-lg grid place-items-center bg-blue-500 text-gray-50 rounded-sm"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-t-3xl md:rounded-2xl  lg:border-gray-900">
              <form className="mt-14 px-3 pb-5 md:px-20 md:py-20" onSubmit={(e) => e.preventDefault()}>
                <div className="relative contact_input">
                  <label htmlFor="name" className="text-gray-800 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value=""
                    id="name"
                    name="name"
                    required
                    className="border text-gray-700 mt-4 autofill-transparent peer bg-gray-50 focus-within:border-emerald-500 transition-all duration-500 w-full h-12 active:outline-0 outline-0 px-2 focus:outline-0"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="relative mt-8 contact_input">
                  <label htmlFor="email" className="text-gray-800 font-medium">
                    Your Email
                  </label>
                  <input
                    type="text"
                    value=""
                    id="email"
                    name="email"
                    required
                    className="border text-gray-700 mt-4 autofill-transparent peer bg-gray-50 focus-within:border-emerald-500 transition-all duration-500 w-full h-12 active:outline-0 outline-0 px-2 focus:outline-0"
                    placeholder="Enter your email"
                  />
                </div>
                <div className=" mt-8 relative contact_input">
                  <label htmlFor="message" className="text-gray-800 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Hi! There"
                    className="border w-full active:outline-0 outline-0 text-gray-700 mt-4 autofill-transparent peer bg-gray-50 p-2 focus-within:border-emerald-500 transition-all resize-none h-28"
                  ></textarea>
                </div>
                <p className="text-base text-clrText sm:text-lg md:text-lg mt-4 sm:mt-4 text-rose-500"></p>
                <div className="w-[152px] ml-auto">
                  <button
                    type="submit"
                    className="flex items-center justify-center font-medium transition  hover:transform hover:-translate-y-1 active:translate-y-1 bg-indigo-500 text-white py-3 px-10 rounded-sm text-lg"
                  >
                    Send{" "}
                    <span className="ml-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
