import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import { ReactComponent as CheckboxIcon } from "images/checkbox-circle.svg";
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/3 lg:w-1/3 px-0 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-sm items-center px-6 py-10 border-2 border-solid border-primary-900 rounded-lg mt-6`}
  .imageContainer {
    ${tw`border-2 border-primary-900 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-900`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const PlanFeatures = styled.ul`
  ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-primary-900 tracking-wide ml-3`}
    }
  }
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultPlans = [
    {
      name: "Personal",
      price: ["$9", ".99/month"],
      oldPrice: "$11.99",
      description: "Perfect for when you want to host your personal blog or a hobby side project.",
      features: ["2 Core Xeon CPU", "1 GB RAM", "30 GB SSD", "1 TB Transfer", "99.9% Uptime"],
      url: "https://google.com"
    },
    {
      name: "Business",
      price: ["$15", ".99/month"],
      oldPrice: "$19.99",
      description: "Perfect for hosting blogs with lots of traffic or heavy development projects",
      features: [
        "4 Core Xeon CPU",
        "2 GB RAM",
        "100 GB SSD",
        "3 TB Transfer",
        "99.9% Uptime",
        "Free Domain & SSL",
        "Free DNS Management"
      ],
      url: "https://google.com",
      featured: "Most Popular"
    },
    {
      name: "Enterprise",
      price: ["$25", ".99/month"],
      oldPrice: "$29.99",
      description: "Perfect for hosting production websites & API services with high traffic load",
      features: [
        "8 Core Xeon CPU",
        "8 GB RAM",
        "300 GB SSD",
        "Unlimited Transfer",
        "99.99% Uptime",
        "Free Domain & SSL",
        "Free DNS Management",
        "Free Offsite Backup"
      ],
      url: "https://google.com"
    }
  ];

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Ads Management",
      description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
    },
    { imageSrc: SupportIconImage, title: "Video Marketing" },
    { imageSrc: CustomizeIconImage, title: "Customer Relation" },
    { imageSrc: ReliableIconImage, title: "Product Outreach" },
    { imageSrc: FastIconImage, title: "PR Campaign" },
    { imageSrc: SimpleIconImage, title: "Product Expansion" }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card style={{width:'100%'}}>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <PlanFeatures>
                {defaultPlans[0].features.map((feature, index) => (
                  <li className="feature" key={index}>
                    <CheckboxIcon className="icon" />
                    <span className="text">{feature}</span>
                  </li>
                ))}
              </PlanFeatures>
                {/* <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p> */}
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
