import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*left side*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:-2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            fugiat praesentium inventore sit commodi vero odit reprehenderit
            libero maxime, quaerat blanditiis quis magnam dolore autem veniam
            nostrum nisi tenetur odio.
          </p>
        </div>

        {/*center section*/}
        <div className=''>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*right side*/}
        <div className=''>
          <p className='text-xl font-medium mb-5'>Get in touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 891978409</li>
            <li>wabisabi@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="">
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
