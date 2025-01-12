import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    identification_number: "",
    date_of_birth: "",
    place_of_birth: "",
    residence_place: "",
    telephone: "",
    address: "",
    position: "",
    place_of_working: "",
    marital_status: "",
    spouse_name: "",
    spouse_id_number: "",
    spouse_telephone: "",
    shares: "",
    monthly_saving: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://umuhuza.store/api/users/register", formData);

      if (response.status === 201) {
        setSuccessMessage("Registration successful!");
        setErrorMessage("");
      } else {
        setErrorMessage(response.data.message || "Registration failed.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-grey-100 flex justify-center flex-1">
        <div className="xl:w-5/12 p-6 sm:p-12 bg-white shadow-md rounded-md">
          <div className="my-12 border-b text-center">
            <h1 className="text-2xl xl:text-3xl">Registration</h1>
          </div>
          <div className="flex flex-col items-center">
            {successMessage && (
              <div className="border-dotted px-4 py-3 border-2 border-green-500 text-sm text-green-700 bg-green-100 text-center flex justify-between mt-4">
                <p>{successMessage}</p>
              </div>
            )}
            {errorMessage && (
              <div className="border-dotted px-4 py-3 border-2 border-red-500 text-sm text-red-500 bg-red-100 text-center flex justify-between mt-4">
                <p>{errorMessage}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="w-full mt-8">
              {step === 1 && (
                <>
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="identification_number"
                    placeholder="Identification Number"
                    value={formData.identification_number}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="marital_status"
                    value={formData.marital_status}
                    onChange={handleChange}
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    required
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                  >
                    Next
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="date"
                    name="date_of_birth"
                    placeholder="Date of Birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="place_of_birth"
                    placeholder="Place of Birth"
                    value={formData.place_of_birth}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="residence_place"
                    placeholder="Residence Place"
                    value={formData.residence_place}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="telephone"
                    placeholder="Telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="mt-5 tracking-wide font-semibold bg-gray-300 text-gray-900 w-full py-4 rounded-lg hover:bg-gray-400 transition-all duration-300 ease-in-out"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                  >
                    Next
                  </button>
                </>
              )}
              {step === 3 && (
                <>
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="spouse_name"
                    placeholder="Spouse Name"
                    value={formData.spouse_name}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="spouse_id_number"
                    placeholder="Spouse ID Number"
                    value={formData.spouse_id_number}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="spouse_telephone"
                    placeholder="Spouse Telephone"
                    value={formData.spouse_telephone}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="number"
                    name="shares"
                    placeholder="Shares"
                    value={formData.shares}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 mb-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="number"
                    name="monthly_saving"
                    placeholder="Monthly Saving"
                    value={formData.monthly_saving}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="mt-5 tracking-wide font-semibold bg-gray-300 text-gray-900 w-full py-4 rounded-lg hover:bg-gray-400 transition-all duration-300 ease-in-out"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
