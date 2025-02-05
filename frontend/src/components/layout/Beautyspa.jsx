import React, { useState } from "react";
import { 
  FaSpa, FaHotTub, FaPaintBrush, FaAccusoft, FaGem, FaSmileBeam 
} from "react-icons/fa";

// Correct relative import for images
import spaImage from "../../assets/Beautyspa/spaHeader.jpg";
import relaxingSpaImage from "../../assets/Beautyspa/RelaxingSpa.jpeg";
import hotTubImage from "../../assets/Beautyspa/hotTubSpa.webp";
import nailArtImage from "../../assets/Beautyspa/nailArt.webp";
import hairStylingImage from "../../assets/Beautyspa/hairStyling.jpg";
import jewelrySpaImage from "../../assets/Beautyspa/JwellarySpa.jpeg";
import smileMakeoverImage from "../../assets/Beautyspa/SmileMakeover.jpeg";

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

const Beautyspa = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const services = [
    { id: 1, name: "Relaxing Spa", icon: FaSpa, image: relaxingSpaImage },
    { id: 2, name: "Hot Tub Therapy", icon: FaHotTub, image: hotTubImage },
    { id: 3, name: "Nail Art", icon: FaPaintBrush, image: nailArtImage },
    { id: 4, name: "Hair Styling", icon: FaAccusoft, image: hairStylingImage },
    { id: 5, name: "Jewelry Spa", icon: FaGem, image: jewelrySpaImage },
    { id: 6, name: "Smile Makeover", icon: FaSmileBeam, image: smileMakeoverImage },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Image and Search Bar Container */}
      <div style={styles.imageContainer}>
        <img src={spaImage} alt="Beauty Spa Header" style={styles.headerImage} />
        
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search Beauty Services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      <p style={styles.description}>Discover the best beauty and relaxation services tailored just for you:</p>
      <div style={styles.cardContainer}>
        {filteredServices.map(service => (
          <ServiceCard
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
    color: "#333",
    backgroundColor: "#F4C2C2"
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
  headerImage: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  searchContainer: {
    position: "relative",
    marginTop: "70px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "50px",
    boxShadow: "0px 4px 6px rgba(39, 13, 171, 0.88)",
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
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "150px",
    padding: "10px",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#001f3f",
    boxShadow: "0 4px 6px rgba(12, 9, 96, 0.96)",
    color: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "center",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 10px rgba(18, 14, 14, 0.2)",
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

export default Beautyspa;
