import React from 'react';
import image from '../monstera-leaf.jpg';

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="monstera-leaf" 
        className="absolute object-cover h-full" 
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Aloha, I'm Kapeh
        </h1>
      </section>
    </main>
  )
}