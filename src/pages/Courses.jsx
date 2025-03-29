import React, { useState } from "react";
import WhatsApp from "../components/WhatsApp";
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

  const universities = [
    // UK s with temporary CDN-hosted logos
    {
      id: 1,
      name: "Birmingham City University",
      country: "uk",
      ranking: "Top 100 UK s",
      location: "Birmingham, England",
      image:
        "https://lh3.googleusercontent.com/places/AJQcZqLCzMYoiQIwm82Ua4lrjlUe78SCwBkjxSBG7WuW-MlgbFPW-vWy3P0MUHa6nz_jJq1B6yZs71Vty0bRMwBuec9RAd7Du7_xPg=s1600-w480",
      programs: [
        "Business",
        "Computing and Technology",
        "Engineering",
        "Arts and Design",
        "Health Sciences",
      ],
      features: [
        "Modern city-center campus",
        "Industry partnerships",
        "Practice-based learning",
        "Strong employability focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 2,
      name: "Nottingham Trent University",
      country: "uk",
      ranking: "Top 50 UK s",
      location: "Nottingham, England",
      image:
        "https://www.ntu.ac.uk/__data/assets/image/0038/866873/240918_5126-1.jpg",
      programs: [
        "Business and Management",
        "Art and Design",
        "Engineering",
        "Computing and Technology",
        "Social Sciences",
      ],
      features: [
        "Award-winning teaching",
        "Modern facilities",
        "Strong industry connections",
        "Excellent student satisfaction",
      ],
      tuitionRange: "£15,000 - £17,000",
      intakeMonths: ["September", "January"],
    },
    {
      id: 3,
      name: "University of Greenwich",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://www.gre.ac.uk/__data/assets/image/0023/270428/varieties/v800.jpg",
      programs: [
        "Business",
        "Engineering",
        "Computing",
        "Architecture",
        "Health Sciences",
      ],
      features: [
        "Historic London campus",
        "Research excellence",
        "Industry partnerships",
        "International focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 4,
      name: "University of Sunderland",
      country: "uk",
      ranking: "Top Modern University",
      location: "Sunderland, England",
      image:
        "https://th.bing.com/th/id/R.1975b6dabc752f4dfbddf2129a9e56cf?rik=avEB42ZtaSebjw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_JugX5DFw1so%2fTE-LGpMf4rI%2fAAAAAAAAACs%2fsyVPWdsBPYc%2fs1600%2fUniversity%2bOf%2bSunderland.jpg&ehk=gECcSVWUiubJsI8LdJJ%2fV6XdnX2o9FzZEpl3WCXyFFg%3d&risl=&pid=ImgRaw&r=0",
      programs: [
        "Business and Management",
        "Engineering",
        "Computing",
        "Health Sciences",
        "Education",
      ],
      features: [
        "Two modern campuses",
        "Strong industry links",
        "Excellent student support",
        "Research-led teaching",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 5,
      name: "London South Bank University",
      country: "uk",
      ranking: "Top London Modern University",
      location: "London, England",
      image:
        "https://bpprodstorage.blob.core.windows.net/bpprodcontainer/1965288/images/4690f0cd-baf3-476b-9687-90eaae021018LSBU-Crest_simple-Colour-text_Horizon_Colour.png",
      programs: [
        "Business",
        "Engineering",
        "Health and Social Care",
        "Built Environment",
        "Applied Sciences",
      ],
      features: [
        "Central London location",
        "Professional accreditations",
        "Industry partnerships",
        "Career-focused education",
      ],
      tuitionRange: "£14,500 - £16,800",
      intakeMonths: ["September", "January"],
    },
    {
      id: 6,
      name: "University of West London",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://i.guim.co.uk/img/media/9893ec569636ee030586f604e459138372da1f79/0_192_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6186cd239af4698a9eb3721937d7a72",
      programs: [
        "Business",
        "Computing",
        "Engineering",
        "Healthcare",
        "Hospitality",
      ],
      features: [
        "West London location",
        "Modern facilities",
        "Industry connections",
        "Career support",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January", "May"],
    },
    // More UK s
    {
      id: 17,
      name: "University of Salford",
      country: "uk",
      ranking: "Top Modern University",
      location: "Manchester, England",
      image:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article21564378.ece/ALTERNATES/s810/0_University-of-Salford.png",
      programs: [
        "Engineering",
        "Business",
        "Health Sciences",
        "Media",
        "Built Environment",
      ],
      features: [
        "Industry partnerships",
        "MediaCityUK campus",
        "Modern facilities",
        "Professional focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 18,
      name: "Sheffield Hallam University",
      country: "uk",
      ranking: "Top Modern University",
      location: "Sheffield, England",
      image:
        "https://c8.alamy.com/comp/E7YNB5/sheffield-hallam-university-campus-building-in-sheffield-south-yorkshire-E7YNB5.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health",
        "Art & Design",
        "Computing",
      ],
      features: [
        "Industry connections",
        "Modern campus",
        "Research excellence",
        "Career support",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 19,
      name: "Plymouth University",
      country: "uk",
      ranking: "Top 50 Modern University",
      location: "Plymouth, England",
      image: "https://smapse.com/storage/2017/10/plymouth-university-12.jpg",
      programs: [
        "Marine Sciences",
        "Engineering",
        "Business",
        "Health",
        "Arts",
      ],
      features: [
        "Coastal location",
        "Research excellence",
        "Modern facilities",
        "Industry links",
      ],
      tuitionRange: "£13,000 - £15,000",
      intakeMonths: ["September", "January"],
    },
    // Additional UK s
    {
      id: 27,
      name: "University of Edinburgh",
      country: "uk",
      ranking: "Top Russell Group University",
      location: "Edinburgh, Scotland",
      image:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2020/03/old-college-university-of-edinburgh-wikipedia.jpg",
      programs: [
        "Medicine",
        "Engineering",
        "Business",
        "Arts & Humanities",
        "Sciences",
      ],
      features: [
        "World-renowned research",
        "Historic campus",
        "Global reputation",
        "Modern facilities",
      ],
      tuitionRange: "£22,000 - £32,000",
      intakeMonths: ["September"],
    },
    {
      id: 28,
      name: "Middlesex University",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://scontent-doh1-1.xx.fbcdn.net/v/t39.30808-6/320047292_1129983391023076_9201793394579130779_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=947md2pzUr0Q7kNvgEpvgu_&_nc_zt=23&_nc_ht=scontent-doh1-1.xx&_nc_gid=Ap9b5RLTCYxch_pZNJC-lsy&oh=00_AYCd8HhhS7OZ-ibSvC9qRmOoJL461iC_qxtcuNUtqebSQw&oe=677982C2",
      programs: ["Business", "Art & Design", "Health", "Computing", "Law"],
      features: [
        "London location",
        "Modern campus",
        "Industry links",
        "Global focus",
      ],
      tuitionRange: "£14,000 - £16,000",
      intakeMonths: ["September", "January"],
    },
    // USA s
    {
      id: 7,
      name: "Harvard University",
      country: "usa",
      ranking: "#1 World Ranking",
      location: "Cambridge, Massachusetts",
      image:
        "https://logos-world.net/wp-content/uploads/2020/12/Harvard-Emblem.png",
      programs: ["Business", "Law", "Medicine", "Arts & Sciences"],
      features: [
        "Ivy League institution",
        "World-class faculty",
        "Extensive research opportunities",
        "Strong alumni network",
      ],
      tuitionRange: "$49,000 - $55,000",
      intakeMonths: ["August"],
    },
    {
      id: 8,
      name: "Stanford University",
      country: "usa",
      ranking: "#4 World Ranking",
      location: "Stanford, California",
      image:
        "https://www.stanford.edu/wp-content/uploads/2023/10/Hero-3-2-1536x1022.jpg",
      programs: ["Computer Science", "Engineering", "Business", "Medicine"],
      features: [
        "Silicon Valley location",
        "Innovation hub",
        "Research excellence",
        "Entrepreneurial spirit",
      ],
      tuitionRange: "$52,000 - $57,000",
      intakeMonths: ["September"],
    },
    // Canadian s
    {
      id: 9,
      name: "George Brown College",
      country: "canada",
      ranking: "Top Ontario College",
      location: "Toronto, Ontario",
      image: "https://smapse.com/storage/2019/03/george-brown-college-28.jpg",
      programs: [
        "Business",
        "Technology",
        "Health Sciences",
        "Hospitality",
        "Construction Management",
      ],
      features: [
        "Downtown Toronto location",
        "Industry partnerships",
        "Co-op opportunities",
        "Career-focused programs",
      ],
      tuitionRange: "CAD 16,000 - 19,000",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 10,
      name: "Seneca College",
      country: "canada",
      ranking: "Leading Canadian College",
      location: "Toronto, Ontario",
      image:
        "https://polytechnicscanada.ca/wp-content/uploads/2021/02/Seneca-4.png",
      programs: [
        "Business",
        "Information Technology",
        "Engineering",
        "Aviation",
        "Creative Arts",
      ],
      features: [
        "Multiple campuses",
        "Industry connections",
        "Applied learning",
        "Career services",
      ],
      tuitionRange: "CAD 15,000 - 18,500",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 11,
      name: "Humber College",
      country: "canada",
      ranking: "Top GTA College",
      location: "Toronto, Ontario",
      image:
        "https://www.meridean.org/img/university/1659771458FKxF2qhWUAMELf4.jpg",
      programs: [
        "Business",
        "Media Studies",
        "Engineering",
        "Health Sciences",
        "Hospitality",
      ],
      features: [
        "Practical learning",
        "Industry partnerships",
        "Modern facilities",
        "Student support",
      ],
      tuitionRange: "CAD 16,500 - 19,500",
      intakeMonths: ["September", "January"],
    },
    // More Canadian s
    {
      id: 22,
      name: "Fanshawe College",
      country: "canada",
      ranking: "Top Ontario College",
      location: "London, Ontario",
      image:
        "https://2.bp.blogspot.com/-0dotmH6vhUo/VyxfwViDUqI/AAAAAAAAACw/Q2VYGYj5tHAmidDANQjTGIJyz2pX4m1HwCLcB/w1200-h630-p-k-no-nu/fanshawe-college-.jpg",
      programs: [
        "Business",
        "Technology",
        "Health Sciences",
        "Media",
        "Aviation",
      ],
      features: [
        "Industry partnerships",
        "Modern facilities",
        "Co-op programs",
        "Career support",
      ],
      tuitionRange: "CAD 15,000 - 18,000",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 23,
      name: "Conestoga College",
      country: "canada",
      ranking: "Leading Ontario College",
      location: "Kitchener, Ontario",
      image:
        "https://www.easyuni.com/media/institution/photo/2019/10/16/conestoga-college-waterloo-campus.jpg",
      programs: ["Engineering", "Business", "Health", "IT", "Trades"],
      features: [
        "Industry connections",
        "Modern facilities",
        "Co-op opportunities",
        "Career services",
      ],
      tuitionRange: "CAD 14,500 - 17,500",
      intakeMonths: ["September", "January", "May"],
    },
    // Irish s
    {
      id: 13,
      name: "Dublin City University (DCU)",
      country: "ireland",
      ranking: "Top Young University",
      location: "Dublin, Ireland",
      image:
        "https://www.theworld100.com/wp-content/uploads/2015/01/university-college-dublin.jpg",
      programs: [
        "Business Studies",
        "Computing",
        "Engineering",
        "Communications",
        "Education",
      ],
      features: [
        "Industry focused",
        "Innovation hub",
        "Strong placement programs",
        "Modern facilities",
      ],
      tuitionRange: "€13,500 - €23,000",
      intakeMonths: ["September", "January"],
    },
    // More Irish s
    {
      id: 20,
      name: "University College Cork",
      country: "ireland",
      ranking: "Top Irish University",
      location: "Cork, Ireland",
      image:
        "https://2.bp.blogspot.com/-tSGrSdta6fQ/Tn0zr_Y7i6I/AAAAAAAAAuM/4sAB7BWW250/s1600/UniColCork+1.jpg",
      programs: ["Business", "Engineering", "Medicine", "Arts", "Law"],
      features: [
        "Historic campus",
        "Research excellence",
        "Student support",
        "Modern facilities",
      ],
      tuitionRange: "€14,000 - €23,000",
      intakeMonths: ["September"],
    },
    {
      id: 21,
      name: "University of Limerick",
      country: "ireland",
      ranking: "Top Modern University",
      location: "Limerick, Ireland",
      image:
        "https://www.irlandaegitimrehberi.com/wp-content/uploads/2022/03/LIMERICK.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health Sciences",
        "Education",
        "Science",
      ],
      features: [
        "Modern campus",
        "Industry links",
        "Co-op program",
        "Sports facilities",
      ],
      tuitionRange: "€13,500 - €22,000",
      intakeMonths: ["September", "January"],
    },
    // New Zealand s
    {
      id: 14,
      name: "Auckland University of Technology",
      country: "newzealand",
      ranking: "Top NZ University",
      location: "Auckland, New Zealand",
      image:
        "https://suneducationgroup.com/wp-content/uploads/2016/02/Institusi-AUT-paling-internasional-NZ-Kampus-0.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health Sciences",
        "Creative Technologies",
        "Hospitality",
      ],
      features: [
        "Industry focused",
        "Research excellence",
        "Modern facilities",
        "City campus",
      ],
      tuitionRange: "NZD 28,000 - 38,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 15,
      name: "Unitec Institute of Technology",
      country: "newzealand",
      ranking: "Leading NZ Institute",
      location: "Auckland, New Zealand",
      image:
        "https://amarebe.com/wp-content/uploads/2021/01/unitec-institute-of-technology.png",
      programs: [
        "Construction",
        "Engineering",
        "Computing",
        "Healthcare",
        "Business",
      ],
      features: [
        "Practical learning",
        "Industry connections",
        "Modern campus",
        "Student support",
      ],
      tuitionRange: "NZD 22,000 - 32,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 16,
      name: "Manukau Institute of Technology",
      country: "newzealand",
      ranking: "Top Technical Institute",
      location: "Auckland, New Zealand",
      image:
        "https://greatnationnz.com/wp-content/uploads/2018/11/Manukau-Institute-of-Technology-New-Zealand-optimized-f.jpg",
      programs: [
        "Engineering",
        "Digital Technologies",
        "Business",
        "Health Studies",
        "Maritime Studies",
      ],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Career support",
      ],
      tuitionRange: "NZD 20,000 - 30,000",
      intakeMonths: ["February", "July"],
    },
    // More New Zealand s
    {
      id: 24,
      name: "Wellington Institute of Technology",
      country: "newzealand",
      ranking: "Leading Technical Institute",
      location: "Wellington, New Zealand",
      image:
        "https://www.chooseright.org/wp-content/uploads/2014/04/Wellington-Institute-of-Technology-500x367.jpg",
      programs: [
        "Engineering",
        "IT",
        "Business",
        "Creative Technologies",
        "Health",
      ],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Student support",
      ],
      tuitionRange: "NZD 21,000 - 31,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 25,
      name: "Ara Institute of Canterbury",
      country: "newzealand",
      ranking: "Top Technical Institute",
      location: "Christchurch, New Zealand",
      image:
        "https://media.studylink.com/provider/ara-institute-of-canterbury/profile.jpg",
      programs: [
        "Engineering",
        "Business",
        "Hospitality",
        "Creative Industries",
        "Health",
      ],
      features: [
        "Industry connections",
        "Modern facilities",
        "Practical learning",
        "Student support",
      ],
      tuitionRange: "NZD 20,000 - 30,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 26,
      name: "Whitireia",
      country: "newzealand",
      ranking: "Leading Institute",
      location: "Wellington, New Zealand",
      image:
        "https://www.jeduka.com/storage/school_image/2/whitireia-new-zealand.jpg",
      programs: ["Health", "IT", "Business", "Creative Arts", "Hospitality"],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Career support",
      ],
      tuitionRange: "NZD 19,000 - 29,000",
      intakeMonths: ["February", "July"],
    },
  ];

  const filteredUniversities =
    selectedCountry === "all"
      ? universities
      : universities.filter((uni) => uni.country === selectedCountry);

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
              className={`px-4 py-2 rounded-3xl  ${
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

        <WhatsApp
          phoneNumber="1234567890"
          message="Hi, I'm interested in your courses!"
        />
      </main>
    </div>
  );
};

export default Courses;
