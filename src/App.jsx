import { useState } from 'react'
import './App.css'
function App() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      

      <div className="min-h-screen bg-gradient-to-br from-[#e0d4f7] via-[#fbe5f0] to-[#fef6e5]">
        {/* --------------------Navbar-----------------  */}
        <div id='nav' className="hidden md:block w-fit fixed top-5 left-1/2 -translate-x-1/2">
          <ul className='flex justify-center text-lg text-gray-500 py-1 bg-white shadow-lg rounded-full  px-8 gap-5  '>
            <a href='#' className='hover:text-black cursor-pointer hover:bg-gray-100 rounded-full py-1 px-4 transition-all ease-in duration-100 delay-100 '>Home</a>
            <a href='#aboutsp' className='hover:text-black cursor-pointer hover:bg-gray-100 rounded-full py-1 px-4 transition-all ease-in duration-100 delay-100 '>About</a>
            <a href='#projectssp' className='hover:text-black cursor-pointer hover:bg-gray-100 rounded-full py-1 px-4 transition-all ease-in duration-100 delay-100 '>Projects</a>
            <a href='#skillssp' className='hover:text-black cursor-pointer hover:bg-gray-100 rounded-full py-1 px-4 transition-all ease-in duration-100 delay-100 '>Skills</a>
            <a href='#experiencesp' className='hover:text-black cursor-pointer hover:bg-gray-100 rounded-full py-1 px-4 transition-all ease-in duration-100 delay-100 '>Experience</a>
            <a href='#contactsp' className='hover:text-black cursor-pointer hover:bg-gray-100 rounded-full py-1 px-4 transition-all ease-in duration-100 delay-100 '>Contact</a>
          </ul>
        </div>
 
        {/* Hamburger menu */}
        <div className='h-10 bg-[#ffffff5d] w-full flex justify-around items-center md:hidden fixed top-0 left-0 z-50'>
          <div>SUJAL PALIWAL</div>
          <div><i id='menubtn' class="fa-solid fa-bars" onClick={() => setMobile(!mobile)}></i></div>
        </div>
        <div id="menulist" className={`w-full bg-[#ffffff36] relative top-10 ${(mobile)? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0' } transition-all ease-in duration-1000 `} > 
          <ul className='flex flex-col justify-center items-center gap-1'>
            <li><a className='hover:underline' href="#" onClick={() => setMobile(!mobile)}>Home</a></li>
            <li><a className='hover:underline' href="#aboutsp">About</a></li>
            <li><a className='hover:underline' href="#projectssp">Projects</a></li>
            <li><a className='hover:underline' href="#skillssp">Skills</a></li>
            <li><a className='hover:underline' href="#experiencesp">Experience</a></li>
            <li><a className='hover:underline' href="#contactsp">Contact</a></li>
          </ul>
        </div>


        {/* --------------------Hero Section-----------------  */} 
        <div id='home' className='flex flex-col items-center pt-20'>
          <img className='w-25 h-25 rounded-full ' src="sp.jpg" alt="profile" />
          <p className='text-[24px] md:text-[36px]  font-bold mt-7'>Hello, I'm Sujal Paliwal </p>
          <p className='text-[24px] md:text-[36px]  text-red-500'>Full-Stack Developer</p>
          <p className='text-[24px] md:text-[36px] '>I love building website with</p>
          <p className='text-[24px] md:text-[36px]  underline font-medium'>React and Node.js</p>
          <div className="button mt-10 flex gap-2 md:gap-4">
            <a href="#contact" className='border rounded-full px-4 py-2 text-sm md:text-xl bg-black text-white flex gap-3 items-center'>Contact me here<i class="fa-solid fa-arrow-right"></i></a>
            <a href="resume.pdf" target='_blank' download="SujalPaliwalResume.pdf" className='border rounded-full px-4 py-2 text-sm md:text-xl flex gap-3 items-center'>Download CV<i class="fa-solid fa-download"></i></a>
            <a href="https://www.linkedin.com/in/sujal-paliwal-a0a49927b" target='_blank' className='hidden md:flex border rounded-full text-2xl  items-center justify-center w-12 h-12'><i class="fa-brands fa-linkedin "></i></a>
            <a href="https://www.github.com/SUJALPALIWAL00" target='_blank' className='hidden md:flex border rounded-full text-2xl items-center justify-center w-12 h-12'><i class="fa-brands fa-square-github"></i></a>
          </div>
        </div>


        {/* --------------------sepration-----------------  */}
        <div id='aboutsp' className="w-1 h-15 border border-gray-200 bg-gray-200 mx-auto shadow rounded-md my-20"></div>


        {/* --------------------About Section-----------------  */}
        <div id="about" className='flex flex-col items-center  md:w-[50vw] w-[90vw] mx-auto'>
          <div className='font-bold text-3xl '>About Me</div>
          <div>
            <p className='text-[16px] md:text-[20px] text-center mt-5' >Hi, I'm <span class="font-semibold text-red-600">Sujal Paliwal</span> — a passionate and creative web developer with a strong foundation in front-end and back-end technologies. I enjoy turning ideas into functional and beautifully designed websites.</p>
            <p className='text-[16px] md:text-[20px] text-center mt-5' >Over time, I've developed hands-on experience with <span class="font-medium text-gray-900">HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React.js</span> and more. I’ve also started exploring backend technologies like <span class="font-medium text-gray-900">Node.js, Express.js, and MongoDB</span> to build full-stack applications.</p>
            <p className='text-[16px] md:text-[20px] text-center mt-5' >I'm constantly learning, building, and pushing my skills forward. My goal is to contribute to innovative projects, collaborate with talented teams, and create web experiences that make an impact.</p>
          </div>
        </div>


        {/* --------------------sepration-----------------  */}
        <div id='projectssp' className="w-1 h-15 border border-gray-200 bg-gray-200 mx-auto shadow rounded-md my-20"></div>


        {/* --------------- Projects Section --------------- */}
        <div id="project" className='flex flex-col items-center md:w-[75vw] w-[90vw] mx-auto'>
          <div className='font-bold text-3xl '>Projects</div>
          <div className="cards mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card1 bg-gradient-to-br from-[#e8dad2] to-[#fbe5f0]  shadow-md rounded-lg flex flex-col gap-3">
              <img src="weather.webp" alt="Project 1" className='h-60 object-cover rounded-md' />
              <div className="card-content pl-2">
                <h3 className='text-xl font-semibold'>Weather App</h3>
                <p className='text-gray-600'>Fetched real-time weather data using OpenWeatherMap API and displayed it with a user-friendly UI.</p>
                <a href="https://github.com/SUJALPALIWAL00/Weather-App.git" target="_blank" className='text-blue-500 hover:underline'>View Project</a>
              </div>
            </div>
            <div className="card2 bg-gradient-to-br from-[#e8dad2] to-[#fbe5f0]  shadow-md rounded-lg flex flex-col gap-3">
              <img src="todo.webp" alt="Project 2" className='h-60 object-cover rounded-md' />
              <div className="card-content pl-2">
                <h3 className='text-xl font-semibold'>To-Do Web App</h3>
                <p className='text-gray-600'>Created a task management app with CRUD functionality using JavaScript and localStorage.</p>
                <a href="https://github.com/SUJALPALIWAL00/To-do-list-App.git" target="_blank" className='text-blue-500 hover:underline'>View Project</a>
              </div>
            </div>
            <div className="card3 bg-gradient-to-br from-[#e8dad2] to-[#fbe5f0]  shadow-md rounded-lg flex flex-col gap-3">
              <img src="pp.webp" alt="Project 3" className='h-60 object-cover rounded-md' />
              <div className="card-content pl-2">
                <h3 className='text-xl font-semibold'>Portfolio Website</h3>
                <p className='text-gray-600'>Designed and developed a personal responsive portfolio website using HTML, CSS, JavaScript, and React.</p>
                <a href="https://github.com/SUJALPALIWAL00/Personal-Portfolio-Website.git" target="_blank" className='text-blue-500 hover:underline'>View Project</a>
              </div>
            </div>
            <div className="card4 bg-gradient-to-br from-[#e8dad2] to-[#fbe5f0]  shadow-md rounded-lg flex flex-col gap-3">
              <img src="calc.webp" alt="Project 4" className='h-60 object-cover rounded-md' />
              <div className="card-content pl-2">
                <h3 className='text-xl font-semibold'>Calculator App</h3>
                <p className='text-gray-600'>Developed a basic calculator using HTML, CSS, and JavaScript with clean UI design. Supported standard arithmetic operations with instant result rendering.</p>
                <a href="https://github.com/SUJALPALIWAL00/Calculator-app.git" target="_blank" className='text-blue-500 hover:underline'>View Project</a>
              </div>
            </div>
            <div className="card5 bg-gradient-to-br from-[#e8dad2] to-[#fbe5f0]  shadow-md rounded-lg flex flex-col gap-3">
              <img src="nf.webp" alt="Project 5" className='h-60 object-cover rounded-md' />
              <div className="card-content pl-2">
                <h3 className='text-xl font-semibold'>Netflix Clone</h3>
                <p className='text-gray-600'>Built a responsive OTT platform UI inspired by Netflix using HTML, CSS, and JavaScript. Integrated movie posters, hover effects, and a modern layout with multiple content rows.</p>
                <a href="https://github.com/SUJALPALIWAL00/Netflix-Clone.git" target="_blank" className='text-blue-500 hover:underline'>View Project</a>
              </div>
            </div>
          </div>
        </div>


        {/* --------------------sepration-----------------  */}
        <div  id='skillssp' className="w-1 h-15 border border-gray-200 bg-gray-200 mx-auto shadow rounded-md my-20"></div>


        {/* --------------------Skills Section-----------------  */}
        <div id="skills" className='flex flex-col items-center w-[50vw]  mx-auto '>
          <div className='font-bold text-3xl '>My Skills</div>
          <div className="skills grid md:grid-cols-4 grid-cols-2 gap-4 mt-10  md:w-[50vw] w-[90vw]">
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><i class="fa-brands fa-html5 text-2xl"></i>HTML</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><i class="fa-brands fa-css3 text-2xl"></i>CSS</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><i class="fa-brands fa-square-js text-2xl"></i>Js</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><i class="fa-brands fa-react text-2xl"></i>React</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><img src="tailwind.svg" alt="" width="23px" />Tailwind</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><i class="fa-brands fa-bootstrap text-2xl"></i>Bootstrap</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><i class="fa-brands fa-node-js text-2xl"></i>Node.js</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><img src="mongo.svg" alt="" width="23px" />MongoDB</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><img src="express.svg" alt="" width="20px" />Express.js</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><img src="c.svg" alt="" width="23px" />C</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f] "><img src="cpp.svg" alt="" width="23px" />C++</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><i class="fa-brands fa-python text-2xl"></i>Python</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><img src="git.svg" alt="" width="23px" />Git</div>
            <div className="skillItem border border-black rounded-md py-2 px-4 flex justify-center items-center gap-2 bg-[#f2edf9] shadow shadow-gray-500 text-xl hover:bg-[#0000002f]"><img src="github.svg" alt="" width="23px" />GitHub</div>
          </div>
        </div>


        {/* --------------------sepration-----------------  */}
        <div id='experiencesp' className="w-1 h-15 border border-gray-200 bg-gray-200 mx-auto shadow rounded-md my-20"></div>


        {/* --------------------Experience Section-----------------  */}
        <div id="experience" className='flex flex-col items-center  md:w-[70vw] w-[90vw] mx-auto'>
          <div className='font-bold text-3xl '>Experience</div>
          <div className="internExperience md:text-[20px] text-[16px] ">
            <div className='mt-10 '>&#9658;<strong>Web Development Intern – Cognifyz Technologies (May 2025 – June 2025)</strong></div>
            <p>- Worked as part of a development team handling both front-end and back-end tasks.</p>
            <p>- Demonstrated strong problem-solving abilities and commitment to project goals.</p>
            <p>- Contributed to real-world web development tasks and collaborative software solutions.</p>
            <div className='mt-10 '>&#9658;<strong>Web Developer Intern – EazyByts Web Solutions (Feb 2025 – March 2025)</strong></div>
            <p>- Built and maintained responsive front-end interfaces using HTML, CSS, and JavaScript.</p>
            <p>- Improved design practices and collaborated effectively with team members. </p>
          </div>
        </div>

        
        {/* --------------------sepration-----------------  */}
        <div id='contactsp' className="w-1 h-15 border border-gray-200 bg-gray-200 mx-auto shadow rounded-md my-20"></div>


        {/* --------------------Contact Section-----------------  */}
        <div id="contact" >
          <div className='flex flex-col items-center  md:w-[40vw] w-[90vw] mx-auto'>
            <div className='font-bold text-3xl '>Contact Me</div>
            <div className="form w-full">
              <form action="https://formsubmit.co/0e3d3bc1a30ceb9b5e91fcc426a9304c" method="POST" className='flex flex-col gap-4 mt-10 w-full' target='_blank'>
                <input id='name' name='name' type="text" className='border py-2 pl-2 ' placeholder='Your Name' required/>
                <input id='email' name='email' type="email" className='border py-2 pl-2 ' placeholder='Your Email' required/>
                <textarea id='textarea' name="message" placeholder='Enter Your message here' className='border py-2 pl-2'  rows="10" required></textarea>
                <button type='submit' className='border py-2 text-white bg-[#b6a15f] rounded-sm mb-3'>Submit</button>
              </form>
            </div>
          </div>
        </div>


        {/* -------------------Footer Section------------- */}
        <div className="footer bg-black text-white text-center py-5 relative">
          <p className='md:text-[20px] text-[16px]'>© 2025 Sujal Paliwal. All rights reserved.</p>
          <p className='md:text-[20px] text-[16px]'>Made with <i class="fa-solid fa-heart text-red-500"></i> by Sujal Paliwal</p>
          <a href="https://wa.me/+918079043867?text=Hello, I found your number from your personal portfolio website" target='_blank'><img src="whatsapp.svg" alt="" width="50px" className=' absolute md:bottom-6 md:right-10 bottom-1 right-1'/></a>
        </div>
      </div>

      
      

    </>
    
  )
}
export default App
