import RadioButtonExample from "./RadioButton";
import SurveySummary from "./SurveySummary";
import TextField from "./TextField";
import { validateForm } from "../utils/validation";
import { useState } from "react";

function SurveyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [comments, setComments] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [favoriteMovieError, setFavoriteMovieError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateForm(
        name,
        favoriteMovie,
        email,
        setNameError,
        setFavoriteMovieError,
        setEmailError
      )
    ) {
      return;
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setFavoriteMovie("");
    setComments("");
    setIsSubmitted(false);
    setNameError("");
    setEmailError("");
    setFavoriteMovieError("");
  };

  if (isSubmitted) {
    return (
      <SurveySummary
        name={name}
        email={email}
        favoriteMovie={favoriteMovie}
        comments={comments}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl w-full mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
          {/* Header */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700"></div>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative px-8 py-12 text-center">
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                Movie Preference Survey
              </h1>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-8 py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
              />
              
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />

              <div className="space-y-3">
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Favorite Movie <span className="text-red-500">*</span>
                </label>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <RadioButtonExample
                    selectedOption={favoriteMovie}
                    setSelectedOption={setFavoriteMovie}
                  />
                </div>
                {favoriteMovieError && (
                  <p className="text-red-500 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {favoriteMovieError}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <label htmlFor="comments" className="block text-lg font-semibold text-gray-800">
                  Comments <span className="text-gray-500 text-sm font-normal">(optional)</span>
                </label>
                <textarea
                  value={comments}
                  name="comments"
                  placeholder="Tell us about your movie preferences."
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 h-32 resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 focus:ring-4 focus:ring-blue-300"
                >
                  <span className="flex items-center justify-center">
                    Submit Survey
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyForm;
