import React from "react";

import { Title, Button, Div } from "./";

const Article = ({ article }) => {
  return (
    <article className="article">
      {article.image != null && (
        <img src={article.image.src} alt={article.image.alt} />
      )}
      {article.title != null && <Title title={article.title} />}
      {article.p != null && <p>{article.p}</p>}
      {article.span != null && <span>{article.span}</span>}
      {article.button != null && <Button button={article.button} />}
      {article.date != null && (
        <time dateTime={article.date}>{article.date}</time>
      )}
      {article.svg != null && <span className="spanSvg">{article.svg}</span>}
      {article.div != null && <Div div={article.div} />}
    </article>
  );
};

export default Article;
