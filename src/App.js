import './App.css';
import logoNav from "./assest/logo/Rectangle.svg";
import img1 from "./assest/Group 114.svg";
import bg1 from "./assest/Dots.png";
import top from "./assest/top.svg";
import one from "./assest/one.svg";
import two from "./assest/two.svg";
import twitter from "./assest/Vector.svg";
import world from "./assest/linkdin.svg";
import call from "./assest/call.svg";
import linkdin from "./assest/Group.svg";
import three from "./assest/three.svg";
import star from "./assest/Group 85.png";

function App() {
  return (
    <div className="App">
      <header className='mx-3'>
        <nav className='flex flex-wrap items-center w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white justify-between'>
          <div>
            <a href='/'>
              <img src={logoNav} alt="error" />
            </a>
          </div>
          <div>
            <ul className='pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0'>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400 font-sans font-semibold text-lg" href="/">
                  Skip the hassle
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400 font-sans font-semibold text-lg" href="/">
                Cruise through backend
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className='text-stone-50 px-5 py-2 rounded-xl font-bold text-lg bg-blue-700'>
              Get Started
            </button>
          </div>
        </nav>
      </header>
      <body className='pt-6 mt-8' style={{ backgroundImage: `url(${bg1})`, backgroundRepeat:'repeat'}}>
        <div className='grid grid-cols-5 gap-4' >
          <div className='col-span-3' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div >
              <h1 className='font-bold text-left' style={{fontSize:70}}>Integrate APIs <br/> In Minutes</h1>
              <p className='font-bold text-lg text-left' style={{fontSize:24}}>Get ridiculously creative with your products <br/> and let us do the hard work for you!</p>
              <div className='text-left mt-5'>
                <input type="text" placeholder='email@example.com' class="border-2 border-blue-700 rounded-l-lg text-pink-500 px-5 py-2" />
                <button type='submit' className='text-stone-50 px-5 py-2 mt-2 rounded-r-lg font-bold text-lg bg-blue-700 '>
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <img src={ img1 } alt="error"/>
          </div>
        </div>
        <div className='bg-white drop-shadow-lg border-2 border-t-dark-800 mt-8 p y-10' style={{borderRadius: "20px 20px 0px 0px", paddingBottom:100}}>
          <div className="grid grid-cols-8 gap-4 pt-10 mt-5">
            <div className="col-start-3 col-span-4">
              <p className='font-500 text-lg text-center' style={{fontSize:22, fontFamily:" poppins"}}>
                We understand your needs to <span className='bg-yellow-300'>build integrated applications</span> in today’s 
                hyper-connected world. <span className='bg-yellow-300'>Skip the hassle</span> to repeat a cumbersome process 
                <span className='bg-yellow-300'>for each unique integration.</span> Join us to build reliable connections with 
                multiple providers and <span  className='bg-yellow-300'>cruise through backend</span> with ease.
              </p>
              <img className='fluid py-10' src={ top } alt="error"/>
            </div>
          </div>
          <div className='py-5'>
            <h1 className='font-bold' style={{fontSize:45}}><span className='text-blue-600'>Skip</span> the hassle.</h1>
            <div className='grid grid-cols-8 gap-4'>
              <div className='col-start-2 col-span-6'>
                <img className='fluid py-10' src={ star } alt="error"/>
              </div>
            </div>
          </div>
          <div className='py-5'>
            <h1 className='font-bold' style={{fontSize:45}}><span className='text-blue-600'>Cruise  </span> through backend.</h1>
            <div class="grid grid-cols-2 gap-4 py-10 mt-10">
              <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-3'>
                      <h1 className='font-bold text-left' style={{fontSize:25}}>Choose from<br/>100+ integrations.</h1>
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-4'>
                      <p className='font-500 text-lg text-left' style={{fontSize:20, fontFamily:" poppins"}}>
                        Vade Studio is designed to work seamlessly with your favourite databases or web services. 
                        <b>Tweak a template or start from scratch.</b> We've baked-in over 100 integrations directly into 
                        the platform, so you can integrate quickly and easily with other services, databases and applications out there.   
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='grid grid-cols-6 gap-4'>
                  <div className='col-start-2 col-span-4'>
                    <img className='fluid py-10' src={ one } alt="error"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div className='grid grid-cols-6 gap-4'>
                  <div className='col-start-2 col-span-4'>
                    <img className='fluid py-10' src={ two } alt="error"/>
                  </div>
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-3'>
                      <h1 className='font-bold text-left' style={{fontSize:25}}>Configure & Connect.</h1>
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-4'>
                      <p className='font-500 text-lg text-left' style={{fontSize:20, fontFamily:" poppins"}}>
                        Get all of your <b>data sources connected into a content mesh, in the same place, in real time.</b>
                        This provides you a unified API for data navigation across all your integrated services. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-3'>
                      <h1 className='font-bold text-left' style={{fontSize:25}}>Test. Build. Deploy.</h1>
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-4'>
                      <p className='font-500 text-lg text-left' style={{fontSize:20, fontFamily:" poppins"}}>
                        <b>Play around with the generated APIs.</b> Once configured – test, build and deploy the unified API 
                        into our secure and reliable infrastructure.<br/><br/>Run your queries in the editor and use our intuitive 
                        interface to <b>navigate through your data - clean, organised & at your fingertips.</b>   
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='grid grid-cols-6 gap-4'>
                  <div className='col-start-2 col-span-4'>
                    <img className='fluid py-10' src={ three } alt="error"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4 pt-10 mt-5">
              <div className="col-start-3 col-span-4">
                <img className='fluid py-10' src={ top } alt="error"/>
                <p className='font-500 text-lg text-center' style={{fontSize:22, fontFamily:" poppins"}}>
                  We're building an ecosystem where <span className='bg-yellow-300'>anyone can get inspired</span> with application templates, discover novel ideas from top builders, 
                  and <span className='bg-yellow-300'>publish revolutionary applications</span> that could <span className='bg-yellow-300'>change the world.</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4 pt-10 mt-5">
              <div className="col-start-3 col-span-4">
                <div className='mt-5'>
                  <input type="text" placeholder='email@example.com' class="border-2 border-blue-700 rounded-l-lg text-pink-500 px-5 py-2" />
                  <button type='submit' className='text-stone-50 px-5 py-2 mt-2 rounded-r-lg font-bold text-lg bg-blue-700 '>
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className='bg-black text-white' style={{paddingTop:30, paddingBottom:30}}>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <p className='font-500 text-lg text-center' style={{fontSize:18, fontFamily:" poppins"}}>© 2022 Vade Labs Pvt. Ltd.</p>
          </div>
          <div>
            <p className='font-500 text-lg text-center text-gray-400' style={{fontSize:18, fontFamily:" poppins"}}>About Us</p>
          </div>
          <div>
            <p className='font-500 text-lg text-center text-gray-400' style={{fontSize:18, fontFamily:" poppins"}}>Contact Us</p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 py-10'>
          <div className='flex justify-center'>
            <img className='px-2' src={ twitter } alt="error" width={50} height={50}/>
            <img className='px-2' src={ linkdin } alt="error" width={50} height={50}/>
          </div>
          <div>
            <p className='font-500 text-lg text-center' style={{fontSize:18, fontFamily:" poppins"}}>
              We're a group of enthusiasts who love helping creatives build software applications.
            </p>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-start-2 col-span-2'>
                <div className='flex flex-row'>
                  <img className='px-2' src={ world } alt="error" width={40} height={40}/>
                  <p className='font-500 text-lg  text-white' style={{fontSize:18, fontFamily:" poppins"}}>hello@vadelabs.com</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-4 pt-3'>
              <div className='col-start-2 col-span-2'>
                <div className='flex flex-row'>
                  <img className='px-2' src={ call } alt="error" width={40} height={40}/>
                  <p className='font-500 text-lg  text-white' style={{fontSize:18, fontFamily:" poppins"}}>+91-7829887887</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
