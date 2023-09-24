import React from 'react';
import './Picture.css'; // Import CSS file for styling

function Picture() {
  return (
    <div className="picture-container">
      <img src="/Images/Group 15.png" alt="" className="image" />
      <img src="/Images/fresh.png" alt="" className="small-image" id="fresh-image" />
      <img src="/Images/look.png" alt="" className="small-image" id="look-image" />
      <img src="/Images/2022.png.png" alt="" className="small-image" id="year-image" />
    </div>
  );
}

export default Picture;
