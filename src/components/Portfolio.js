import React from 'react';
import blognextjs from '../assets/portfolio/blognextjs.PNG';
import blog from '../assets/portfolio/blog.PNG';
import carHubnextjs from '../assets/portfolio/carHubnextjs.PNG';
import ecommerceStore from '../assets/portfolio/ecommerceStore.PNG';
import fitBody from '../assets/portfolio/fitBody.PNG';
import foodDelivery from '../assets/portfolio/foodDelivery.PNG';
import foodOrderingnextjs from '../assets/portfolio/foodOrderingnextjs.PNG';
import foodRecipes from '../assets/portfolio/foodRecipes.PNG';
import Learners from '../assets/portfolio/Learners.PNG';
import movieAppnextjs from '../assets/portfolio/movieAppnextjs.PNG';
import movieList from '../assets/portfolio/movieList.PNG';
import musicApp from '../assets/portfolio/musicApp.PNG';
import netflixClone from '../assets/portfolio/netflixClone.PNG';
import plantShopnextjs from '../assets/portfolio/plantShopnextjs.PNG';
import productList from '../assets/portfolio/productList.PNG';
import realEstatenextjs from '../assets/portfolio/realEstatenextjs.PNG';
import rentCarService from '../assets/portfolio/rentCarService.PNG';
import travelersnextjs from '../assets/portfolio/travelersnextjs.PNG';
const Portfolio = () => {
  const reactReduxProjects = [
    {
      id: 1,
      src: rentCarService,
      title: 'RENT CAR SERVICE',
      description: 'A service for renting cars.',
      demoLink: 'https://car-rental-react.vercel.app/home',
      codeLink: 'https://github.com/Kaisnamsi/car-rental-react',
    },
    {
      id: 2,
      src: fitBody,
      title: 'FIT BODY',
      description: 'A fitness-related application for tracking workouts and maintaining a healthy lifestyle.',
      demoLink: 'https://gym-react-three.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/gym-react',
    },
    {
      id: 3,
      src: musicApp,
      title: 'MUSIC APP',
      description: 'An application for streaming and enjoying music.',
      demoLink: 'https://music-app-react-nu.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/music-app-react',
    },
    {
      id: 4,
      src: Learners,
      title: 'LEARNERS',
      description: 'ONLINE EDUCATIONAL APPLICATION',
      demoLink: 'https://online-educational-react.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/online-educational-react',
    },
    {
      id: 5,
      src: foodDelivery,
      title: 'FOOD DELIVERY',
      description: 'FOOD DELIVERY APPLICATION',
      demoLink: 'https://food-delivery-react-seven.vercel.app/home',
      codeLink: 'https://github.com/Kaisnamsi/food-delivery-react',
    },
    {
      id: 6,
      src: foodRecipes,
      title: 'FOOD RECIPES',
      description: 'An app for discovering and sharing food recipes',
      demoLink: 'https://food-recipe-rtk.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/food_recipe-rtk',
    },
    {
      id: 7,
      src: netflixClone,
      title: 'NETFLIX CLONE',
      description: 'NETFLIX CLONE APPLICATION',
      demoLink: 'https://netflix-clone-react-psi-smoky.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/netflix-clone-react',
    },
    {
      id: 8,
      src: blog,
      title: 'BLOG',
      description: 'PERSONAL BLOG',
      demoLink: 'https://blog-react-ochre.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/blog-react',
    },
    {
      id: 9,
      src: ecommerceStore,
      title: 'ECOMMERCE STORE',
      description: 'An online store for buying and selling products.',
      demoLink: 'https://ecommerce-rtk-opal.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/ecommerce-rtk',
    },
    {
      id: 10,
      src: movieList,
      title: 'MOVIE LIST',
      description: 'MOVIELIST APPLICATION',
      demoLink: 'https://movie-app-redux-psi.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/movieApp-Redux',
    },
    {
      id: 11,
      src: productList,
      title: 'PRODUCT LIST',
      description: 'PRODUCT LIST APPLICATION',
      demoLink: 'https://product-list-react-omega.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/product_list-react',
    },
    
  ];

  const nextjsProjects = [
    {
      id: 1,
      src: carHubnextjs,
      title: 'CAR HUB NEXT-JS',
      description: 'An application dedicated to car enthusiasts and information about vehicles.',
      demoLink: 'https://car-rental-nextjs-smoky.vercel.app/', 
      codeLink: 'https://github.com/Kaisnamsi/car-rental-nextjs', 
    },
    
    
    {
      id: 2,
      src: plantShopnextjs,
      title: 'PLANT SHOP NEXT-JS',
      description: 'online shop dedicated to plant enthusiasts.',
      demoLink: 'https://plant-shop-nextjs.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/plant-shop-nextjs',
    },
    {
      id: 3,
      src: blognextjs,
      title: 'BLOG NEXT-JS',
      description: 'blog with modern features and functionality.',
      demoLink: 'https://blog-nextjs-kaisnamsi.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/blog-nextjs',
    },
    {
      id: 4,
      src: foodOrderingnextjs,
      title: 'FOOD ORDERING NEXT JS',
      description: 'food ordering platform for restaurants and customers',
      demoLink: 'https://food-website-nextjs.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/food-website-nextjs',
    },
    {
      id: 5,
      src: movieAppnextjs,
      title: 'MOVIE APP NEXT JS',
      description: 'movie-related application for movie reviews or recommendations.',
      demoLink: 'https://movie-web-page-nextjs.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/movieWebPage-nextjs',
    },
    {
      id: 6,
      src: travelersnextjs,
      title: 'TRAVELERS NEXT-JS',
      description: 'platform for travel enthusiasts to share experiences and recommendations.',
      demoLink: 'https://online-booking-managment-nextjs.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/online-booking-managment-nextjs',
    },
    {
      id: 7,
      src: realEstatenextjs,
      title: 'REAL ESTATE NEXT-JS',
      description: 'A real estate application, likely for property listings and information.',
      demoLink: 'https://real-estate-project-nextjs.vercel.app/',
      codeLink: 'https://github.com/Kaisnamsi/real-estate-project-nextjs',
    },
    
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-fit">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">React Redux Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {reactReduxProjects.map(({ id, src, title, description, demoLink, codeLink }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm">{description}</p>
                  <div className="mt-2">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Demo
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Next.js Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {nextjsProjects.map(({ id, src, title, description, demoLink, codeLink }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm">{description}</p>
                  <div className="mt-2">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Demo
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
