import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import Product1 from "../../images/SMC-NewTemp-Logo.png"
import Product2 from "../../images/SMCMPeUBIORCA.png"
import Product3 from "../../images/Cygnus-Logo.png"
import { MyContext } from "App";
import {Link} from 'react-router-dom'
const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-900 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-900`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-900 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-900 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-900 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-900 fill-current w-24`;


export const productsCards = [
  {
    id:1,
    imageSrc:Product1,
    subtitle: "Paid",
    title: "SMC 5G Packet Core",
    description:
      "SMC (Spica Mobility Core) is a collection of Cloud Native Network Functions that make up the 5G Core Network.Spica 5G Core Network Solution contains following Network functions:",
    url: "/product/1",
    breif:"Spica Systems has built an enterprise grade 5G Packet Core Solution complying with 3GPP Release 15. Spica Mobility Core Solution (SMC) from Spica Systems addresses CAPEX & OPEX concerns of Enterprise Customers with ease-of-use, robustness and security at its core."
  },

  {
    id:2,
    imageSrc:Product2,
    subtitle: "Free",
    title: "UBIORCA",
    description:
      "UBIORCA is a Multi-Site Federation Engine for Kubernetes.",
      url: "/product/2",
    breif:"Ubiorca from Spica Systems is a multi-site 5G VNF Orchestration and lifecycle management Platform. Managing large scale kubernetes based micro-service deployments across multiple sites introduces challenges to the Devops Team in many fronts. Ubiorca addresses the following:"
  },

  {
    id:3,
    imageSrc:Product3,
    subtitle: "Exclusive",
    title: "CYGNUS",
    description:
      "A Purpose-built Test & Measurement Tool for 5G Core Infrastructure. CYGNUS offering will have the following Core features:",
      url: "/product/3",

    breif:"Cygnus - a UE, gNodeB simulator, conformance and a performance test tool (for gNodeB and the core NFs as per release 15 of 3GPP). It is facilitated with a powerful user-centric interface helping in creation of test scripts, performing tests and helps generating a robust test analysis with results."
  }
];

export default () => {


  const { selectedProduct, setSelectedProduct } = useContext(MyContext);
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Products</HeadingTitle>
          <HeadingDescription>
            Here are some of the most popular Products in Spica curated by professionals.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {productsCards?.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} style={{height:120,width:250,backgroundSize:'cover'}}/>
              <Details>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link to={card.url} onClick={(event)=>{
                  //event.preventDefault()
                  setSelectedProduct(card)}}>Read More</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
