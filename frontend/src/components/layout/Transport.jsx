import React, { useState } from "react";
import { FaBus, FaTrain, FaCar, FaBicycle, FaPlane, FaTaxi, FaSearch } from "react-icons/fa";

// Correct relative import for images
import transportImage from "../../assets/TransportHeader.jpg";

// Placeholder images for cards
import busImg from "../../assets/bus.jpg";
import trainImg from "../../assets/train.jpg";
import carImg from "../../assets/car.jpg";
import bicycleImg from "../../assets/bicycle.jpg";
import flightImg from "../../assets/flight.jpg";
import taxiImg from "../../assets/taxi.jpg";

const TransportCard = ({ name, icon: Icon, image }) => {
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
      {/* Card Image */}
      <div style={styles.cardImageContainer}>
        <img src={image} alt={${name} Image} style={styles.cardImage} />
      </div>
      {/* Card Header */}
      <div style={styles.cardHeader}>
        <Icon style={styles.icon} />
        <h2 style={styles.cardTitle}>{name}</h2>
      </div>
    </div>
  );
};

const Transport = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const transportData = [
    { id: 1, name: "Bus Services", icon: FaBus, image: busImg },
    { id: 2, name: "Train Services", icon: FaTrain, image: trainImg },
    { id: 3, name: "Car Rentals", icon: FaCar, image: carImg },
    { id: 4, name: "Bicycle Rentals", icon: FaBicycle, image: bicycleImg },
    { id: 5, name: "Flights", icon: FaPlane, image: flightImg },
    { id: 6, name: "Taxi Services", icon: FaTaxi, image: taxiImg },
  ];

  const filteredTransport = transportData.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Image and Search Bar Container */}
      <div style={styles.imageContainer}>
        <img src={transportImage} alt="Transport Header" style={styles.headerImage} />

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search Transport Services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <FaSearch style={styles.searchIcon} />
        </div>
      </div>

      <p>Find the best transport services for your needs:</p>
      <div style={styles.cardContainer}>
        {filteredTransport.map(service => (
          <TransportCard
            key={service.id}
            name={service.name}
            icon={service.icon}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    backgroundImage: linear-gradient(45deg, #f0f0f0 25%, #ffffff 25%, #ffffff 50%, #f0f0f0 50%, #f0f0f0 75%, #ffffff 75%, #ffffff 100%),
    backgroundSize: "20px 20px", // Adjust size for the checkered pattern
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },
  headerImage: {
    width: "100%",
    maxWidth: "1000px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  searchContainer: {
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "50px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
  },
  searchInput: {
    border: "none",
    padding: "10px 15px",
    fontSize: "14px",
    borderRadius: "50px",
    width: "250px",
    outline: "none",
  },
  searchIcon: {
    fontSize: "18px",
    marginLeft: "10px",
    cursor: "pointer",
    color: "#333",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    marginTop: "20px",
  },
  card: {
    padding: "10px",
    borderRadius: "40px",
    backgroundColor: "#00509e",
    color: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "center",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
  },
  cardImageContainer: {
    height: "150px",
    marginBottom: "15px",
    overflow: "hidden",
    borderRadius: "10px",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardTitle: {
    marginTop: "10px",
    fontSize: "1.2rem",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#ffffff",
  },
};

export default Transport;