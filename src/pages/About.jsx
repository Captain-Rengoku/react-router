import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center items-center h-[90%] flex-col'>
      <div className='bg-blue-600 p-4 font-bold rounded-lg text-center'>
      <p>This is About Page</p>
      <p>The Route is /user/about</p>
      <p>Here '/user' is the Route Prefix for '/about'</p>
      </div>
      <p className="text-gray-400 text-lg mt-24 mx-48">This About component demonstrates nested routing in React Router, <br /> showing that /user is the parent route and /about is its child.</p>
    </div>
  )
}

export default About
