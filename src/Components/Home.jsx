import React from "react";
import TypingAnimatedText from "./Typing";
import { motion } from "framer-motion";

function Home() {
  const content = [
    { text: "Notes, Syllabus, and More for BCA Students", type: "heading" },
    { text: "BCA Aspirant – A platform for BCA students to access notes, syllabus, and essential learning resources.", type: "paragraph" },
  ];

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2, // 1s delay for each item
      },
    }),
  };

  return (
    <div
      id="home-outer"
      className="relative w-screen h-screen flex justify-center items-center flex-col gap-5 text-white"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-[url('/src/assets/pic02.jpg')] bg-cover bg-center blur-[1px] -z-10"></div>

      {/* Content */}
      <div className="sm:h-[20%] sm:w-full">empty</div>

      <div className="w-[90%] h-full flex flex-col justify-end items-center gap-5 sm:gap-3">
        {content.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className={`${
              item.type === "heading"
                ? "font-bold sm:text-5xl text-3xl"
                : "text-lg sm:w-6/12 sm:h-[50px] mt-5"
            }`}
          >
            {item.type === "heading" ? (
              <>
                {item.text}
                {/* Typing Animation placed here */}
                <div className="mt-6">
                  <TypingAnimatedText />
                </div>
              </>
            ) : (
              item.text
            )}
          </motion.div>
        ))}
      </div>

      {/* Buttons  */}
      <div className="w-[90%] h-[40%] sm:flex flex justify-center items-center gap-5 flex-col sm:flex-row">
        <a href="https://www.facebook.com/sravana.kumvara/about/">
        <button className="sm:w-[200px] w-[200px] bg-blue-500 text-white font-bold border-0 sm:h-[40px] h-[45px] rounded-[7px] hover:border-1 hover:bg-blue-400/5 hover:text-white hover:shadow-[0px_0px_6px_1px_white] transition-all">
          Connect
        </button>
        </a>
        <a href="https://sharwankunwar.github.io/My-Portfolio-07/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExdW4yQXVaQ2FZZDZGc245bQEeI2m7WQEI96Npw49oLsSBMWxaa3-G6yTTRNtCkFY22z22hIvvgg6_N7Oloak_aem_rOUNPFnReZ5uANrkleTKLA#">
        <button className="sm:w-[200px] w-[150px] border-1 text-white h-[40px] rounded-[5px] hover:bg-blue-500 hover:text-white hover:shadow-[0px_0px_5px_1px_white] transition-all">
          Learn More
        </button>
        </a>
      </div>

      {/* Social Media Links */}
      <section className="w-[90%] sm:h-[40%] h-[25%] flex justify-center sm:items-center items-start gap-10 sm:hidden">
        <a href="https://www.facebook.com/">
          <i className="ri-facebook-circle-fill text-2xl"></i>
        </a>
        <a href="https://github.com/SharwanKunwar">
          <i className="ri-github-fill text-2xl"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill text-2xl"></i>
        </a>
      </section>

      <motion.section
          className="bg-white w-[90%] sm:h-[40%] hidden sm:block rounded-t-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <img
          src="https://plus.unsplash.com/premium_photo-1736726364511-84af31474064?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2NnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.section>


    </div>
  );
}

export default Home;
