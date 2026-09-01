import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Header from "../User/pages/components/Header";
import Footer from "../User/pages/components/Footer";
import { FaSearch } from "react-icons/fa";
function Home() {
  const [loadStatus, setLoadStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadStatus(false);
    }, 2000);
  }, []);

  return (
    <>
      {
      loadStatus ? (
        <Preloader />
      ) : (

        <>
         <Header />
            <div>
              {/* hero section */}
              <section className='w-full'>
                <div className="h-[80vh] bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D')]
                bg-no-repeat bg-cover bg-fixed bg-center">
                  <div className='text-white bg-[rgba(0,0,0,0.3)] h-full flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-5xl'>Wonderful Gifts</h1>
                    <h4 className=' text-lg md:text-3xl '>Give your Family and Friends a book</h4>
                    <div className='relative'>
                      <input type='text' placeholder='Search for books' className=' bg-white text-gray-700 rounded-3xl'/>
<FaSearch className='absolute text-black right-4 top-1/2 -translate-y-1/2'/>                    </div>
                  </div>
                </div>
              </section>
              {/* new arrivals */}
              <section className='w-full my-3 '>
                <h1 className='text-3xl text-center mb-4'>New Arrivals</h1>
                <h4 className='text-lg text-center mb-4'>Check out our latest additions!</h4>
                <div className='flex flex-wrap gap-4 justify-around'>
                  {/* card */}
                  <div clasName="w-[16rem] shadow-2xl">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA539xYtxbtfoXg1yG4tsKK04wyVfkZfCY6LQHQeYFRV0oc6u_E1GZKaV5&s=10"
                    alt="Harry Potter" className='h-75 w-full'/>
                    <h1 className='text-center my-2'>Harry Potter</h1>
                    <h1 className='bg-blue-400 text-white text-center'>$19.99</h1>
                  </div>
                   </div>
                  <div className='text-center mt-4'>
                    <button className='bg-orange-400 text-white py-2 px-3'>Explore More...
                    </button>
                  </div>
                </section>
                {/* authors */}
                <section className='w-full my-3'>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2'>
                  <div>
                    <h1 className='text-center text-xl'>FEATURED AUTHORS</h1>
                    <h1 className="text-center text-2xl">CAPTIVATE WITH EVERY WORDS</h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, esse mollitia voluptatum ducimus quae ex? Aperiam expedita reiciendis maxime magni eius illum est possimus, animi dolore eligendi, dolor, hic necessitatibus.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem accusantium minus dolore libero eum assumenda pariatur quo ipsum aliquid. Veniam, minus debitis. Quasi unde expedita consequatur illum non porro.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus mollitia, ullam accusamus repudiandae nihil ea soluta perferendis in veritatis repellat praesentium vitae, fuga maiores porro architecto odit quis consequatur
                    </p>
                  </div>
                  <div className="px-3 items-center">
                    <img src='https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM=' className="w-full"/>
                  </div>
                  </div>
                </section>
                {/* testimony */}
                <section className="w-full px-5">
                  <h1 className="text-center text-xl">TESTIMONALS</h1>
                  <h1 className="text-center my-2 text-3xl">SEE WHAT OTHER PEOPLE ARE SAYING</h1>
                  <div className="flex flex-col items-center mb-3">
                             <img src='https://media.istockphoto.com/id/1954638030/photo/beautiful-woman-working-in-a-creative-studio.jpg?s=612x612&w=0&k=20&c=wt8T6hbPbd1hyYarORw92TmFASRjYuekpyP1grXFCR4=' alt="author image" className="w-75 h-75 rounded-full "/>
                    </div>
                    <div>
                                      <h1>John Doe</h1>
                                      <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi dicta accusantium impedit ducimus cupiditate aliquid explicabo sunt amet repellat, tempora, cumque ab dolorum debitis sapiente. Similique sed excepturi doloremque!
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestiae nulla nesciunt quaerat quisquam eligendi illo animi non eos iure libero, repellat ipsum architecto voluptate et cum expedita delectus. Adipisci.
                                      </p>

                  </div>
                </section>
            </div>
            <Footer />
        </>
      )}
    </>
  );
}

export default Home;
