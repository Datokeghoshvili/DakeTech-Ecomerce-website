import React from "react";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            {/* Add alt attribute with meaningful text */}
            <img src='./images/banner-1.png' alt='Banner 1' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            {/* Add alt attribute with meaningful text */}
            <img src='./images/banner-2.png' alt='Banner 2' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
