import React from "react";

import { Button, Title } from "./";

const Div = ({ div }) => {
  return (
    <div className={div.className != null ? div.className : "div"}>
      {div.image != null && <img src={div.image.src} alt={div.image.alt} />}
      {div.title != null && <Title title={div.title} />}
      {div.p != null && <p>{div.p}</p>}
      {div.span != null && <span>{div.span}</span>}
      {div.button != null && <Button button={div.button} />}
      {div.svg != null && <span className="spanSvg">{div.svg}</span>}
      {div.date != null && <time dateTime={div.date}>{div.date}</time>}
      {div.div != null && <Div div={div.div} />}
    </div>
  );
};

export default Div;
