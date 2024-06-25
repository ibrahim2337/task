/* eslint-disable react/no-unescaped-entities */
import contactImg from "../../assets/contact/3.-Need-More-Info-Rotate-left.jpg";
const Contact = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl text-gray-800">Need More Info</h2>
        <h1 className="text-5xl font-bold pt-2">Feel Free to Contact</h1>
      </div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-20  ">
        <div className="flex flex-col justify-between">
          <img src={contactImg} alt="" />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
           
            <input
              id="name"
              type="text"
              placeholder="Your Name Here"
              className="w-full p-3 rounded border"
            />
          </div>
          <div>
            <input
              id="email"
              type=""
              placeholder="Your Email Here"
              className="w-full p-3 rounded border"
            />
          </div>
          <div>
            <input
              id="email"
              type=""
              placeholder="Your Phone Number Here"
              className="w-full p-3 rounded border"
            />
          </div>
          <div>

            <textarea
              id="message"
              rows="3"
              placeholder="Your Massage Here ..."
              className="w-full p-3 rounded border"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
