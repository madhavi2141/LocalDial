import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import hospitalImage from "../../assets/hospital.jpg";
import restaurantImage from "../../assets/restorent.jpeg";
import gymImage from "../../assets/gym.webp";
import educationImage from "../../assets/education.jpeg";
import beautySpaImage from "../../assets/BeautySpa.jpeg";
import bankImage from "../../assets/Bank.jpeg";
import pgHostelsImage from "../../assets/PgHostel.jpeg";
import shoppingMallImage from "../../assets/ShoppingMall.jpeg";
import drivingSchoolImage from "../../assets/DrivingSchool.png";
import courierServiceImage from "../../assets/CourierService.jpeg";

const categories = [
  { name: "Hospital", image: hospitalImage },
  { name: "Restaurant", image: restaurantImage },
  { name: "Gym", image: gymImage },
  { name: "Education", image: educationImage },
  { name: "Beauty Spa", image: beautySpaImage },
  { name: "Bank", image: bankImage },
  { name: "Pg/Hostels", image: pgHostelsImage },
  { name: "Shopping Mall", image: shoppingMallImage },
  { name: "Driving School", image: drivingSchoolImage },
  { name: "Courier Service", image: courierServiceImage },
];

const ITEMS_PER_PAGE = 8;

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = categories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/${categoryName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="p-4">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {currentItems.map((category, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-lg p-4 text-center cursor-pointer bg-blue-200"
            variants={itemVariants}
            whileHover="hover"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Category;
