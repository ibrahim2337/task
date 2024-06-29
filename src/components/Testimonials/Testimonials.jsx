/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/img/IMG_0122-01.jpeg";
import star1 from "../../assets/star/star (1).png";
import star2 from "../../assets/star/rating (1).png";
import flag from "../../assets/flag/e6243aac-d6ba-42b3-9d87-19a26f49db5e.jpg";
import education from "../../assets/icons/1.png";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-slate-800 ">
        <div className="grid lg:grid-cols-2 lg:relative">
          <div className="lg:px-28 px-5 py-16">
            <div>
              <h1 className="text-white">TESTIMONIALS</h1>
              <h3 className="text-4xl text-white">
                About Our <span className="font-bold">Customer Say</span>
              </h3>
            </div>
            <div>
              <div className="flex lg:gap-10 gap-4 mt-10">
                <div>
                  <img src={img1} alt="" className="w-24 h-24 rounded-full" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-white font-bold text-xl">
                    Md Ibrahim Khalilullah
                  </h2>
                  <h4 className="text-white">Bangladesh</h4>
                </div>
              </div>
              <div>
                <h1 className="text-white text-justify mt-5 text-xl">
                  With the help of Hashigo, I was able to find a job that I was
                  looking forward to joining. I didn't know all the things which
                  were required to do. Hashigo helped me to do those
                  accordingly. I am delighted that I had my supports from them.
                </h1>

                <div className="flex gap-2 mt-5">
                  <img src={star1} alt="" className="w-5" />
                  <img src={star1} alt="" className="w-5" />
                  <img src={star1} alt="" className="w-5" />
                  <img src={star1} alt="" className="w-5" />
                  <img src={star2} alt="" className="w-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:relative">
            <div className="lg:absolute top-28 ">
              <img
                src={flag}
                alt=""
                className="h-[528px] w-full  rounded-l-lg"
              />
            </div>
            <div className="lg:absolute top-32 rounded-lg left-5 bg-blue-700 py-5 px-5 w-72">
              <div className="flex gap-5 justify-center items-center ">
                <img src={education} alt="" className="w-16" />
                <h1 className="text-white font-bold text-lg">
                  Join students over 1000+ like you
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
