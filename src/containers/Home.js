import React from 'react';
import about_img from '../assets/about.png';
import technology from '../assets/technology.png';
import '../App.scss';
const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {

  // deactivate existing active tabs and panel

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }


  // activate new tabs and panel
  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}
const Home = () =>  (
      <main>
         <div className="container mx-auto mb-8">
            <div className="flex flex-wrap mx-2">
               <div className="w-full md:w-1/2 lg:w-2/5 px-2 mb-4">
                  <div className="text-sm text-grey-dark flex items-center justify-center">
                     <img src={about_img} />
                  </div>
               </div>
               <div className="w-full md:w-1/2 lg:w-3/5 px-2 mb-4">
                  <div className="text-sm text-grey-dark flex items-start justify-center flex-col">
                     <p className="subtitle text-base text-left">Who are we?</p>
                     <h2 className="text-left text-3xl w-2/3 pt-4 pb-8">
                     We at geexu, are a group of reliable and
                     seasoned digital innovators who are
                     passionate about crafting thoughtful
                     solutions with the help of technology.
                     </h2>
                     <p className="text-base text-left">
                        We take care of the technical <br /> aspects of your business_
                     </p>
                  </div>
               </div>
            </div>
            <div className="w-2/5 text-right pr-2">
               <a href="/about" className=" bg-transparent hover:bg-green-300 text-green-300 hover:text-white py-2 px-4 border border-solid border-green-400 rounded-none hover:border-transparent inline-block"> More About Geexu</a>
            </div>
         </div>
         <div className="bg-gray-200 pt-24 pb-16">
            <div className="container mx-auto ">
               <p className="subtitle text-base text-left">Services we offer</p> 
               <div className="flex flex-wrap mt-16">
                  <div className="w-full md:w-1/4 mb-4">
                     <h3 className="text-left text-3xl font-normal">
                        Quickly deliver usable and fully-loaded software that is market-ready
                     </h3>
                  </div>
                  <div className="w-full md:w-3/4 px-2 mb-4">
                    slider here
                  </div>
               </div>
            </div>
         </div>
         <div className="container mx-auto pt-24 pb-16">
            <h2 className="subtitle text-left text-3xl font-normal pb-6"> 
               Technologies we work with
            </h2>
            <div class="bg-white">
               <nav class="tabs flex flex-col sm:flex-row">
                  <button data-target="panel-1" class="tab active text-gray-600 py-1 pl-0 px-4 block hover:text-gray-900 focus:outline-none text-gray-900 border-b-4 font-medium border-green-500 text-left">
                     Mobile
                  </button><button data-target="panel-2" class="tab text-gray-300 py-1 pl-0 ml-2 px-4 block hover:text-gray-900 focus:outline-none">
                     Front End
                  </button><button data-target="panel-3" class="tab text-gray-300 py-1 pl-0 ml-2 px-4 block hover:text-gray-900 focus:outline-none">
                     Database
                  </button>
               </nav>
            </div>

            <div id="panels">
               <div class="panel-1 tab-content active py-5">
                  <img src={technology} alt="technology"/>
               </div>
               <div class="panel-2 tab-content py-5">
                  <img src={technology} alt="technology"/>
               </div>
               <div class="panel-3 tab-content py-5">
                  <img src={technology} alt="technology"/>
               </div>
            </div>
         </div>
         <div className="container mx-auto pt-24 pb-16">
               
         </div>
      </main>
    );
export default Home;