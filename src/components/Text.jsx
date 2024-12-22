import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = () => {
  const typedTextSpan = useRef(null);
  const cursorSpan = useRef(null);

  const textArray = ["Keshav Prasath","Web Developer","Web Designer"];
  const typingDelay = 2000;
  const erasingDelay = 1000;
  const newTextDelay = 2000; // Delay between current and next text
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;
    let newWordTimeout;

    if (isTyping) {
      if (charIndex < textArray[textArrayIndex].length) {
        cursorSpan.current.classList.add("typing");
        typedTextSpan.current.textContent += textArray[textArrayIndex].charAt(charIndex);
        setCharIndex(charIndex + 1);
        typingTimeout = setTimeout(() => setIsTyping(true), typingDelay);
      } else {
        cursorSpan.current.classList.remove("typing");
        newWordTimeout = setTimeout(() => setIsTyping(false), newTextDelay);
      }
    } else {
      if (charIndex > 0) {
        cursorSpan.current.classList.add("typing");
        typedTextSpan.current.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        setCharIndex(charIndex - 1);
        erasingTimeout = setTimeout(() => setIsTyping(false), erasingDelay);
      } else {
        cursorSpan.current.classList.remove("typing");
        setTextArrayIndex((textArrayIndex + 1) % textArray.length);
        setIsTyping(true);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(newWordTimeout);
    };
  }, [charIndex, isTyping]);

  useEffect(() => {
    const initialTimeout = setTimeout(() => setIsTyping(true), newTextDelay + 250);
    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div>
      <span className="typed-text bg-gradient-to-r
from-blue-500
via-indigo-700
to-fuchsia-500
bg-clip-text
text-transparent" ref={typedTextSpan}></span>
      <span className="cursor typing bg-gradient-to-r
from-blue-500
via-indigo-700
to-fuchsia-500
bg-clip-text
text-transparent" ref={cursorSpan}></span>
    </div>
  );
};

export default TypingEffect;
