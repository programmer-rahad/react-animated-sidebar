import React from "react";
import parse from 'html-react-parser';
function Link({ to, svg }) { 
  
  return (
    <li>
      <a href={to}> 
        {parse(svg)}
        {to === "/" ? "home" : to.slice(1)}
      </a>
    </li>
  );
}

export default Link;
