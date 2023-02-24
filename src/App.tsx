import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import Landing from "./scenes/Landing"
import Navbar from "./scenes/Navbar"
import ScrollIndicator from "./scenes/ScrollIndicator"
import LineGradient from "./components/LineGradient"
import Projects from "./scenes/Projects"
import Contact from "./scenes/Contact"
import References from "./scenes/References"
import MySkills from "./scenes/MySkills"
import Footer from "./scenes/Footer"

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setisTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  /*handles scrolling to know if were at the top to show navbar*/
  useEffect(() => {
    function handleScroll(){
      if (window.scrollY === 0) setisTopOfPage(true)
      if (window.scrollY !== 0) setisTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll) //cleanup
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
       />
       <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <ScrollIndicator 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
       </div>
       <LineGradient />
       <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
       </div>
       <LineGradient/>
       <div className="w-5/6 mx-auto">
        <Projects />
       </div>
       <LineGradient/>
       <div className="w-5/6 mx-auto md:h-full">
        <References />
       </div>
       <LineGradient/>
       <div className="w-5/6 mx-auto md:h-full">
        <Contact />
       </div>
       <Footer/>
    </div>
  )
}

export default App
