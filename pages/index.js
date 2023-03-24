import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <title>Eostat - web3 / EOS blockchain solution</title>
        <meta name="description" content="Eostat - web3 / EOS blockchain solution" />
        {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
          <div className="limiter">
              <div className="logo">Eostat</div>
              <ul>
                  <li>
                      <Link href={"https://twitter.com/eostatic"}>Twitter</Link>
                  </li>
                  <li>
                      <Link href={"https://t.me/eostat"}>Telegram</Link>
                  </li>
              </ul>
              <Link class={"button"} href={"#becomepart"}>
                  join & rewards
              </Link>
          </div>
      </header>

      <section className="banner">
          <div className="num">1</div>
        <div className="limiter">
          <h1>Make the Truth True.</h1>
          <div className="sub">
            <p>make your data eostatic</p>
            <p>with web3 / EOS blockchain</p>
          </div>
            <h2>The fast growth of technologies and increased speed of data exchange makes <span>Eostat</span> extremely important!<br/><br/>We will make any data <br/>eostatic = TRUE.</h2>
            <div className="video">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/VUocQ_MQ9wg`}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Eostat"
                />
            </div>
        </div>
      </section>

      <section className="howorks">
          <div className="num">2</div>
          <div className="limiter">
              <h1>New Era of Truth.<br className={"mob"}/> But how?</h1>
              <h2>Logic of <br className={"mob"}/><span>eostatic</span> <br className={"mob"}/>information</h2>
              <img className={"pc"} src="./Eostat.jpg" alt=""/>
              <img className={"mob"} src="./Eostat_mobile.jpg" alt=""/>
          </div>
      </section>

      <section className="whitepaper">
          <div className="num">3</div>
          <div className="limiter">
            <h1>Whitepaper</h1>
            <p>Already in today's world, every person, company, or organization has a credit rating on which its financial performance may depend.</p>
            <p>Public or private activity inevitably requires trustworthiness. A person's statements about past activities in doing business must be verified, just as any public promises or scientific research must be verified. To be more correct, not verified, but much more. The information must be unalterable and verifiable, that is, eostatic.</p>
              <img src="./preview.png" alt=""/>
              <Link className="button" href={"./WHITEPAPER.pdf"}>Read Whitepaper (click)</Link>

            <div className="roadmap">
                <h2>Roadmap:</h2>
                <p className={'done'}><b>6 March:</b><br/>Public presentation of Eostat</p>
                <p><b>Q3 2023:</b><br/> We become eostatic through the presentation of a test version</p>
                <p><b>Q3 2023:</b><br/> We reveal the details of the project, and the opportunities for investors</p>
                <p><b>Q1-Q2 2024:</b><br/> Launching the beta version of the web3 service and MORE</p>
            </div>
          </div>
      </section>

        <section className="becomepart" id={"becomepart"}>
            <div className="num">4</div>
            <div className="limiter">
                <h1>You can be part of EFoundation</h1>
                <ul>
                    <li>EFoundation is a project fund for development and marketing</li>
                    <li>at this time, Eostat has no commercial purpose</li>
                    <li>we aim to build a free public service, than we will look for rational base monetization formats without the goal of building up capital, but only to cover the project's needs and invest in development and marketing.</li>
                    <li>everyone who donates to EFoundation or has participated in the promotion or creation will have unique access+bonus in the future</li>
                    <li>Eostat is not a hype project, but an attempt to create a blockchain product that will be used in the real economy and social connections</li>
                    <li>if you help us, your name will be in co-founders list of the Eostat</li>
                    <li>think about future, think about benefits, thinks by new way.</li>
                </ul>
                <div className="donator">
                    <p>Become part of Eostat</p>
                    <p>Support our ideas in social networks and follow to get news about project.</p>
                    <Link class={"button"} href={"https://twitter.com/eostatic"}>Join Twitter</Link>
                    <Link class={"button"} href={"https://t.me/eostat"}>Join Telegram</Link>
                    {/*<div className="br"></div>*/}
                    {/*<p>Only if you understand that it's non commercial action. Donate to Eostat Foundation and get unique access+bonus in future. Also your name will be at the origins of the future of great technology! (optional)</p>*/}
                    {/*<div className="wallet">EOS address:<br className={"mob"}/> sholi.gm</div>*/}
                    {/*<div className="wallet">USDT (EOS network):<br className={"mob"}/> 1927361423516278391</div>*/}
                    {/*<Link class={"button button-donator"} href={""}>Write if you donate (click)</Link>*/}
                </div>
            </div>
        </section>

        <div className="emaillead">eostateostatic@gmail.com</div>
    </>
  )
}
