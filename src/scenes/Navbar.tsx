import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"

//interface Navbar{
//    selectedPage:string,
//    setSelectedPage:React.Dispatch<React.SetStateAction<string>>,
//}

export default function Navbar({isTopOfPAge, selectedPage, setSelectedPage}:any){
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
    const navbarBackground = isTopOfPAge ? "" : "bg-red"    

    return (
        <nav className={`z-40 w-full fixed top-0 py-6 ${navbarBackground}`}>
            <div className="flex items-center justify-between mx-auto w-5/6"> 
                <h4 className="font-playfair text-3xl font-bold">Esper</h4>

                {/** Dektop NAV*/}
                {isAboveSmallScreens ? (<div>
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Links selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                </div>) : (
                <button 
                    className="rounded-full bg-red p-2"
                    onClick={()=>setIsMenuToggled(!isMenuToggled)}
                >
                    <img alt="menu-icon" src="assets/menu-icon.svg" />
                </button>)}

                {/* Mobile Menu-POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* close ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                                <img alt="menu-icon" src="assets/close-icon.svg" />
                            </button>
                        </div>

                        {/* Mobile Menu-ITEMS*/}
                        <div className="flex flex-col gap-10 ml-[30%] text-2xl text-deep-blue">
                            <Links selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

function Links({page, selectedPage, setSelectedPage}:any){
return <>
        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Link page="References" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </>
}

function Link({page, selectedPage, setSelectedPage}:any){
    const lowerCasePage = page.toLowerCase()
    return(
        <AnchorLink
            className={`${selectedPage===lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={()=> setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}