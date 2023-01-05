import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "what is react",
    content: "react is a javascript framework",
  },

  {
    title: "why is react used",
    content:
      "react is used to simplify our javascript code, and also makes reuseable components",
  },
  {
    title: "how do you use react",
    content: "you use react by creating components",
  },
];

export default () => {
  return <Accordion items={items} />;
};
