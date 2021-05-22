import React, { useState, useEffect } from "react";

export default function SearchingUser(props) {
  const { searching } = props.match.params;
  const [randomUserImg, setRandomUserImg] = useState(null);

  const fetchRandomUser = () => {
    setRandomUserImg("");
    fetch(`https://random-data-api.com/api/users/random_user`)
      .then((res) => res.json())
      .then((UserInfo) => {
        setRandomUserImg(UserInfo.avatar);
      });
  };

  useEffect(() => {
    if (randomUserImg === null) {
      fetchRandomUser();
    }
  });

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        {!searching ? (
          <div>Needs a search</div>
        ) : (
          <div>
            <h1 className="name_user">{searching}</h1>
            <img src={randomUserImg} width="400px" alt="Cat" />
          </div>
        )}
      </header>
    </div>
  );
}