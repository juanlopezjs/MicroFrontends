import React, { useState, useEffect } from "react";

export default function RandomUser() {
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
        <h3>User of the day</h3>
        <div>
          <button onClick={() => fetchRandomUser()}>New User</button>
        </div>
        {randomUserImg !== "" ? (
          <div>
            <img src={randomUserImg} width="400px" alt="User" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}