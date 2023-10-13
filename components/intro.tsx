"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import avatar from "@/public/avatar.jpg";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const Intro = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <Image
              src={avatar}
              width="192"
              height="192"
              alt=""
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1-5] sm:text-3xl"
      >
        <span className="font-bold">Hi, I'm Duc Vu</span>
        <span>, my nickname is Pikachu. I'm a </span>
        <span className="font-bold">Full-stack, Game Developer </span>
        <span> at </span>
        <span className="font-bold">Gamefox.vn</span>
        <span> with 1 year experience. I enjoy building </span>
        <span className="underline">Site, Game platform and Apps.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#Contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition"
        >
          My Contact is here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download my CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.facebook.com/pikachu.dvu/"
          target="_blank"
        >
          <BsFacebook />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/PikachuDucVu"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
