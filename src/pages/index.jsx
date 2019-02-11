import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import me from '../images/me.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Shubham Modi.
        </BigTitle>
        <Subtitle>I'm creating noice web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Destination Dentistry"
          link="http://destinationdentistry.in/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is for the #number1 Dentist in Goa.
          </ProjectCard>
          <ProjectCard
            title="Anusha's Designer Studio"
            link="http://anushas.in/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            The hotest and latest collection of designer gowns , dresses and much more.
          </ProjectCard>
          <ProjectCard
            title="Codewell Computers"
            link="http://codewellcomputers.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Coding classes for young kids. 
          </ProjectCard>
          <ProjectCard
            title="GubbleBums"
            link="http://gubblebums.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A Marketting Agency that helps you elevate your business.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={me} alt="Shubham Modi" />
          <AboutSub>
            A True Web developer. With knowledge about latest and greatest web Technologies.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          HTML, CSS, JAVASCRIPT, PHP.
          WORDPRESS.
          REACT AND GRAPHQL WEBSITES.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:shubhammodi004@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.facebook.com/shubham.modi.5851">Facebook</a> &{' '}
            <a href="https://www.instagram.com/monkey_d_modi/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Shubham Modi.{' '}
          <a href="https://github.com/ShubhamModi004">Github Repository</a>. Made by{' '}
          <a href="www.shubhamzip.netlify.com">Shubham Modi</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
