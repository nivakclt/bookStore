import { IoIosSend } from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6";

import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import Footer from "./components/Footer";
import Header from "./components/Header";

function Contact() {
  return (
    <div>
      <Header />
      {/* Contact Page */}
      <div className='w-full'>
          <section className='w-full px-30 my-3'>
            <h2 className='text-4xl text-center font-bold mb-4'>Contact</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
      </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="bg-amber-600 text-white p-4 rounded-full">
                <FaLocationDot className="text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600 text-sm">
                  BookStore Info, ABC 123, London
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="bg-amber-600 text-white p-4 rounded-full">
                <FaPhone className="text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +91 34567 89097
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="bg-amber-600 text-white p-4 rounded-full">
                <FaEnvelope className="text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 text-sm">
                  info@bookstore.com
                </p>
              </div>
            </div>

          </div>

      <div className='w-full grid sm:grid-cols-1 md:grid-cols-2  gap-4'>
        <div className='bg-white shadow-lg rounded-xl p-8'>
          <div className='bg-gray-300 px-5 py-5'>
          <h1 className='text-xl text-center my-3'>Send Us a Message</h1>
          <input type="text" placeholder='Name' className='w-full mb-3 p-3 border-gray-300 rounded'/>
          <input type="text" placeholder='Email' className='w-full mb-3 p-3 border-gray-300 rounded'/>
          <textarea name="" placeholder='Message' className='w-full mb-3 p-3 border-gray-300rounded'/>
          <button className='bg-amber-600 w-full text-white px-4 py-2 rounded hover:bg-amber-700 flex justify-center gap-1 items-center'>Send Message{' '}<IoIosSend/></button>
          </div>
        </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0329717590985!2d75.78116170894388!3d11.258984788874423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20training%20institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1788259374635!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Location"
              ></iframe>
            </div>        
            </div>
      <Footer />
    </div>
  )
}

export default Contact