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
        {/* Universities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group flex flex-col h-full"
            >
              {/* Image Container - Fixed Height */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={university.image}
                  alt={university.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x200?text=University";
                  }}
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                  {university.ranking}
                </div>
              </div>

              {/* Content Container - Flexible Height with Flex Column */}
              <div className="p-5 flex flex-col flex-grow">
                {/* University Name - Fixed Height */}
                <h3 className="text-xl font-semibold mb-1 text-gray-800 group-hover:text-blue-600 transition-colors h-7 line-clamp-1">
                  {university.name}
                </h3>

                {/* Location - Fixed Height */}
                <p className="text-gray-600 mb-4 flex items-center text-sm h-5">
                  {university.country &&
                    countries.find((c) => c.id === university.country)
                      ?.Flag && (
                      <span className="mr-2 w-4 h-3 inline-block">
                        {React.createElement(
                          countries.find((c) => c.id === university.country)
                            ?.Flag
                        )}
                      </span>
                    )}
                  {university.location}
                </p>

                {/* Programs Section - Fixed Height */}
                <div className="mb-4 h-24">
                  <h4 className="font-medium text-sm text-gray-700 mb-2">
                    Programs
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {university.programs.slice(0, 5).map((program, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 hover:bg-blue-50 px-2.5 py-1.5 rounded-full text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer to push the footer to bottom */}
                <div className="flex-grow"></div>

                {/* Footer Info - Fixed Height */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 mt-2">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">
                      Tuition Range
                    </h4>
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {university.tuitionRange}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">
                      Intake
                    </h4>
                    <p className="text-sm text-gray-800 truncate">
                      {university.intakeMonths.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Button - Fixed Height */}
                <button className="w-full mt-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 rounded-lg font-medium hover:shadow-md transition-all hover:from-blue-700 hover:to-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
