import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "antd";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModall = () => {
    setIsModalOpen1(true);
  };

  const handleOkk = () => {
    setIsModalOpen1(false);
  };

  const handleCancell = () => {
    setIsModalOpen1(false);
  };

  return (
    <>
      <div className="sm:flex justify-between items-center px-5 md:px-10 py-5 bg-[#020c1b]  text-slate-200 sticky top-0 z-50">
        <div className="sm:flex justify-center text-center items-center gap-2 md:gap-5">
          <NavLink to="/" className="text-lg md:text-2xl font-bold">
            Movie Hub
          </NavLink>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5 text-sm">
            <Button type="primary" onClick={showModal}>
              About
            </Button>
            <Modal
              title="About Movie Hub"
              visible={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="flex flex-col gap-5">
                <p>
                  MovieDetails: This component displays detailed information
                  about a selected movie. It shows the movie's name, network,
                  genres, rating, schedule, runtime, and other details. Users
                  can also book a ticket for the movie, and the booking status
                  is stored in local storage to prevent double booking on button
                  click.
                </p>
                <p>
                  Card: This component represents a movie card displayed on the
                  Movie Hub website. It shows basic information about the movie,
                  such as its name, language, schedule, and rating. Users can
                  click on a card to navigate to the movie's details page.
                </p>
                <p>
                  Footer: The Footer component displays essential links and
                  information at the bottom of the website. It includes links to
                  Terms of Use, Privacy Policy, About, Blog, and FAQ.
                  Additionally, it contains a short description of the website
                  and social media icons.
                </p>
                <p>
                  Navbar: The Navbar component is the website's navigation bar,
                  located at the top of the page. It includes a logo or site
                  name ("Movie Hub") and an "About" button. When the "About"
                  button is clicked, a modal window opens with some contents.
                </p>
                <p>
                  React Router: The code uses the useNavigate hook from React
                  Router to handle navigation to different movie details pages
                  based on the movie ID.
                </p>
                <p>
                  Ant Design: The code also utilizes components from Ant Design,
                  such as Modal for the About window and Skeleton for a loading
                  effect on the Card component.
                </p>
              </div>
            </Modal>
            <Button type="primary" onClick={showModall}>
              Contact
            </Button>
            <Modal
              title="Contact Movie Hub"
              visible={isModalOpen1}
              onOk={handleOkk}
              onCancel={handleCancell}
            >
              <div className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-shadow hover:shadow-pink">
                  <a href="https://www.linkedin.com/in/vikashsharmaa25/">
                    <FaLinkedin className="text-white" />
                  </a>
                </span>
                <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-shadow hover:shadow-pink">
                  <a href="https://www.instagram.com/">
                    <FaInstagram className="text-white" />
                  </a>
                </span>
                <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-shadow hover:shadow-pink">
                  <a href="https://github.com/vikashsharmaa25">
                    <FaGithub className="text-white" />
                  </a>
                </span>
              </div>
            </Modal>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
