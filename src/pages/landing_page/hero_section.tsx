import LinkButton from "../../components/button";
import OrbitingCircle from "./orbit/orbiting_circle";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-[0px] pl-0 pt-12 md:flex-row md:pl-6 md:pt-6">

      <div className="px-6 pt-16 text-black sm:w-full md:w-[45%] md:px-12">
        <h1 className="mb-12 text-[30px] font-semibold leading-10 text-black md:text-4xl">
          We Build Intelligent Digital Experiences — Engineering the Future with
          AI.
        </h1>
        <p className="my-6 text-[16px] text-neutral-500">
          AI-powered apps, seamless user experiences, and scalable cloud
          solutions—from concept to launch and beyond.{" "}
        </p>

        <span className="mt-16 w-full">
          <LinkButton to="/get_quote">Get a Quote</LinkButton>
        </span>
      </div>
      <div className="mx-auto mt-4 h-[50vh] w-10/12 rounded-xl md:h-[70vh] md:w-[50%]">
        {/* <Carousel /> */}
        <OrbitingCircle />
      </div>
    </div>
  );
};

export default HeroSection;
