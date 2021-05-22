import React, { useState, useEffect } from "react";

function App() {
  const [companyImg, setCompanyImg] = useState(null);

  const fetchCompany = () => {
    setCompanyImg("");
    fetch(`https://random-data-api.com/api/company/random_company`)
      .then((res) => res.json())
      .then((companyInfo) => {
        setCompanyImg(companyInfo.logo);
      });
  };

  useEffect(() => {
    if (companyImg === null) {
      fetchCompany();
    }
  });

  return (
    <div>
      <header>
        <h3>Company of the day</h3>
        <div>
          <button onClick={() => fetchCompany()}>New Company</button>
        </div>
        {companyImg !== "" ? (
          <div>
            <img src={companyImg} width="400px" alt="company" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;