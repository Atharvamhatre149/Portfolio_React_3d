import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion";

import { styles } from "../style";
import { git, github,linkweb } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";


const ProjectCard = ({index,name,description,tags,image,source_code_link,website_link}) =>{
  console.log(website_link);
    return(
      <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,

            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img src={image} alt={name} 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute gap-2 inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open
                  (source_code_link,"_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex  justify-center items-center cursor-pointer "
                >
                  <img src={github} alt='github' className="w-1/2 h-1/2 object-contain"  />
                </div>

                { website_link!==undefined && <div
                  onClick={() => window.open
                  (website_link,"_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex  justify-center items-center cursor-pointer "
                >
                  <img src={linkweb} alt='github' className="w-1/2 h-1/2 object-contain"  />
                </div>}
                
                
              </div>
            </div>
            <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px]" >{name}</h3>
                  <p className="mt-2 text-secondary text-[15px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag)=>(
                  <p key={tag.name} className={`text-[14px] ${tag.color} `}>
                    #{tag.name}
                  </p>
                ))}
            </div>
          </Tilt>
      </motion.div>
    )
}

const Works = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>
            Projects.
          </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[28px]"
        >
          Prepare to be captivated by an array of fascinating projects that showcase my skills and experience. Each project is accompanied by brief descriptions, links to code repositories, and live demos. You'll witness my ability to solve complex problems, work with various technologies, and manage projects effectively. Get ready for an intriguing journey through my accomplishments!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
          {
            projects.map((project,index)=>(
              <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}/>
            ))
          }

      </div>
    </>
  )
}

export default SectionWrapper(Works,"works")