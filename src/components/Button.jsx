import React from 'react';

const Button = ({ text = 'See My Work', className = '' }) => {
  return (
    <a
      className={` ${className}`}
      href="#"
    >
      <span className="uppercase text-black font-semibold transition-transform duration-300 group-hover:translate-x-1">
        {text}
      </span>
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white-50 transition-transform duration-300 group-hover:scale-110">
        <img
          src="/images/arrow-down.svg"
          alt="arrow"
          className="w-4 h-4 animate-bounce-slow"
        />
      </div>

      {/* Background hover pulse */}
      <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
    </a>
  );
};

export default Button;
