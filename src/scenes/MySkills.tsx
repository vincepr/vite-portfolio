import LineGradient from "../components/LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

export default function MySkills(){
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return(
        <section id="skills" className="pt-10 pb-24">
            {/** Header + Img */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div className="md:w-1/3"
                    initial="hidden" whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} transition={{duration: 0.5}}
                    variants={{
                        hidden:  {opacity: 0, x: -50},
                        visible: {opacity: 1, x:0},
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        My <span className="text-red"> SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3"/>
                    <p className="mt-10 mb-7">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; 
                    </p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img className="z-10" alt="skills" src="src/assets/skills-image.png"/>
                        </div>
                    ):(
                        <img className="z-10" alt="skills" src="src/assets/skills-image.png"/>
                    )}
                </div>
            </div>
            {/** Skills section */}
            <div className="md:flex md:justify-between mt-16 gap-32">


                {/** 1-Experience element*/}
                <motion.div className="md:w-1/3 mt-10"
                    initial="hidden" whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} transition={{duration: 0.5}}
                    variants={{
                        hidden:  {opacity: 0, y: 50},
                        visible: {opacity: 1, y:0},
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>

                    </div>
                    <p className="mt-5">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                    </p>
                </motion.div>


                {/** 1-Innovative element*/}
                <motion.div className="md:w-1/3 mt-10"
                    initial="hidden" whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden:  {opacity: 0, y: 50},
                        visible: {opacity: 1, y:0},
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>

                    </div>
                    <p className="mt-5">
                    One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didnt listen.
                    </p>
                </motion.div>


                {/** Immaginative element*/}
                <motion.div className="md:w-1/3 mt-10"
                    initial="hidden" whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                        hidden:  {opacity: 0, y: 50},
                        visible: {opacity: 1, y:0},
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Immaginative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>

                    </div>
                    <p className="mt-5">
                        he packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                    </p>
                </motion.div>


            </div>
        </section>
    )

}