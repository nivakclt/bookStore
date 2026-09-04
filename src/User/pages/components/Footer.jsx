import {
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      <div>
        <h4 className="text-md font-bold mb-3">ABOUT US</h4>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h4 className="text-md font-bold mb-3">NewsLetter</h4>
        <p className="mb-2">Stay updated with our latest news and offers!</p>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-white text-black"
          />
          <button className=" bg-amber-950 py-2 px-1 border-2 border-grey-600">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div>
        <h4 className="text-md font-bold mb-3">Follow Us</h4>
        <p className="mb-2">
          Follow us on social media for the latest updates!
        </p>
        <div className="flex items-center gap-2">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
