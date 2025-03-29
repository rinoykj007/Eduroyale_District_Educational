"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-200 font-poppins py-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <div className="mx-auto px-4 relative z-10">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-indigo-500/5 pointer-events-none"></div>
        footer
        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-blue-900/30 text-center">
          <p className="text-gray-400 hover:text-blue-300 transition-colors duration-300 font-poppins text-xs">
            &copy; {new Date().getFullYear()} EDUROYALE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
