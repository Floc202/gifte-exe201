import React, { useState } from "react";

const Customization = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    // Gửi dữ liệu tùy chỉnh lên server
  };

  return (
    <div>
      <h1>Customize Your Gift</h1>
      <div>
        <label>Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label>Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Customization;
