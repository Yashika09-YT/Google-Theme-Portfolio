import Image from "next/image";
import { useContext } from "react";
import { sideBarInfo } from "../constants/constants";
import { ThemeContext } from "../pages/_app";
import { AsideContainer, ResumeWrapper } from "../styles/Home.styled";
import { AiOutlineDownload } from "react-icons/ai";
import {
  ContactDetails,
  Item,
  ProfileContainer,
  About,
} from "./SideBar.styled";

const SideBar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <AsideContainer>
      <ProfileContainer>
      
      </ProfileContainer>
      <About>{sideBarInfo.about}</About>
      <ResumeWrapper
        href="/assets/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Yashika's Resume`}
        <AiOutlineDownload size={19} />
      </ResumeWrapper>
      <hr />
      <ContactDetails>
        {sideBarInfo.contactDetails.map(
          ({ title, href, icon: Icon }, index) => {
            return (
              <Item key={title}>
                <Icon size={20} color={darkMode ? "white" : "black"} />
                {index === 1 ? (
                  <p>{title}</p>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                )}
              </Item>
            );
          }
        )}
      </ContactDetails>
    </AsideContainer>
  );
};

export default SideBar;
