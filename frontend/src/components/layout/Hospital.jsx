import React, { useState } from "react";
import { 
  FaHospital, FaHeartbeat, FaStethoscope,FaHospitalSymbol ,FaUserInjured,FaFirstAid , FaBriefcaseMedical,  FaTeeth, FaSearch 
} from "react-icons/fa";

// Correct relative import for images
import hospitalImage from "../../assets/Hospital/hospital.webp";

const HospitalCard = ({ name, icon: Icon }) => {
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
        <Icon style={styles.icon} />
        <h2 style={styles.cardTitle}>{name}</h2>
      </div>
    </div>
  );
};

const Hospitals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const hospitalData = [
    { id: 1, name: "Maternity Hospital", icon: FaHospital },
    { id: 2, name: "Children's Hospital", icon: FaHeartbeat },
    { id: 3, name: "Specialty Medical Center", icon: FaStethoscope },
    { id: 4, name: "Private Hospital", icon: FaBriefcaseMedical },
    { id: 14, name: "Veterinary Hospital", icon: FaHospitalSymbol },
    { id: 15, name: "Injury Care Center", icon: FaUserInjured },
    { id: 16, name: "First Aid Center", icon: FaFirstAid },
    { id: 18, name: "Dental Clinic", icon: FaTeeth },

  ];

  const filteredHospitals = hospitalData.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Image and Search Bar Container */}
      <div style={styles.imageContainer}>
        <img src={hospitalImage} alt="Hospital Header" style={styles.headerImage} />
        
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search Hospitals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <FaSearch style={styles.micIcon} />
        </div>
      </div>

      <p>Explore the best healthcare facilities available:</p>
      <div style={styles.cardContainer}>
        {filteredHospitals.map(hospital => (
          <HospitalCard
            key={hospital.id}
            name={hospital.name}
            icon={hospital.icon}
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
    backgroundColor:"001f3f"
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column", // Stack the image and search bar vertically
    alignItems: "center",
    justifyContent: "left",
    marginBottom: "30px",
  },
  headerImage: {
    width: "400%", 
    maxwidth: "1000px",
    height: "300px", 
    border: "auto"
  },
  searchContainer: {
    position: "absulate",
    right: "100px",
    Top: "200%",
    marginTop: "100px", // Increase this value to control the gap between the image and the search bar
    transform: "translateY(10%)",
    display: "flex",
    alignItems: "right",
    backgroundColor: "#fff",
    padding: "8px",
    borderRadius: "50px",
    boxShadow: "0px 4px 6px rgba(16, 5, 72, 0.85)",
  },
  searchInput: {
    border: "none",
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "70px",
    width: "250px",
    outline: "none",
  },
  searchIcon: {
    fontSize: "18px",
    margindown: "15px",
    cursor: "pointer",
    color: "#111",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "40px",
    marginTop: "30px",
  },
  card: {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#00509e",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "#ffffff",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "left",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
  cardTitle: {
    marginLeft: "8px",
    fontSize: "0.9rem",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#ffffff",
  },
};

export default Hospitals;
