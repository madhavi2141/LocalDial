import React, { useState } from "react";

// Correct relative import for images
import decorationImage from "../../assets/EventOrganizer/Decoration.jpg";
import hallsImage from "../../assets/EventOrganizer/Hall.jpg";
import photographersImage from "../../assets/EventOrganizer/Photographers.jpg";
import cateringImage from "../../assets/EventOrganizer/Catering.jpg";
import invitationImage from "../../assets/EventOrganizer/invitation.jpg";
import panditsImage from "../../assets/EventOrganizer/pandit.jpg";
import footerImage from "../../assets/EventOrganizer/EventFooter.jpg";

const ServiceCard =  ({ name, image }) => {
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
      <img src={image} alt={name} style={styles.cardImage} />
      <h2 style={styles.cardTitle}>{name}</h2>
    </div>
  );
};

const EventOrganizer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { id: 1, name: "Decoration", image: decorationImage },
    { id: 2, name: "Halls", image: hallsImage },
    { id: 3, name: "Photographers", image: photographersImage },
    { id: 4, name: "Catering Service", image: cateringImage },
    { id: 5, name: "Invitation Cards", image: invitationImage },
    { id: 6, name: "Pandits", image: panditsImage },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <p style={styles.description}>
          Plan your perfect Events with our curated services:
        </p>
      </div>

      <div style={styles.cardContainer}>
        {filteredServices.map(service => (
          <ServiceCard
            key={service.id}
            name={service.name}
            image={service.image}
          />
        ))}
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search Event Services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* Footer Image */}
      <div style={styles.footerImageContainer}>
        <img src={footerImage} alt="Wedding Footer" style={styles.footerImage} />
      </div>

      {/* Bottom Description */}
      <div style={styles.bottomDescription}>
        <p>
          Our team of experts ensures a seamless experience from start to finish. 
          Explore our premium services and make your events memorable.
          Event management is the process of planning, organizing and executing events, from start to finish.
          Event managers are responsible for ensuring that events run smoothly and meet their objectives. 
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#F8F8F8",
    padding: "20px",
  },
  headerContainer: {
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "10px",
    margin: "20px auto",
    width: "fit-content",
  },
  description: {
    fontSize: "20px",
    margin: "20px 0",
    fontWeight: "bold",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  cardHover: {
    transform: "scale(1.1)",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  cardTitle: {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    border: "none",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "25px",
    width: "300px",
    outline: "none",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  searchInputHover: {
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },
  footerImageContainer: {
    marginTop: "30px",
    width: "100%",
  },
  footerImage: {
    width: "300%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  bottomDescription: {
    marginTop: "30px",
    fontSize: "16px",
    color: "#555",
  },
  footerSection: {
    marginTop: "30px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
  },
};

export default EventOrganizer;
