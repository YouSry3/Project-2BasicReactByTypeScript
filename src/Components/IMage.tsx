import type { HTMLAttributes } from "react";

interface IIMage extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  
}

const IMage = ({src, alt,...rest}: IIMage)=>{
  return (
      <>
        <img src={src} alt={alt} {...rest} />
      </>
  );
}

export default IMage;