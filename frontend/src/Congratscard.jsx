// import React from 'react';
// import './CongratulationsCard.css';

// function CongratulationsCard() {
//   const today = new Date();
//   return (
//     <div className="container-fluid backgroundpart">
//       <div className="datepart">
//         <div class="datebox">
//           <p>{today}</p>
//         </div>
//       </div>
//       <div className="contentcard">
//         <h2 className="congratshead">Congratulations</h2>
//         <div className="profile">
//           <img
//             src="https://randomuser.me/api/portraits/men/75.jpg"
//             alt="Profile"
//             className="profile-pic"
//           />
//           <h4 className="name">Kiran V</h4>
//           <p className="college">
//             Vishnu Institute of Computer Education and Technology,<br />Bhimavaram
//           </p>
//         </div>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
//           alt="Watch"
//           className="gift-img"
//         />
//       </div>
//     </div>
//   );
// }

// export default CongratulationsCard;


import React, { useState, useEffect } from 'react';
import './CongratulationsCard.css';

function CongratulationsCard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
      const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);


    return () => clearInterval(timer);
  }, []);

  const formatted = now.toLocaleString('en-GB', {
    weekday: 'long',
    day:     '2-digit',
    month:   'short',
    year:    'numeric',
    hour:    '2-digit',
    minute:  '2-digit',
    second:  '2-digit',
    hour12:  false
  });

  return (
    <div className='fullpart '>
       <div className="datepart">
        <div className="datebox">
          <label>{formatted}</label>
        </div>
      </div>
    <div className="container-fluid backgroundpart"> 
      <div className="contentcard">
        <h2 className="congratshead">Congratulations</h2>
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="profile-pic"/>
          <h4 className="name">Kiran V</h4>
          <p className="college">
            Vishnu Institute of Computer Education and Technology,<br />Bhimavaram
          </p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
          alt="Gift"
          className="gift-img"
        />
      </div>
    </div>
    </div>
  );
}

export default CongratulationsCard;
