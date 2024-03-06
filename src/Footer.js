import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='text-center' style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)'
}}>
        &copy; {new Date().getFullYear()} Copyright:{' Jutta Angelma & Sravanthi Avadhanula '}
        
         
      </div>
    </footer>
  );
};

export default Footer;
