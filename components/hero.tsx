import React from 'react';
import Container from './container';

const hero = () => {
  return (
    <Container>
      <section className="flex flex-col items-center py-20 gap-6 w-full">
          <div className=" text-center flex flex-col gap-6">
            <h1 className=" text-6xl font-sans font-bold max-[350px]:text-4xl">ElitesVerse: The Information Platform</h1>
            <p className="text-xl text-gray-600">We inform, educate and update you one post at a time!</p>
          </div>
          <div className="flex items-center gap-4 border border-black px-4 py-2 rounded-lg max-sm:w-full max-sm:flex-col max-sm:border-none">
            <input type="email" name="" id="" placeholder="Enter your email"  className="text-base w-96 outline-0 rounded-lg max-md:w-11/12 max-sm:border max-sm:p-2 border-black"/>
            <button className="bg-black text-white text-base px-4 py-2 rounded-lg max-sm:w-11/12">Subscribe</button>
          </div>
        </section>
    </Container>
  )
}

export default hero;