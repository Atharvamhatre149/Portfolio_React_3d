import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import {styles} from '../style';
import { services } from '../constants';
import {fadeIn ,  textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard =({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right","spring",0.5*index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        > 
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}

            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
            />   
             <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>                       
          </div>

        </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>
      </motion.div>

      <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-4  text-secondary text-[16px] max-w-5xl leading-[28px]'
      >
        Hi there! I'm Atharva Vinayak Mhatre, a computer engineering student at Mumbai University, set to graduate in 2024. I'm passionate about solving complex problems and exploring the world of data structures and algorithms. As I work towards my goal of becoming a full-stack developer, I'm constantly learning and expanding my skillset.
Currently, I'm focused on mastering the MERN stack and developing my abilities as a web developer. I'm eager to take on new challenges and collaborate on exciting projects that push the boundaries of what's possible with technology.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10" >
        {
          services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service} />
           ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")