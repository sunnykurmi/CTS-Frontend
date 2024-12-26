import React from 'react'
import { RiArrowLeftSLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const InternshipForm = () => {
  const internshipCards = [
    {
      title: 'Digital Marketing',
      description: 'Digital marketing leverages online channels like social media, SEO, email, and content marketing to promote brands, engage audiences, and drive sales effectively in the digital age.',
      img: '/Images/internship/DM.png',
      link: '/apply-internship/digital-marketing',
    },
    {
      title: 'Content Creation',
      description: 'Content creation is the process of producing engaging blogs, videos, or social media posts to inform, attract, and retain audiences, enhancing brand visibility and engagement.',
      img: '/Images/internship/cc.png',
      link: '/apply-internship/content-creation',
    },
    {
      title: 'Research & Development',
      description: 'Research and Development (R&D) focuses on innovation, creating new products or improving existing ones through scientific research, testing, and experimentation to drive growth and meet market demands.',
      img: '/Images/internship/r&d.png',
      link: '/apply-internship/research&development', 
    },
    {
      title: 'SAT Tutor (Paid)',
      description: 'Hiring a paid SAT tutor with a 1500+ score to deliver expert guidance, personalized strategies, and test preparation tips to help students achieve exceptional results and academic success.',
      img: '/Images/internship/stt.png',
      link: '/apply-internship/SAT-tutor',
    },
    {
      title: ' SAT1600 - SAT Practice test',
      description: 'SAT  1600  practice  tests  provide  realistic simulations to help  students  prepare,  improve skills, and boost confidence, aiming for a perfect score with effective test-taking strategies.',
      img: '/Images/internship/sat1600.png',
      link: '/apply-internship/SAT-1600',
    },
    {
      title: 'UI/UX',
      description: 'UI/UX design focuses on creating user-friendly interfaces and seamless experiences, enhancing usability, aesthetics, and overall satisfaction for digital products or websites.',
      img: '/Images/internship/uiux.png',
      link: '/apply-internship/UI-UX',
    },
    {
      title: 'Video Editing',
      description: 'Video editing involves enhancing raw footage by   cutting , arranging,  and  adding  effects, transitions , and  audio  to  create polished, engaging videos for various purposes.',
      img: '/Images/internship/ve.png',
      link: '/apply-internship/video-editing',
    },
    {
      title: 'Web-Development',
      description: 'Web   development    involves   building   and maintaining websites, including front-end design, back-end    coding,  and ensuring  functionality, performance, and user experience across various devices and platforms.',
      img: '/Images/internship/wd.png',
      link: '/apply-internship/web-development',
    },
  ]
  return (
    <>
      <div className='w-full'>
        <div className="w-full h-fit p-5">
          <div className="w-44 max-[600px]:w-20 absolute left-0 flex items-center justify-center text-base">
            <Link
              className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
              to={`/`}
            >
              <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white max-[600px]:bg-transparent">
                <RiArrowLeftSLine className="text-[#0000009b] max-[600px]:text-white" />
              </div>
              <button className="mr-2 max-[600px]:hidden">Go Back</button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-center mt-2">CTS Internship</h1>
          <p className='mt-3 w-full px-48 text-center text-lg max-[600px]:px-5 max-[600px]:text-justify'>We are offering a dynamic internship program tailored to individuals passionate about diverse fields such as Digital Marketing, Content Creation, SAT Tutoring (requiring a 1500+ SAT score), Research & Development, UI/UX Design, Video Editing, and Web Development. Join us to gain hands-on experience, contribute to innovative projects like SAT1600 practice tests, and hone your skills in a collaborative and growth-oriented environment.</p>
          <div className="intern-cards max-[600px]:flex max-[600px]:gap-7 max-[600px]:overflow-x-auto max-[600px]:snap-x max-[600px]:snap-mandatory max-[600px]:items-center max-[1337px]:grid-cols-3 grid grid-cols-4 gap-y-12 px-24 py-12 max-[600px]:px-5" style={{ scrollBehavior: 'smooth' }}>
            {
              internshipCards.map((card, index) => (
                <div
                  key={index}
                  className="card w-64 h-[55vh] flex-shrink-0 rounded-md p-4 py-5 flex flex-col justify-between card-shadow max-[600px]:snap-center"
                >
                  <div className="img-container w-full h-44 overflow-hidden rounded-md">
                    <img className='w-full h-full object-cover' src={card.img} alt="" />
                  </div>
                  <h1 className="heading font-bold text-lg mt-2 leading-5 bg-gray-300 p-2 w-fit">
                    {card.title}
                  </h1>
                  <p className="text-sm mt-2 mb-4 w-full h-32 overflow-hidden leading-tight text-justify">
                    {card.description}
                  </p>
                  <a href={card.link} className="bg-[#008BDC] font-medium p-5 text-white py-2 rounded-md w-fit">
                    View More
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )

}

export default InternshipForm
