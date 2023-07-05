import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as solidEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faLinkedin, solidEnvelope);

function Footer() {
  return (
    <div>
      <div className="w-full text-center text-gray-500  py-3 bg-gray-900 font-light mt-5">
        <p className="font-semibold">Copyright ⓒ 2023 Atharva</p>
        <div className="mt-[10px]">
          <a className="text-gray-500 text-xl mr-3 no-underline inline-block transition-transform duration-500 transform hover:text-[#9333ea] hover:-translate-y-1" href="https://www.facebook.com/atharva.mhatre.963" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="text-gray-500 text-xl mr-3 no-underline inline-block transition-transform duration-500 transform hover:text-[#9333ea] hover:-translate-y-1" href="https://twitter.com/Atharva95140673" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="text-gray-500 text-xl mr-3 no-underline inline-block transition-transform duration-500 transform hover:text-[#9333ea] hover:-translate-y-1" href="https://www.instagram.com/atharva1492/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="text-gray-500 text-xl mr-3 no-underline inline-block transition-transform duration-500 transform hover:text-[#9333ea] hover:-translate-y-1" href="https://www.linkedin.com/in/atharva-mhatre-5143b1215/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="text-gray-500 text-xl mr-3 no-underline inline-block transition-transform duration-500 transform hover:text-[#9333ea] hover:-translate-y-1" href="mailto:atharvamhatre1492@gmail.com" target="_blank">
            <FontAwesomeIcon icon={solidEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
