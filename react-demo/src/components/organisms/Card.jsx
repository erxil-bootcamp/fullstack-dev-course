import React from "react";
import Button from "../atoms/Button";

const Card = () => {
  return (
    <div className="p-5 border border-blue-500 rounded-md">
      <h2 className="font-bold text-orange-500">Card title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod cum
        veniam repellendus. Dolorum necessitatibus sint temporibus, asperiores
        illo mollitia dolores eius alias fugiat corporis tempora nostrum dolorem
        quisquam iste.
      </p>
      <Button />
    </div>
  );
};

export default Card;
