import { Link } from "react-router-dom";
import { passports } from "../../data/passports";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function PassportGallery() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6">Explore the world of passports</h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-5xl"
      >
        {passports.map((p) => (
          <SwiperSlide
            key={p.id}
            className="w-60 h-80 flex items-center justify-center"
          >
            <Link to={`/passport/${p.id}`}>
              <img
                src={p.image}
                alt={p.country}
                className="rounded-xl shadow-lg"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <input
        type="text"
        placeholder="Search by country..."
        className="mt-6 px-4 py-2 rounded-xl text-black"
      />
    </div>
  );
}
