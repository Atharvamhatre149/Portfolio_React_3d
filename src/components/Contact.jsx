import { useState, useRef } from "react";
import {motion} from 'framer-motion';
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// FptKVBFvME9GU7p_H
// template_0p9m4n5
// service_3ikmrp9
const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;

    setForm({...form,[name]:value})
    console.log(form);  

  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      emailjs.send(
        'service_3ikmrp9',
        'template_0p9m4n5',
        {
          from_name:form.name,
          to_name:'Atharva',
          from_email:form.email,
          to_email:'atharvamhatre1492@gmail.com',
          message:form.message,

        },
        'FptKVBFvME9GU7p_H'
        ).then(()=>{
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name:'',
            email:'',
            message:'',
          })
        },(error)=>{
          setLoading(false);
          console.log(error);
          alert('Something went Wrong.');

        })

  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left',"tween",0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name </span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's Your Name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
          </label>
          <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email </span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's Your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
          </label>
          <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message </span>
              <textarea rows="5" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
          </label>
          <button 
              type="submit"
              className="bg-[#9333ea] hover:bg-[#6b21a8] transition duration-300 ease-in-out py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading?'Sending' : "send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right',"tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");