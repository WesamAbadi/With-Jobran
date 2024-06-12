import React from "react";
import { Helmet } from "react-helmet-async";

import Project from "../components/Project";
import logo from "../assets/images/jobran-pic2.jpeg";

import "../assets/styles/home.css";

const Homepage = () => {
  const INFO = {
    projects: [
      {
        title: "اهداء صوتي فقط",
        description: "رسالة صوتية مخصصة تُسجل بجودة احترافية",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "ب10 دولار فقط ",
        link: "https://buy.stripe.com/28og2p0g34uK8ogeUU",
      },
      {
        title: "إهداء صوتي مع فيديو ",
        description:
          "هذه الخدمة مثالية لجعل لحظاتك لا تُنسى وأكثر تأثيرًا.اختيار تصميم الفيديو ليناسب المناسبة (عيد ميلاد، زفاف، تخرج، إلخ).",
        logo: "cam-logo.png",
        linkText: "ب30 دولار فقط ",
        link: "https://buy.stripe.com/5kA5nL5An5yO0VO289",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Home Page - With Jobran</title>
        <meta
          name="description"
          content="Welcome to the home page of With Jobran."
        />
        <meta name="keywords" content="home, my website, with jobran" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "With Jobran",
              "url": "https://with-jobran.web.app",
              "logo": "https://with-jobran.web.app/logo.png"
            }
          `}
        </script>
      </Helmet>
      <main className="page-content">
        <div className="content-wrapper">
          <div className="homepage-logo-container"></div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">مع جبران</div>
                <div className="subtitle homepage-subtitle">
                  لأن لكل مناسبة قصة تُروى .. الآن يمكنك حجز إهداء صوتي مخصص
                  لأجمل لحظاتك، سواء كان ذلك عيد ميلاد، زفاف، كتب كتاب، خطوبة،
                  تخرج، أو حتى رسالة صوتية شخصية. نحن هنا لجعل كل مناسبة أكثر
                  تميزًا وإضفاء طابع خاص لا يُنسى
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src={logo}
                      alt="About With Jobran"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="homepage-projects">
              <div className="all-projects-container">
                {INFO.projects.map((project, index) => (
                  <div className="all-projects-project" key={index}>
                    <Project
                      logo={project.logo}
                      title={project.title}
                      description={project.description}
                      linkText={project.linkText}
                      link={project.link}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="homepage-last-area">مع جبران .. احتفل، وأهدِ، واجعل كل لحظة لا تُنسى</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
