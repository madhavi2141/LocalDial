import React, { useState, useEffect } from "react";
import {
  FaUniversity,
  FaPiggyBank,
  FaCreditCard,
  FaCoins,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";

// Correct relative import for images
import bankImage1 from "../../assets/bank/bank1.webp";
import bankImage2 from "../../assets/bank/Bank2.jpg";
import bankImage3 from "../../assets/bank/Bank3.webp";
import savingsImage from "../../assets/bank/savings.jpg";
import loanImage from "../../assets/bank/loan.jpg";
import creditCardImage from "../../assets/bank/creditCard.jpg";
import investmentImage from "../../assets/bank/investment.jpg";
import insuranceImage from "../../assets/bank/insuarance.jpg";
import mobileBankingImage from "../../assets/bank/mobileBanking.jpg";

const ServiceCard = ({ name, icon: Icon, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.cardHeader}>
        <img src={image} alt={name} style={styles.cardImage} />
        <Icon style={styles.icon} />
        <h2 style={styles.cardTitle}>{name}</h2>
      </div>
    </div>
  );
};

const Banks = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [bankImage1, bankImage2, bankImage3];
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const services = [
    { id: 1, name: "Savings Account", icon: FaPiggyBank, image: savingsImage },
    { id: 2, name: "Loan Services", icon: FaCoins, image: loanImage },
    { id: 3, name: "Credit Cards", icon: FaCreditCard, image: creditCardImage },
    { id: 4, name: "Investment Plans", icon: FaChartLine, image: investmentImage },
    { id: 5, name: "Insurance", icon: FaUniversity, image: insuranceImage },
    { id: 6, name: "Mobile Banking", icon: FaMobileAlt, image: mobileBankingImage },
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Sliding Image Header */}
      <div style={styles.imageContainer}>
        <img
          src={images[currentImage]}
          alt="Banking Header"
          style={styles.headerImage}
        />
        {/* Search Bar */}
        <div
          style={{
            ...styles.searchContainer,
            ...(isSearchHovered ? styles.searchContainerHover : {}),
          }}
          onMouseEnter={() => setIsSearchHovered(true)}
          onMouseLeave={() => setIsSearchHovered(false)}
        >
          <FaSearch style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search Banking Services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      <p style={styles.description}>
        Explore a range of banking services designed to meet your financial needs:
      </p>
      <div style={styles.cardContainer}>
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            icon={service.icon}
            image={service.image}
          />
        ))}
      </div>

      {/* Additional Description */}
      <p style={styles.additionalDescription}>
        Our banking services are tailored to ensure financial growth and security. From savings accounts to investment plans, we have the right solution for every individual and business. Let us help you achieve your financial goals with ease and convenience.
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#ADD8E6",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "150px",
  },
  headerImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "opacity 1s ease-in-out",
  },
  searchContainer: {
    position: "absolute",
    top: "110%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#001f3f",
    padding: "10px",
    borderRadius: "50px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s, transform 0.3s",
  },
  searchContainerHover: {
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.05)",
  },
  searchIcon: {
    color: "#fff",
    fontSize: "20px",
    marginRight: "10px",
  },
  searchInput: {
    border: "none",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "50px",
    width: "300px",
    outline: "none",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  additionalDescription: {
    fontSize: "16px",
    color: "#555",
    marginTop: "30px",
    padding: "0 20px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "100px",
    padding: "100px",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#5B92E5",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "center",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  cardTitle: {
    marginTop: "10px",
    fontSize: "1.2rem",
  },
  icon: {
    fontSize: "2.5rem",
  },
};

export default Banks;
