import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAxiosPublic from './../hooks/useAxiosPublic';
import { imgUrl } from './../../helper/imgUrl';

export default function PodcastCarousel() {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(`/get-podcast`);
        if (res.status === 200) {
          setTestimonials(res.data?.data?.data || []);
        }
      } catch (error) {
        console.error("Error fetching podcasts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= testimonials.length - (itemsPerPage - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - itemsPerPage : prev - 1
    );
  };

  if (loading && showLoader) {
    return (
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          >
            <Loader2 className="animate-spin text-[#403730] w-10 h-10" />
            <h1 className="text-2xl font-semibold text-[#403730]">
              Loading podcast...
            </h1>
            <p className="text-gray-500 text-sm max-w-xs">
              Please wait while we fetch the data
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block relative mt-12 max-w-[1432px] px-4 lg:px-16 mx-auto z-50">
        <div className="flex overflow-hidden gap-6">
          {testimonials
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((testimonial, index) => (
              <Link to="/podcast" key={testimonial.id}>
                <div
                  className={`relative text-white rounded-lg transition-all duration-500 ${index === currentIndex ? "translate-y-1/5 z-50" : ""
                    }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-2xl"></div>
                    <img
                      src={`${imgUrl}/${testimonial.thumbnail}`}
                      alt={testimonial.podcast_title}
                      className="rounded-3xl object-cover w-[363px] h-[483px]"
                    />
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-[90%]">
                    <p className="italic text-xl font-medium leading-9">
                      "{testimonial.description.slice(0, 25)}..."
                    </p>
                    <p className="mt-2 font-bold">
                      - {testimonial.host_title}, {testimonial.id}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-[#403730] hover:text-white p-3 rounded-full shadow transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-[#403730] hover:text-white p-3 rounded-full shadow transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4">
          {Array.from({
            length: Math.ceil(testimonials.length / itemsPerPage),
          }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerPage) === index
                ? "bg-white scale-110"
                : "bg-gray-500"
                }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden block my-6 px-4">
        {testimonials.map((testimonial, i) => (
          <Link to="/podcast" key={i}>
            <div className="relative text-white rounded-lg transition-all duration-500 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-2xl"></div>
                <img
                  src={`${imgUrl}/${testimonial.thumbnail}`}
                  alt={testimonial.podcast_title}
                  className="rounded-3xl object-cover h-[400px] w-full"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-[90%]">
                <p className="italic text-xl font-medium leading-9">
                  "{testimonial.description.slice(0, 25)}..."
                </p>
                <p className="mt-2 font-bold">
                  - {testimonial.host_title}, {testimonial.id}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
