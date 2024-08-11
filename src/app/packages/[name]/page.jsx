"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomForm() {
  const pathname = usePathname();
  const [packageName, setPackageName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    whatsapp: "",
    occupation: "",
    email: "",
    height: "",
    weight: "",
    currentDisease: "",
    medications: "",
    disciplined: "",
    agreeInstructions: "",
    gymTrainingDuration: "",
    exerciseExperience: "",
    gymDaysPerWeek: "",
    activities: "",
    followUpGoal: "",
    foodAllergy: "",
    smoke: "",
    drink: "",
    cookHealthy: "",
    followRecipes: "",
    similarMeals: "",
    waterIntake: "",
    nutritionExperience: "",
    mainProblem: "",
    mealsLike: "",
    mealsDislike: "",
    understandDietImportance: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const segments = pathname.split("/");
    const name = segments[segments.length - 1];
    setPackageName(decodeURIComponent(name));
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required.";
      valid = false;
    } else if (isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = "Please enter a valid age.";
      valid = false;
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required.";
      valid = false;
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = "Occupation is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.height.trim()) {
      newErrors.height = "Height is required.";
      valid = false;
    } else if (isNaN(formData.height) || formData.height <= 0) {
      newErrors.height = "Please enter a valid height.";
      valid = false;
    }

    if (!formData.weight.trim()) {
      newErrors.weight = "Weight is required.";
      valid = false;
    } else if (isNaN(formData.weight) || formData.weight <= 0) {
      newErrors.weight = "Please enter a valid weight.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const fillTestData = () => {
    setFormData({
      name: "John Doe",
      age: "30",
      whatsapp: "1234567890",
      occupation: "Software Engineer",
      email: "john.doe@example.com",
      height: "180",
      weight: "75",
      currentDisease: "None",
      medications: "None",
      disciplined: "Yes",
      agreeInstructions: "Yes",
      gymTrainingDuration: "2 years",
      exerciseExperience: "8",
      gymDaysPerWeek: "5",
      activities: "Running, Swimming",
      followUpGoal: "Lose 5kg",
      foodAllergy: "None",
      smoke: "No",
      drink: "No",
      cookHealthy: "Yes",
      followRecipes: "Yes",
      similarMeals: "Yes",
      waterIntake: "3",
      nutritionExperience: "1",
      mainProblem: "Time management",
      mealsLike: "Chicken, Rice",
      mealsDislike: "Fish",
      understandDietImportance: "Yes",
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxdgtmI01Dule-3mD1_lugdg6-U6ZCz01WF-9dwUy7ugFgaY33cUlLzMzAOZGp9zGV40Q/exec",
      {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData({
      name: "",
      age: "",
      whatsapp: "",
      occupation: "",
      email: "",
      height: "",
      weight: "",
      currentDisease: "",
      medications: "",
      disciplined: "",
      agreeInstructions: "",
      gymTrainingDuration: "",
      exerciseExperience: "",
      gymDaysPerWeek: "",
      activities: "",
      followUpGoal: "",
      foodAllergy: "",
      smoke: "",
      drink: "",
      cookHealthy: "",
      followRecipes: "",
      similarMeals: "",
      waterIntake: "",
      nutritionExperience: "",
      mainProblem: "",
      mealsLike: "",
      mealsDislike: "",
      understandDietImportance: "",
    });
  };

  return (
    <div
      className="w-full pt-44 pb-44"
      style={{
        backgroundImage: "url('/dan-gold.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" p-6 max-w-[1450px] mx-auto bg-[#30B43C] rounded-lg text-black">
        <h1 className="text-3xl font-bold mb-4">
          Personal Health Questionnaire
        </h1>

        <form
          className="grid md:grid-cols-2 gap-1 gap-x-9 px-4  "
          onSubmit={Submit}
        >
          {/* General Inputs */}
          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-[2px] block w-full py-1 pl-2 border-2 outline-none border-transparent rounded-2xl shadow-sm focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30 ${
                errors.name ? "border-red-500 bg-white" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm font-semibold">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`mt-[2px] block w-full py-1 pl-2 border-2 outline-none border-transparent rounded-2xl shadow-sm focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base  bg-white/30${
                errors.age ? "border-red-500" : ""
              }`}
            />
            {errors.age && <p className="text-red-500 text-sm font-semibold">{errors.age}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              WhatsApp Number
            </label>
            <input
              type="number"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className={`mt-[2px] block w-full py-1 pl-2 border-2 outline-none border-transparent rounded-2xl shadow-sm focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base  bg-white/30${
                errors.whatsapp ? "border-red-500" : ""
              }`}
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm font-semibold">{errors.whatsapp}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className={`mt-[2px] block w-full py-1 pl-2 border-2 outline-none border-transparent rounded-2xl shadow-sm focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base  bg-white/30${
                errors.occupation ? "border-red-500" : ""
              }`}
            />
            {errors.occupation && (
              <p className="text-red-500 text-sm font-semibold">{errors.occupation}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-[2px] block w-full py-1 pl-2 border-2 outline-none border-transparent rounded-2xl shadow-sm focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base  bg-white/30${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-semibold">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className={`mt-[2px] block w-full py-1 pl-2 border-2 outline-none border-transparent rounded-2xl shadow-sm focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base  bg-white/30${
                errors.height ? "border-red-500" : ""
              }`}
            />
            {errors.height && (
              <p className="text-red-500 text-sm font-semibold">{errors.height}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className={`mt-[2px] block w-full py-1 pl-2 border-2 outline-none border-transparent rounded-2xl shadow-sm focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base  bg-white/30${
                errors.weight ? "border-red-500" : ""
              }`}
            />
            {errors.weight && (
              <p className="text-red-500 text-sm font-semibold">{errors.weight}</p>
            )}
          </div>

          {/* Additional form fields */}
          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Current Disease (if any)
            </label>
            <input
              type="text"
              name="currentDisease"
              value={formData.currentDisease}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Medications (if any)
            </label>
            <input
              type="text"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Are you disciplined person with your diet and workout ?
            </label>
            <input
              type="text"
              name="disciplined"
              value={formData.disciplined}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Following the instructions is so important for progress , Do you
              Agree ?
            </label>
            <input
              type="text"
              name="agreeInstructions"
              value={formData.agreeInstructions}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              How long did you train at gym till now ?
            </label>
            <input
              type="text"
              name="gymTrainingDuration"
              value={formData.gymTrainingDuration}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Tell me about activities you like to do ?
            </label>
            <input
              type="text"
              name="activities"
              value={formData.activities}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              In 3 months follow-up, what will be your goal?
            </label>
            <input
              type="text"
              name="followUpGoal"
              value={formData.followUpGoal}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Do you have allergy to any food ? if yes please mention it
            </label>
            <input
              type="text"
              name="foodAllergy"
              value={formData.foodAllergy}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              How much water do you drink daily (in liters)?
            </label>
            <input
              type="number"
              name="waterIntake"
              value={formData.waterIntake}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              What do you think that would be the main problem considering
              following your diet plan ?
            </label>
            <input
              type="text"
              name="mainProblem"
              value={formData.mainProblem}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Which meals you like ?
            </label>
            <input
              type="text"
              name="mealsLike"
              value={formData.mealsLike}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black pl-2">
              Which meals you don't like ?
            </label>
            <input
              type="text"
              name="mealsDislike"
              value={formData.mealsDislike}
              onChange={handleChange}
              className="mt-[2px] block  py-1 pl-2 w-full border-transparent rounded-2xl shadow-sm outline-none border-2 focus:ring-[#30B43C] focus:border-[#30B43C] sm:text-base bg-white/30"
            />
          </div>

          {/* Radio Inputs */}
       

          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Do you have a problem with eating similar meals every day?
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {["yes", "no"].map((option) => (
                <div
                  key={option}
                  className="flex items-center flex-col-reverse"
                >
                  <input
                    type="radio"
                    name="similarMeals"
                    value={option}
                    checked={formData.similarMeals === option}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black font-bold capitalize">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Your experience with exercises (1 to 10)
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {[...Array(10).keys()].map((i) => (
                <div key={i} className="flex items-center flex-col-reverse">
                  <input
                    type="radio"
                    name="exerciseExperience"
                    value={i + 1}
                    checked={formData.exerciseExperience === (i + 1).toString()}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-base text-black">{i + 1}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Would you like to follow healthy recipes?
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {["yes", "no"].map((option) => (
                <div
                  key={option}
                  className="flex items-center flex-col-reverse"
                >
                  <input
                    type="radio"
                    name="followRecipes"
                    value={option}
                    checked={formData.followRecipes === option}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black font-bold capitalize">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
       
          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Your experience in nutrition (1 to 10)
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {[...Array(10).keys()].map((i) => (
                <div key={i} className="flex items-center flex-col-reverse">
                  <input
                    type="radio"
                    name="nutritionExperience"
                    value={i + 1}
                    checked={
                      formData.nutritionExperience === (i + 1).toString()
                    }
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black">{i + 1}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Can you cook your food in a healthy way?
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {["yes", "no"].map((option) => (
                <div
                  key={option}
                  className="flex items-center flex-col-reverse"
                >
                  <input
                    type="radio"
                    name="cookHealthy"
                    value={option}
                    checked={formData.cookHealthy === option}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black font-bold capitalize">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              How many days per week can you go to the gym? (1 to 7)
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {[...Array(7).keys()].map((i) => (
                <div key={i} className="flex items-center flex-col-reverse">
                  <input
                    type="radio"
                    name="gymDaysPerWeek"
                    value={i + 1}
                    checked={formData.gymDaysPerWeek === (i + 1).toString()}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black">{i + 1}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Do you smoke?
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {["yes", "no"].map((option) => (
                <div
                  key={option}
                  className="flex items-center flex-col-reverse"
                >
                  <input
                    type="radio"
                    name="smoke"
                    value={option}
                    checked={formData.smoke === option}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black font-bold capitalize">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
      
          
          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Do you know that sticking to your diet is a main factor for your
              progress?
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {["yes", "no"].map((option) => (
                <div
                  key={option}
                  className="flex items-center flex-col-reverse"
                >
                  <input
                    type="radio"
                    name="understandDietImportance"
                    value={option}
                    checked={formData.understandDietImportance === option}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black font-bold capitalize">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="my-2 flex justify-center items-center flex-col gap-2">
            <label className="block text-sm font-bold text-black pl-2">
              Do you drink?
            </label>
            <div className="flex items-center space-x-4 gap-6 flex-wrap">
              {["yes", "no"].map((option) => (
                <div
                  key={option}
                  className="flex items-center flex-col-reverse"
                >
                  <input
                    type="radio"
                    name="drink"
                    value={option}
                    checked={formData.drink === option}
                    onChange={handleChange}
                    className="h-[18px] w-[18px] text-black border-gray-300 focus:ring-black accent-black   "
                  />
                  <label className="text-sm text-black font-bold capitalize">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>


         





          <button
              type="button"
              onClick={fillTestData}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg"
            >
              Fill Test Data
            </button>


      

          <button
            type="submit"
            className="w-fit mt-10 bg-[white] text-black py-1.5 px-20 text-lg font-bold rounded-3xl hover:bg-[black] hover:text-white transition-all duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}