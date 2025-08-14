import movies from "../constants/movies";

export default function RadioButtonExample({ selectedOption, setSelectedOption }) {

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
        {movies.map((movie, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name="favoriteMovie"
              value={movie.title}
              checked={selectedOption === movie.title}
              onChange={handleChange}
            />
            {movie.title} ({movie.year}) - {movie.director}
          </label>
        ))}
    </div>
  );
}
