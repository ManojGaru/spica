import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, SectionHeading2 } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading2)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2 bg-primary-900`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-900 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VK3C0JYSHYcar_thMvywSPKPv9ofox2hlA&usqp=CAU",
      title: "Expertise - Cloud/Kubernetes",
      description: "Building SDN Infrastructure.Cloud Adoption using multi-cloud approach using Kubernetes, AWS, AZURE & GCP.Modernizing IT Infrastructure of Oil & Gas Industries to make Cloud & Kubernetes Ready",
      locationText: "Rome, Italy",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-UoZHltyHIKAzERVF6_bcDO2L3Jjfj6LYQ&usqp=CAU" ,
      title: "Expertise – Bluetooth",
      description: "Bluetooth based Medical Device Controller.Dual Mode Bluetooth Stack Development on Texas Instruments TMS320F2837 Platform.Expertise on Texas Instruments Bluetopia Stack.Custom Software Development on various Bluetooth Technology.A Test & Measurement Platform - BlueVet",
      locationText: "Ibiza, Spain",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskoT6O6IlMKusaQiCSP9P9ywCX6InF2bqpw&usqp=CAU",
      //https://cdn-icons-png.flaticon.com/512/6266/6266829.png
      title: "Expertise – 4G / 5G",
      description: "Maintenance and Enhancement of current EPC Software Stack - MME, SGW, PGW, UI module, FAST Data plane module netmap base.Transition path to Kubernetes managed micro-services based framework either in public cloud or private cloud.5G Network Function development and Orchestration.5G UE/gNB Emulation",
      locationText: "Palo Alto, CA",
      pricingText: "USD 19/Day",
      rating: "5.0",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aDqVnbhw1B4mWy407V2po8VUBMG6SC7_Xw&usqp=CAU",
      title: "Expertise – Cyber Security",
      description: "Bluetooth Vulnerability Management for MDM Product.Software Defined Network Security & Access Control Solution to Protect Home/SME network.Built-in modern captive portal implementation that enables enterprise level access control, works with any existing router/network.Cloud-based remote network monitoring, data analytics and access policy management, both for home deployments or multi-location corporate deployment - from a single portal with RBAC.Building Network Monitoring Solution for Cloud Infrastructure, Kubernetes",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
  ]
  const description = "We provide Software Development and Consulting Services in .Cloud Migration, Kubernetes, Cyber Security, 4G/5G, Bluetooth & IOT Technologies."

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>5G Services
          <Text>{description}</Text>
            </Heading><br/>
          
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  {/* <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo> */}
                </TitleReviewContainer>
                {/* <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer> */}
                {/* <Description>{card.description}</Description> */}
                {/* <Description> */}
                  <ul>
                  {card.description?.split('.')?.map((item)=>( <><li style={{fontSize:12}}>{item}</li><br/></>))}
                  </ul>
                {/* </Description> */}
              </TextInfo>
              <PrimaryButton>Read More</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
