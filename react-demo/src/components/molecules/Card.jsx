import React, { useEffect, useMemo, useState } from "react";
import Button from "../atoms/Button";

const Card = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullname = useMemo(
    () => `${firstName} ${lastName}`,
    [firstName, lastName]
  );

  useEffect(() => {
    setFirstName("felix");
  }, [setFirstName]);

  const sampleArrayValue = ["home", "product", "cart"];

  return (
    <div className="p-5 border border-blue-500 rounded-md">
      <h2 className="font-bold text-orange-500">Card title</h2>
      <div>{fullname}</div>
      <input
        className="border border-blue-500"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        className="border border-blue-500"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <div>
        {fullname === "felix abacajen" ? "this is me" : "this is not me"}
      </div>
      <div>
        <ul className="text-red-500">
          {sampleArrayValue.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
      <Button />
    </div>
  );
};

export default Card;
