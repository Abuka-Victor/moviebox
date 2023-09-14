import Facebook from '../assets/Icons/facebook';
import Twitter from '../assets/Icons/twitter';
import Youtube from '../assets/Icons/youtube';
import Instagram from '../assets/Icons/instagram';

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-9 mt-44">
      <div className="flex sm:gap-12 gap-6">
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
      </div>
      <div className="flex sm:gap-12 gap-6">
        <p>Conditions of Use</p>
        <p>Privacy Policy</p>
        <p>Press Room</p>
      </div>
      <p>&copy; 2023 MovieBox by Victor Abuka </p>
    </div>
  );
};

export default Footer;
