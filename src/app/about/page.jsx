import PackageButton from "../components/PackageButton/PackageButton";
import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection";

const AboutUs = () => {
  return (
    <section className=" w-full bg-gradient-to-b from-[#30B43C] to-black ">
      <AboutHeroSection Pargraph="At Kalos Fit, we offer personalized fitness and nutrition programs tailored to your health goals and needs. With a team of nutrition specialists and personal trainers, we help you achieve effective and sustainable results, whether you're aiming to lose weight, build muscle, or improve your lifestyle. We aim to support your journey to a healthier and more balanced life." />
      {/* Section header */}
      <div className="text-center mb-10 py-2 px-5 md:px-20">
        <h2 className="text-4xl font-bold text-white">Our Commitment to You</h2>
        <p className="text-lg text-white mt-2">
          Empowering women to live their healthiest, happiest lives.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center flex-wrap gap-10 items-stretch py-2 px-5 md:px-20">
        {/* Unique Plans Card */}
        <div className="bg-black shadow-lg rounded-lg px-6 py-5 hover:shadow-slate-50 transition duration-300 max-w-[480px] max-md:shadow-slate-50">
          <h3 className="text-base md:text-2xl font-semibold text-white mb-4 border-2 border-[#30B43C] py-1 px-3 w-fit rounded-3xl bg-gradient-to-b from-[#30b43b75] to-black">
            Unique Plans for Unique Women
          </h3>
          <p className="text-white">
            Every woman is unique. Our dietitians and certified nutritionists
            create personalized plans tailored to your goals, lifestyle, and
            dietary needs.
          </p>
        </div>

        {/* Sustainable & Delicious Card */}
        <div className="bg-black shadow-lg rounded-lg px-6 py-5 hover:shadow-slate-50 transition duration-300 max-w-[480px] max-md:shadow-slate-50">
          <h3 className="text-base md:text-2xl font-semibold text-white mb-4 border-2 border-[#30B43C] py-1 px-3 w-fit rounded-3xl bg-gradient-to-b from-[#30b43b75] to-black">
            Sustainable & Delicious
          </h3>
          <p className="text-white">
            Forget quick fixes! Our focus is on long-term health with nutritious
            and satisfying foods.
          </p>
        </div>

        {/* Support Every Step Card */}
        <div className="bg-black shadow-lg rounded-lg px-6 py-5 hover:shadow-slate-50 transition duration-300 max-w-[480px] max-md:shadow-slate-50">
          <h3 className="text-base md:text-2xl font-semibold text-white mb-4 border-2 border-[#30B43C] py-1 px-3 w-fit rounded-3xl bg-gradient-to-b from-[#30b43b75] to-black">
            Support Every Step of the Way
          </h3>
          <p className="text-white">
            We’re with you at every stage, offering support, recipes, and
            motivation to keep you on track.
          </p>
        </div>

        {/* Feel the Difference Card */}
        <div className="bg-black shadow-lg rounded-lg px-6 py-5 hover:shadow-slate-50 transition duration-300 max-w-[480px] max-md:shadow-slate-50">
          <h3 className="text-base md:text-2xl font-semibold text-white mb-4 border-2 border-[#30B43C] py-1 px-3 w-fit rounded-3xl bg-gradient-to-b from-[#30b43b75] to-black">
            Feel the Difference
          </h3>
          <p className="text-white">
            Our goal is to boost your energy and confidence with a personalized
            nutrition plan that works for you.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-16  px-5 md:px-20">
  
        <PackageButton
                  path="/packages"
                  
                  parentStyling="mt-10 md:mt-0 flex justify-center items-center lg:ml-6 md:hidden lg:flex"
                  buttonStyling="py-2 px-8 bg-[#30B43C] text-[#FFFFFF] rounded-3xl capitalize lg:text-base hover:bg-[#D4FF9E] hover:text-black font-medium transition-all"
                  children="Explore Our Packages"
                />
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-20 text-center space-y-10  px-5 md:px-20">
        {/* Mission */}
        <div>
          <h3 className="text-5xl font-bold text-[#30B43C]">Our Mission</h3>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            At Kalos Fit, we believe that everyone deserves to feel strong,
            energized, and confident. We aim to provide the knowledge and tools
            necessary to make healthy living achievable in today’s fast-paced
            world.
          </p>
        </div>

        {/*Vision*/}
        <div>
          <h3 className="text-5xl font-bold text-[#30B43C]">Our Vision</h3>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            We envision a future where personalized nutrition is accessible to
            all, empowering individuals to take control of their health and live
            their best lives. Kalos Fit aims to lead in health and wellness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
