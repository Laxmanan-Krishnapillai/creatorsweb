import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Mouse } from "../components/mouse";
import { motion } from "framer-motion";
const Home: NextPage = () => {
  return (
    <motion.main className="flex max-w-screen max-h-screen bg-white overflow-hidden">
      <Head>
        <title>Creators Web - Unikke hjemmesider og webapps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <section className="w-screen flex flex-col justify-center items-center h-screen">
        <motion.h1
          animate={{ opacity: 1 }}
          className="font-sans font-black text-4xl text-red-500 mb-10 opacity-0"
        >
          Do you take the red pill?
        </motion.h1>
        <Link href={{ pathname: "/about", query: { color: "bg-red-500" } }}>
          <motion.div className="inline-block relative mb-10">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
              className="px-10 py-4 bg-black text-white hover:bg-red-500 font-bold transition-colors relative z-10 cursor-pointer"
            >
              You never know untill you see
            </motion.a>
            <motion.div
              exit={{
                height: "3000px",
                width: "3000px",
                transition: { duration: 1 },
              }}
              initial={{
                display: "none",
              }}
              animate={{
                display: "block",
                transition: { delay: 1 },
              }}
              className="w-10 h-10 rounded-full bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        </Link>
      </section>
    </motion.main>
  );
};

export default Home;
