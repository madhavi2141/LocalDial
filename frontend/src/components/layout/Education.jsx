import React, { useState } from "react";
import { FaUniversity, FaPalette, FaChalkboardTeacher, FaGraduationCap, FaSearch } from "react-icons/fa";

// Correct relative import for images
import educationImage from "../../assets/Education/Education.jpg";

// Placeholder images for cards
import collegeImg from "../../assets/Education/College.jpg";
import schoolImg from "../../assets/Education/school.jpg";
import classesImg from "../../assets/Education/Classes.jpg";
import academyImg from "../../assets/Education/academy.jpg";

const EducationCard = ({ name, icon: Icon, image }) => {
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
      <img src={image} alt={`${name} Image`} style={styles.cardImage} />
      </div>
      {/* Card Header */}
      <div style={styles.cardHeader}>
        <Icon style={styles.icon} />
        <h2 style={styles.cardTitle}>{name}</h2>
      </div>
    </div>
  );
};

const Education = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const educationData = [
    { id: 1, name: "Colleges", icon: FaUniversity, image: collegeImg },
    { id: 2, name: "Schools", icon: FaPalette, image: schoolImg },
    { id: 3, name: "Classes", icon: FaChalkboardTeacher, image: classesImg },
    { id: 4, name: "Academies", icon: FaGraduationCap, image: academyImg },
  ];

  const filteredInstitutions = educationData.filter(institution =>
    institution.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Image and Search Bar Container */}
      <div style={styles.imageContainer}>
        <img src={educationImage} alt="Education Header" style={styles.headerImage} />

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search Educational Programs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <FaSearch style={styles.searchIcon} />
        </div>
      </div>

      <p>Discover top educational institutions and programs:</p>
      <div style={styles.cardContainer}>
        {filteredInstitutions.map(institution => (
          <EducationCard
            key={institution.id}
            name={institution.name}
            icon={institution.icon}
            image={institution.image}
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

export default Education;