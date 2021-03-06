import React from "react";

const Social = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item, index) => (
        <a key={index} href={item.href}>
          <img src={item.image.src} alt={item.image.alt} />
        </a>
      ))}
    </div>
  );
};

export default Social;
