import React from 'react'
import "./index.css"
import Header from "./components/header.jsx";
import SectionSlideShow from './components/SectionSlideShow.jsx';
import Footer from './components/footer.jsx';


function App() {

  return (
       <div>
         <Header></Header>
         <SectionSlideShow></SectionSlideShow>
         <Footer></Footer>
       </div>
  )
}

export default App
