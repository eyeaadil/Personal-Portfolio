'use client'
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const paragraph = `
    I'm currently a sophomore at IIIT Gwalior, where I'm deeply engaged in the world of technology and software development.
    My passion lies in crafting dynamic and responsive user interfaces as well as building robust, scalable backend systems.
    I am constantly expanding my skill set and am currently delving into DevOps practices.
    I'm on the lookout for internship opportunities where I can apply my skills and continue to grow as a developer.
    When I'm not immersed in code, you'll find me enjoying competitive gaming, particularly BGMI and Valorant.
    I also have a keen interest in travel and love discovering new places and cultures.
    Feel free to reach out if you'd like to connect or discuss potential opportunities!
  `;

  const sentences = paragraph.split('\n').filter(Boolean);

  return (
    <div className="mt-12 p-8">
      <h1 className="text-5xl font-serif font-bold mb-4 text-slate-200">About Me</h1>
      <div className="text-lg  font-serif leading-relaxed text-slate-300">
        {sentences.map((sentence, index) => (
          <p key={index} className="mb-2">
            {sentence.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block mr-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: wordIndex * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
