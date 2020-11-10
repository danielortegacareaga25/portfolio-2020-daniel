import React, { useContext } from "react";
import "./index.scss";
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import { ThemeContext } from "../../context/ThemeContext";
import { useAnimation } from "../../use/animation";

const Profile = () => {
  const { backgroundImage, type } = useContext(ThemeContext);
  const { animation } = useAnimation();
  return (
    <div className="profile">
      <div className="profile__banner">
        <div
          className={`profile__photo ${animation}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQESQlyAs39eyw/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=jSi-3IXk941zY3pZ_4s65k9v4mQfqW7EuKT-jd6IpOU"
          alt={type}
        />
      </div>
      <div className="profile__content">
        <div className="profile__title">Daniel Ortega</div>
        <TypedText
          dataText={[
            "Senior JavaScript Engineer",
            "Frontend Development",
            "Backend Development",
          ]}
        />
        <SocialLinks />
        <Info icon="location"> Toluca / México </Info>
        <Skills />
      </div>
      <div className="profile__contact">
        <a
          href="https://drive.google.com/file/d/1KS59x7gIOht-r6pZ3DaV5kDDxSsqXNML/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span>Download CV</span>
        </a>
        <a href="mailto:danielortegacareaga@gmail.com">
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
