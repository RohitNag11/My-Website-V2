import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useState, useEffect, useContext } from 'react';
import { HomeCard } from '../components/cards';
import TextTransition, { presets } from "react-text-transition";
import profilePic from '../public/images/Profile/profile.jpeg';


export default function Home() {
  const designerTextArray = [
    "UI / UX",
    "Graphic",
    "Product"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index => index + 1)
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const text = index ? designerTextArray[index % designerTextArray.length] : '';

  return (
    <div className={styles.container}>
      <Head>
        <title>Rohit Nag</title>
        <meta name="Rohit Nag" content="Engineer, Developer, Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.header}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Rohit Nag
            </h1>
            <div className={styles.role}>
              A Mechanical Engineering student at <a href="https://www.imperial.ac.uk/ " target="_blank">Imperial College</a>.
            </div>
            <div className={styles.description}>
              Passionate about merging <em>Engineering</em>, <em>Computing</em> and <em>Design</em> with an interest in embedded systems, physics modelling and AI.
              <br />
              Also a questionable &nbsp;
              <TextTransition inline springConfig={presets.slow}>
                {text}
              </TextTransition>
              &nbsp; designer on the side 😁.
            </div>
          </div>

          <div className={styles.profile}>
            <Image
              src={profilePic}
              alt="Picture of Rohit Nag"
              placeholder='blur'
              objectFit='cover'
              layout='fill' />
          </div>

        </div>

        <div className={styles.grid}>
          <HomeCard
            link=""
            title="🚀 Projects"
            description="Explore some of university and side projects." />

          <HomeCard
            link=""
            title="🖌 Art"
            description="View my recent art pieces." />

          <HomeCard
            link=""
            title="🖼 Graphics"
            description="View some of the posters and logos I've made." />

          <HomeCard
            link=""
            title="💡 About"
            description="Learn about my background, experiences and skills." />
        </div>
      </main>
    </div>
  )
}
