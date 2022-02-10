import "@splidejs/splide/dist/css/splide.min.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../assets/images/sliderimg.png";
import BackImgTop from "../../assets/images/Vector.png";
import BackImgBottom from "../../assets/images/Vector02.png";

export const OurProject = () => {
  const SliderImgClass =
    "flex items-center w-[200px] h-[120px] bg-red-600 m-auto";
  return (
    <div className="flex items-center relative h-[450px]">
      <img
        className="absolute top-0 w-screen h-[100px]"
        src={BackImgTop}
        alt="IntroBack"
      />
      <p className="absolute top-8 left-8 font-bold text-3xl text-blue-700">
        Our Projects
      </p>
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval="2000"
        autoPlayDirection="rtl"
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
        className="items-center justify-center"
      >
        <img className={SliderImgClass} src={image1} alt="img1" />
        <img className={SliderImgClass} src={image1} alt="img1" />
        <img className={SliderImgClass} src={image1} alt="img1" />
        <img className={SliderImgClass} src={image1} alt="img1" />
        <img className={SliderImgClass} src={image1} alt="img1" />
        <img className={SliderImgClass} src={image1} alt="img1" />
      </AliceCarousel>
      <img
        className="absolute w-screen h-[100px] bottom-0"
        src={BackImgBottom}
        alt="IntroBack"
      />
    </div>
  );
};
