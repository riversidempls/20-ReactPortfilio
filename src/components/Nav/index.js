// import React from "react";
import "../../styles/nav.css";
import React from 'react';


const styles = {
  navStyle: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    height: "100px",
    padding: "2%",
    listStyleType: "none",
  },
  navFont: {
    fontSize: "40px",
  },
};




function Nav(props) {
  const {
    // categories = [],
    // setCurrentCategory,
    contactSelected,
    // currentCategory,
    setContactSelected,
    currentPage,
    handlePageChange
  } = props;






  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="../../src/assets/resume/ConorDonnellyResume.pdf"> Conor Donnelly </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li style={styles.navFont} className='nav-item'>
            <a
              href="#GIS"
              onClick={() => handlePageChange("GIS")}
              className={currentPage === "GIS" ? "nav-link active" : "nav-link"}
            >
              GIS
            </a>
          </li>
          <li style={styles.navFont} className='nav-item'>
            <a
              href="#waterQuality"
              onClick={() => handlePageChange("WaterQuality")}
              className={currentPage === "WaterQuality" ? "nav-link active" : "nav-link"}
            >
              Water Quality
            </a>
          </li>
          <li style={styles.navFont} className='nav-item'>
            <a
              href="#waterQuality"
              onClick={() => handlePageChange("WaterQuality")}
              className={currentPage === "WaterQuality" ? "nav-link active" : "nav-link"}
            >
              Private Lands Conservation
            </a>
          </li>







          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                category.name
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
