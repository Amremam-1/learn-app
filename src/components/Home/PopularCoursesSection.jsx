import TitleSection from "./TitleSection"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { coursesData } from "../../data/homeData"
import { PiBookOpenTextLight } from "react-icons/pi"
import { IoMdStarOutline } from "react-icons/io"
import { Link } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa"
import Button from "../Ui/Button"

const PopularCoursesSection = () => {
  return (
    <div id="courses" className="py-20 bg-white px-2 sm:px-6 lg:px-8">
      <TitleSection
        className="text-start"
        label="Explore Programs"
        title="Our Popular Courses"
      />

      {/* Swiper Courses */}
      <div className="relative overflow-hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          pagination={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {coursesData.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-[#F6F6F8] rounded-2xl border border-borderCard overflow-hidden">
                <div className="h-[150px]">
                  <img src="" alt="" />
                </div>

                {/* Details courses */}

                <div className="p-6 space-y-[16px]">
                  <div className="flex items-center justify-between">
                    <p className="text-textMuted text-[12px] flex items-center gap-1">
                      <PiBookOpenTextLight />
                      {course.modules} Modules
                    </p>

                    <p className="text-secondary text-[12px] flex items-center gap-1">
                      <IoMdStarOutline />
                      {course.rating} {course.reviews}
                    </p>
                  </div>

                  <h1 className="font-bold text-lg text-textCo line-clamp-2 min-h-[56px]">
                    {course.title}
                  </h1>

                  {/* Person  */}
                  <div className="flex items-center gap-2">
                    <div className="w-[32px] h-[32px] bg-white rounded-full shadow">
                      <img src="" alt="" />
                    </div>
                    <p className="text-textMuted">{course.instructor}</p>
                  </div>

                  {/* Price */}

                  <div className="text-primary flex items-center justify-between">
                    <p className="font-bold text-lg">{course.price}</p>

                    <Link
                      to=""
                      className="text-sm font-medium flex items-center gap-1 hover:text-textCo  duration-300 ease-out"
                    >
                      Enroll Now <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          variant="three"
          className="flex items-center justify-center mt-10 mx-auto"
        >
          View All Courses
        </Button>
      </div>
    </div>
  )
}

export default PopularCoursesSection
