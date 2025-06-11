import type { HTMLAttributes } from "react";

interface IIMage extends HTMLAttributes<HTMLImageElement> {
  imageURL: string;
  alt?: string;
  
}

const IMage = ({imageURL, alt,...rest}: IIMage)=>{
  return (
      <>
        <img src={imageURL} alt={alt} {...rest} />
      </>
  );
}

export default IMage;