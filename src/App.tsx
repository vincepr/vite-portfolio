import { Children, useEffect, useState } from "react"
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
import { motion } from "framer-motion"

export default function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setisTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  /*handles scrolling to know if were at the top to show navbar*/
  useEffect(() => {
    function handleScroll(){
      if (window.scrollY === 0) {
        setSelectedPage("home")
        setisTopOfPage(true)
      }
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
		<UpdateScroll page={"home"} setSelectedPage={setSelectedPage}>
			<Landing setSelectedPage={setSelectedPage}/>
		</UpdateScroll>
		</div>
		<LineGradient />
		
		<div className="w-5/6 mx-auto md:h-full">
			<UpdateScroll page={"skills"} setSelectedPage={setSelectedPage}>
				<MySkills/>
			</UpdateScroll>
		</div>
		<LineGradient/>
		
		<div className="w-5/6 mx-auto">
			<UpdateScroll page={"projects"} setSelectedPage={setSelectedPage}>
				<Projects />
			</UpdateScroll>
		</div>
		<LineGradient/>
		<div className="w-5/6 mx-auto md:h-full">
			<UpdateScroll page={"references"} setSelectedPage={setSelectedPage}>
				<References />
			</UpdateScroll>
		</div>
		<LineGradient/>
		<div className="w-5/6 mx-auto md:h-full">
			<UpdateScroll page={"contact"} setSelectedPage={setSelectedPage}>
				<Contact />
			</UpdateScroll>
			</div>
		<Footer/>
	</div>
  )
}


// wrap the conent of the pages in this to make the page-status update and with it the dot-scroll indicator (only shown in widescreen)
function UpdateScroll({children, page, setSelectedPage}:any){
  return <motion.div
  onViewportEnter={() => setSelectedPage(page)}
>{children}</motion.div>
}
