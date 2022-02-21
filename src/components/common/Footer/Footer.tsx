import { InstagramIcon } from "../Icons/InstagramIcon";
import { FacebookIcon } from "../Icons/FacebookIcon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const footerData = [
  {
    title: "Help",
    items: [
      { name: "Contact us", path: "/" },
      { name: "Delivery Information", path: "/" },
      { name: "Payment information", path: "/" },
      { name: "Customer service", path: "/" },
      { name: "FAQ", path: "/" },
    ],
  },
  {
    title: "About us",
    items: [
      { name: "Our stores", path: "/" },
      { name: "Flower care", path: "/" },
      { name: "Site map", path: "/" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Privacy policy", path: "/" },
      { name: "Terms & Conditions", path: "/" },
      { name: "Cookie policy", path: "/" },
    ],
  },
];

const footerSocialLinks = {
  title: "Follow us",
  phoneNumber: "+84 0000 0000",
  socialNetworks: [
    { icon: <InstagramIcon />, path: "/www.instagram.com" },
    { icon: <FacebookIcon />, path: "/www.facebook.com" },
  ],
};

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterRow>
          <div>
            <p>{footerSocialLinks.title}</p>
            <p>{footerSocialLinks.phoneNumber}</p>
            {footerSocialLinks.socialNetworks.map((item, i) => (
              <a key={i} href={item.path}>
                {item.icon}
              </a>
            ))}
          </div>
          {footerData.map((data) => (
            <div key={data.title}>
              <p>{data.title}</p>
              {data.items.map((item, i) => (
                <FooterItem key={i}>
                  <Link to={item.path}>{item.name}</Link>
                </FooterItem>
              ))}
            </div>
          ))}
        </FooterRow>
        <FooterRow2>
          <p>
            © Copyright, 2022. Developed by <a href="/">dongnv</a>
          </p>
        </FooterRow2>
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;

  & p {
    margin-bottom: 18px;
  }

  & a {
    color: #fff;
    opacity: 0.8;
  }

  & a:hover {
    opacity: 1;
  }
`;

const FooterContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  height: auto;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 58px;
  margin-bottom: 30px;
`;

const FooterItem = styled.div`
  margin-bottom: 14px;
`;

const FooterRow2 = styled(FooterRow)`
  border-top: 1px solid #464646;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 40px;

  & p {
    color: #565656;
  }
`;

export default Footer;
