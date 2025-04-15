import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./pages/Blog";
import BlogAdmin from "./pages/admin/BlogAdmin";
import Footer from "./components/Footer";
import Courses from "./pages/courses";
import Expert_Counseling from "./pages/Services/Expert_Counseling";
import CourseSelection from "./pages/Services/CourseSelection";
import BankLoan from "./pages/Services/Bank_Loan";
import CountrySelection from "./pages/Services/CountrySelection";
import FreeIeltsTraining from "./pages/Services/FreeIeltsTraining.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin/blog" element={<BlogAdmin />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/services/expert-counseling"
              element={<Expert_Counseling />}
            />
            <Route
              path="/services/course-selection"
              element={<CourseSelection />}
            />
            <Route path="/services/bank-loan" element={<BankLoan />} />
            <Route
              path="/services/country-selection"
              element={<CountrySelection />}
            />
            <Route
              path="/services/free-ielts-training"
              element={<FreeIeltsTraining />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
