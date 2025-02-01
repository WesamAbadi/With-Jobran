import React from "react";
import { Helmet } from "react-helmet-async";

import Project from "../components/Project";
import logo from "../assets/images/jobran-pic2.jpeg";

import "../assets/styles/home.css";

const Homepage = () => {
  const INFO = {
    projects: [
      // {
      //   title: "كلمات من القلب ",
      //   description: "أحيانًا الكلمة الصحيحة تكون أصدق هدية..",
      //   logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
      //   linkText: "ب20 دولار فقط ",
      //   link: "https://buy.stripe.com/28o7uW1C83Ae8dq003",
      // },
      {
        title: "إهداء صـوتي من القلب",
        description: "لأن المشاعر أحيانًا تحتاج لصوت يعبر عنها",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "ب30 دولار فقط ",
        link: "https://buy.stripe.com/00g3eG4Ok6Mq9hu7ss",
      },
      {
        title: "إهداء صوتي مع فيديو ",
        description:
          "لماذا تكتفي بالصوت فقط عندما يمكنك إضافة الحياة للصوت؟ هذه الخدمة مثالية لجعل لحظاتك لا تُنسى وأكثر تأثيرًا",
        logo: "cam-logo.png",
        linkText: "ب80 دولار فقط ",
        link: "https://buy.stripe.com/8wMcPg5So8UygJW001",
      },
      {
        title: "خدمة مخصصة مميزة",
        description:
          "ليس مجرد فيديو.. بل فيلم يحكي مشاعرك إذا كنت تريد شيئًا أكبر من مجرد لحظة",
        logo: "cam-logo.png",
        linkText: "ب200 دولار فقط ",
        link: "https://buy.stripe.com/bIY3eG80w9YC8dq002",
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
                  لأن لكل مناسبة قصة تُروى .. الآن يمكنك حجز إهداء مخصص
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
