import React from 'react';

// const Box = ({ size, color }) => {
//   return (
//     <div
//       style={{
//         width: size,
//         height: size,
//         backgroundColor: color,
//       }}
//     />
//   );
// }

// Function for remove button
function Box({ id, handleRemove, width = 3, height = 3, backgroundColor = "green" }) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor
        }}
      />
      <button onClick={remove}>Remove Box</button>
    </div>
  );
}
// export default Box;
export default Box;