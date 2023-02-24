import {motion} from "framer-motion"
import LineGradient from "../components/LineGradient"


const container = {
    hidden: {},
    visible: {
        transition:{staggerChildren: 0.2}
    },
}

const projectVariant ={
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity:1, scale: 1},
}


export default function Projects(){
    return(
        <section id="projects" className="pt-48 pb-48">
            {/** Headings */}
            <motion.div className="md:w-2/5 mx-auto text-center"
                initial="hidden" whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5}}
                variants={{
                    hidden:  {opacity: 0, y: -50},
                    visible: {opacity: 1, y:0},
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3"/>
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; 
                </p>
            </motion.div>
            {/** Projects */}
            <div className="flex justify-center">
                {/** if smallscreens -> grid based */}
                <motion.div className="sm:grid sm:grid-cols-3 "
                    initial="hidden" whileInView="visible" 
                    viewport={{once:true, amount: 0.2}} 
                    transition={{duration: 0.5}}
                    variants={container}
                >
                    {/** Row 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
                            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1" />
                    <Project title="Project 2" />

                    {/** Row 2 */}
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    {/** Row 3 */}
                    <Project title="Project 6" />
                    <Project title="Project 7" />
                    
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


function Project({title="How to Build a Website"}){
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projTitle = title.split(" ").join("-").toLocaleLowerCase()
    return(
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
                </p>
            </div>
            <img src= {`/src/assets/${projTitle}.jpeg`} alt={projTitle}/>
        </motion.div>
    )
}