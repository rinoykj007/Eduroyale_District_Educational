import React, { useState } from "react";
import { GB, US, CA, AU, NZ, IE } from "country-flag-icons/react/3x2";

const Courses = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const countries = [
    { id: "all", name: "All Countries" },
    { id: "uk", name: "United Kingdom", Flag: GB },
    { id: "usa", name: "United States", Flag: US },
    { id: "canada", name: "Canada", Flag: CA },
    { id: "australia", name: "Australia", Flag: AU },
    { id: "newzealand", name: "New Zealand", Flag: NZ },
    { id: "ireland", name: "Ireland", Flag: IE },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Partner Universities
        </h1>

        {/* Country Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country.id)}
              className={`px-4 py-2 rounded ${
                selectedCountry === country.id
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              {country.Flag && (
                <span className="w-6 h-4 inline-block mr-2">
                  <country.Flag />
                </span>
              )}
              {country.name}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
