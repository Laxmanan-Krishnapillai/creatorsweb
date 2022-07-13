import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const About: NextPage = () => {
  const router = useRouter();
  return (
    <motion.main
      className={`flex max-w-screen max-h-screen overflow-hidden ${router.query.color}`}
    >
      <Head>
        <title>Creators Web - Unikke hjemmesider og webapps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <section className="w-screen flex justify-center flex-col items-center h-screen">
        <motion.h1
          animate={{ opacity: 1 }}
          className="font-sans font-black text-4xl text-white mb-10 opacity-0"
        >
          Shoot us a mail, we don&apos;t mind!
        </motion.h1>
        <Link href={{ pathname: "/", query: { color: "bg-slate-900" } }}>
          <motion.div className="inline-block relative">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
              className="px-10 py-4 bg-black text-white hover:bg-white hover:text-slate-900 font-bold transition-colors relative z-10 cursor-pointer"
            >
              Home
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
              className="w-10 h-10 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        </Link>
      </section>
    </motion.main>
  );
};

export default About;
