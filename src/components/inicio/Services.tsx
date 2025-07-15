// src/components/Services.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = [
  { image: img1, title: "Golden Bridge, Ba Na Hills", country: "Vietnam" },
  { image: img2, title: "Dubrovnik", country: "Croatia" },
  { image: img3, title: "Hot Air Balloon Cappadocia", country: "Turkey" },
  { image: img4, title: "Sydney Harbour Bridge", country: "Australia" },
];

const filters = [
  "Popular", "USA", "Europe", "Asia", "Africa & Middle East",
  "Australia & The Pacific", "Canada", "More"
];

export default function TopDestinations() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Top Destinations
          </h2>
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-sm text-gray-600">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                className={`${
                  idx === 0 ? "font-semibold text-black underline" : ""
                } hover:text-black transition`}
              >
                {filter}
              </button>
            ))}
            <button className="ml-4 border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
              Explore all destinations
            </button>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                {dest.title}
              </h3>
              <p className="text-xs text-gray-600">{dest.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
