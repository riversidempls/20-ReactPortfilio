import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
// import Header from './components/Header';
// import Projects from './components/Projects';



function App() {
  const [categories] = useState([
    {
      name: 'GIS',
      description: 'Projects highlighting my experience with GIS.',
    },
    { name: 'Water Quality', description: 'Projects aimed to improve water quality for all Minnesotans.' },
    { name: 'Grants Administration', description: 'Projects to integrate digital document signing with grants administration.' },
    { name: 'Private Lands Conservation', description: 'Projects working to secure voluntary conservation easements on private land.' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
