import { FaUserFriends, FaNetworkWired, FaSpeakap } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <section
        id="homeindex"
        className="banner__area banner__area-1 banner__height-1 d-flex align-items-center"
        style={{
          backgroundImage:
            "url('https://freerangestock.com:443/sample/137803/video-conference-call--online-meeting--videoconference--business-meeting.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="spotlight"></div>
        <div className="banner__meta-title">
          <span>Meet Up 2023</span>
        </div>
        <div className="banner__shape">
          <div className="banner-all-line">
            <div className="banner__line banner__line-1"></div>
            <div className="banner__line banner__line-2"></div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-xl-end">
              <div className="col-xxl-7 col-xl-8 col-lg-6">
                <div className="banner__content">
                  <h2 className="banner__title">
                    Digital Thinkers
                    <span className="text__highlight"> Conference </span>
                  </h2>
                  <div className="slider__btdn">
                    <a className="fill__btn" href="signup">
                      Register Now<i className="fa-regular fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="homeabout"
        className="about__area p-relative pt-150 dark_light_class pb-90"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content-wrapper mb-60">
                <div className="section__title-wrapper mb-80">
                  <span className="section__back-title">A</span>
                  <span className="section__subtitle">ABOUT THIS EVENT</span>
                  <h2 className="section__title">
                    EXPERIENCE A TRUE DIGITAL
                    <span className="text__highlight">
                      CONFERENCE
                      <svg
                        className="title-underline"
                        width="328"
                        height="31"
                        viewBox="0 0 328 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 29C110 8.62517 326 -19.8996 326 29"
                          stroke="url(#paint0_linear_47_128)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_47_128"
                            x1="2.50784"
                            y1="22.0412"
                            x2="322.486"
                            y2="65.0473"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="1" stopColor="#F7426F"></stop>
                            <stop offset="1" stopColor="#F87A58"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </h2>
                </div>
                <div className="about__content">
                  <div className="about__text">
                    <h4>
                      How you transform your business as technology, consumer
                      habits industry dynamic
                    </h4>
                    <p className="mb-30">
                      Velit auctor aliquet. Aenean sollicitudin, lorem quis
                      bibendum auctor, nisi elit consequat ipsum, nec sagittis
                      sem nibh.
                    </p>
                    <p>
                      Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                      Aeneansollicitudin, lorem quis bibendum auctonisi elit
                      consequat ipsum nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursusa sit amet mauris.
                      Morbi accumsan ipsum velit.” Nam nec tellus a odio
                      tincidunt.
                    </p>
                  </div>
                  <div className="about__location-info mb-80">
                    <div className="about__location-inner">
                      <div className="about__location-icon">
                        <a href="#">
                          <i className="fa-solid fa-location-dot"></i>
                        </a>
                      </div>
                      <div className="about__location-address">
                        <h5>WHEN AND WHERE</h5>
                        <span>
                          November 9–10 <br />
                          The Midway SF, Zoom
                        </span>
                      </div>
                    </div>
                    <div className="pluse__status">
                      <span className="dot"></span>
                      <span className="text">Online</span>
                    </div>
                  </div>
                </div>
                <a className="fill__btn" href="event-list-two">
                  Join Now<i className="fa-regular fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper mb-60 p-relative">
                <div className="about__thumb-1 text-end w-img">
                  <img src="assets/img/about/img1.jpg" alt="image not found" />
                  <div className="panel wow"></div>
                </div>
                <div className="about__thumb-2 w-img">
                  <img
                    src="https://freerangestock.com:443/sample/137803/video-conference-call--online-meeting--videoconference--business-meeting.jpg"
                    alt="conference image"
                    className="rounded-lg"
                  />
                  <div className="panel wow"></div>
                </div>
                <span className="about__play-btn">
                  <button type="button" className="video__play-btn popup-video">
                    <i className="fa-solid fa-play"></i>PLAY TRAILER
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="join__area p-relative z-index-1 fix"
        style={{
          backgroundImage: "url('../src/assets/img/media/joinbg.e1b1d152.jpg')",
        }}
      >
        <div className="join__all-shape p-relative">
          <img
            className="join__shape-1"
            src="assets/img/shape/join-shape-1.png"
            alt="image not found"
          />
          {/* <img
            className="join__shape-2"
            src="assets/img/shape/join-shape-2.png"
            alt="image not found"
          /> */}
          <div className="container">
            <div className="join__main-wrapper pt-150 pb-90">
              <div className="row align-items-sm-start">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="join__features-wrapper mb-60">
                    <div className="join__features-grid">
                      <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            {/* <i className="flaticon-network"></i> */}
                            <FaNetworkWired size={40} className="text-white" />
                          </span>
                        </div>
                        <h3 className="join__features-title">
                          Build Networking
                        </h3>
                      </div>
                      <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            {/* <i className="flaticon-teamwork"></i> */}
                            <FaUserFriends size={40} className="text-white" />
                          </span>
                        </div>
                        <h3 className="join__features-title">
                          Meet New People
                        </h3>
                      </div>
                      <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            {/* <i className="flaticon-speech"></i> */}
                            <FaSpeakap size={40} className="text-white" />
                          </span>
                        </div>
                        <h3 className="join__features-title">
                          Experience Speakers
                        </h3>
                      </div>
                      {/* <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            <i className="flaticon-confetti"></i>
                          </span>
                        </div>
                        <h3 className="join__features-title">Lot’s Of Fun</h3>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="join__content-wrapper mb-60">
                    <div className="section__title-wrapper is-white mb-40">
                      <span className="section__back-title">w</span>
                      <span className="section__subtitle">WHY JOIN EVENT</span>
                      <h2 className="section__title">
                        WHY YOU SHOULD
                        <span className="text__highlight">
                          JOIN THIS
                          <svg
                            width="164"
                            height="32"
                            viewBox="0 0 164 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.99971 28.2805C55.3778 8.30722 162.042 -19.4147 161.673 29.4835"
                              stroke="url(#paint0_linear_83_347)"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_83_347"
                                x1="2.30241"
                                y1="21.3238"
                                x2="162.062"
                                y2="33.1155"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="1" stopColor="#F7426F"></stop>
                                <stop offset="1" stopColor="#F87A58"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        EVENT
                      </h2>
                    </div>
                    <div className="join__content mb-70">
                      <p>
                        Velit auctor aliquet. Aenean sollicitudin, lorem quis
                        bibendum auctor, nisi elit consequat ipsum, nec sagittis
                        sem nibh.
                      </p>
                      <p className="mt-30">
                        Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                        Aeneansollicitudin, lorem quis bibendum auctonisi elit
                        consequat ipsum nec sagittis sem nibh id elit. Duis sed
                        odio sit amet nibh vulputate cursusa sit amet mauris.
                        Morbi accumsan ipsum velit.” Nam nec tellus a odio
                        tincidunt.
                      </p>
                    </div>
                    <a className="fill__btn fill_btn_new" href="event-list-two">
                      Join Now<i className="fa-regular fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <section
          className="relative pt-36 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/static/media/cunter-bg.8a8fac26.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-opacity-50 z-10"></div>
          <div className="relative z-20"></div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="mb-12">
                <div>
                  <div className="flex space-x-4 mt-6">
                    <a
                      href="https://www.facebook.com/"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="https://bd.linkedin.com/"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h4 className="text-white mb-6">Useful Links</h4>
                <ul className="text-gray-400 space-y-4">
                  <li>
                    <a href="speaker-list-two" className="hover:text-white">
                      Speakers
                    </a>
                  </li>
                  <li>
                    <a href="pricing" className="hover:text-white">
                      Pricing Info
                    </a>
                  </li>
                  <li>
                    <a href="index.html#" className="hover:text-white">
                      Our Partners
                    </a>
                  </li>
                  <li>
                    <a href="contact" className="hover:text-white">
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h4 className="text-white mb-6">Useful Links</h4>
                <ul className="text-gray-400 space-y-4">
                  <li>
                    <a href="event-list-two" className="hover:text-white">
                      Business Conference
                    </a>
                  </li>
                  <li>
                    <a href="event-list-two" className="hover:text-white">
                      Design Conference
                    </a>
                  </li>
                  <li>
                    <a href="event-list-two" className="hover:text-white">
                      Web Design Seminar
                    </a>
                  </li>
                  <li>
                    <a href="event-list-two" className="hover:text-white">
                      Global Conference
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h4 className="text-white mb-6">Subscribe us</h4>
                <p className="text-gray-400 mb-6">
                  Subscribe Our Newsletter To Get Latest Update And News
                </p>
                <form action="#">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-envelope-open text-gray-400 mr-2"></i>
                    <input
                      type="text"
                      placeholder="Enter mail"
                      className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-white"
                    />
                  </div>
                  <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-400">
                Copyright &amp; design by{" "}
                <a
                  href="https://themeforest.net/user/bdevs"
                  className="text-red-500 hover:text-red-600"
                >
                  @Bdevs
                </a>{" "}
                - 2023
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Home;

{
  /* <div>
        <nav className="">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="text-3xl">
              Quickmeet
            </Link>
            <div className="flex gap-5">
              <Link to={"/about"}>Signup</Link>
              <Link to={"/speakers"}>Signin</Link>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-5">
          <div className="w-full md:w-1/2 h-[100vh] md:min-h-[70vh] flex flex-col justify-center gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-semibold">Digital Think</p>
              <div className="text-7xl font-bold leading-9 first-letter:capitalize">
                <p className="text-4xl">Digital think</p> conference
              </div>
              <p>
                How you transform your business as technology, consumer habits
                industry dynamic
              </p>
            </div>

            <div>
              <button className="px-5 py-2 rounded-xl border  text-2xl">
                Start now
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src="	https://cdn.prod.website-files.com/620b4dfc30add26…4e3fe0c5eb69dbf9d908_Whova-platform-1024x824.webp"
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div> */
}

{
  /* <div
        id="homeindex"
        className="banner__area banner__area-1 banner__height-1 d-flex align-items-center"
        style={{
          backgroundImage: "url('../src/assets/img/media/banner.png')",
        }}
      >
        <div className="spotlight"></div>
        <div className="banner__meta-title">
          <span>Meet Up 2023</span>
        </div>
        <div className="banner__shape flex flex-col gap-8">
          <h1 className="text-3xl md:text-8xl text-white font-bold">
            DIGITAL <br className="hidden md:block" /> THINKERS CONFERENCE
          </h1>
          <button className="w-full md:w-1/2 rounded-lg py-2 px-5 border">
            Register Now
          </button>
        </div>
      </div> */
}
