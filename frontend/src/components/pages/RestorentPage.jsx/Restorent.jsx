import React, { useState } from "react";

import { FiSearch } from "react-icons/fi"; // Import a search icon from react-icons
import BannerImage from "../../../assets/banner img.webp"; // Import the banner image
import Indian from "../../../assets/Indian.jpg";
import Japanese from "../../../assets/Japanese.webp";
import Italian from "../../../assets/Italian.avif";
import American from "../../../assets/American.webp";

// Dummy restaurant data
const restaurantData = [
  { id: 1, name: "The Spice House", cuisine: "Indian", rating: 4.5, image: Indian, address: "123 Main Street, Downtown" },
  { id: 2, name: "Sushi World", cuisine: "Japanese", rating: 4.8, image: Japanese, address: "45 Elm Street, Uptown" },
  { id: 3, name: "Pasta Paradise", cuisine: "Italian", rating: 4.2, image: Italian, address: "78 Maple Avenue, Suburbia" },
  { id: 4, name: "Burger Haven", cuisine: "American", rating: 4.0, image: American, address: "90 Pine Road, Westend" },
];

const Restaurant = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filtered restaurant list
  const filteredRestaurants = restaurantData.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || restaurant.cuisine === filter;
    return matchesSearch && matchesFilter;
  });

  // Highlight matching search text
  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.replace(regex, `<span class="bg-yellow-200">$1</span>`);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Banner Image */}
      <div className="relative w-full">
        <img src={BannerImage} alt="Banner" className="w-full h-96 object-cover" />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold bg-opacity-50 px-6 py-2 rounded-lg drop-shadow-md"
            style={{ marginTop: "10%" }}
          >
            IT'S ALL ABOUT FOOD
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Search Bar */}
        <div className="flex justify-center items-center mb-4">
          <div className="relative w-full md:w-1/2">
            <FiSearch className="absolute left-3 top-3 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search for a restaurant..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Cuisine Filter */}
        <div className="flex justify-center mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-6 py-3 bg-blue-100 text-blue-900 hover:bg-blue-200 focus:bg-blue-300 focus:outline-none"
          >
            <option value="All">View All Categories</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
          </select>
        </div>

        {/* Restaurant List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="rounded-lg shadow-lg p-4 bg-white text-center">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h3
                  className="text-lg font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(restaurant.name, search),
                  }}
                ></h3>
                <p className="text-gray-600">{restaurant.cuisine}</p>
                <p className="text-gray-600 text-sm">{restaurant.address}</p>
                <div className="mt-2 text-yellow-500 font-bold">⭐ {restaurant.rating.toFixed(1)}</div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-1 md:col-span-2">
              No restaurants found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
