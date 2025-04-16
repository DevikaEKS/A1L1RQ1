import React from 'react';
import './CongratulationsCard.css';

function CongratulationsCard() {
  return (
    <div className="container-fluid backgroundpart">
      <div className="contentcard">
        <h2 className="congratshead">Congratulations</h2>
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h4 className="name">Kiran V</h4>
          <p className="college">
            Vishnu Institute of Computer Education and Technology,<br />Bhimavaram
          </p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
          alt="Watch"
          className="gift-img"
        />
      </div>
    </div>
  );
}

export default CongratulationsCard;
