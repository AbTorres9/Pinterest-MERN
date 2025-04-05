import { IKImage } from "imagekitio-react";
import React from "react";

function Image({ path, alt, className, width, height }) {
  return (
    <>
      <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IMAGEKIT_ENDPOINT}
        path={path}
        className={className}
        transformation={[
          {
            height,
            width,
          },
        ]}
        alt={alt}
        loading="lazy"
        lqip={{ active: true, quality: 30 }}
      />
    </>
  );
}

export default Image;
