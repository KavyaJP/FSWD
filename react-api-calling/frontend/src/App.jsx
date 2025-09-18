import React from "react";

function App() {
  var mydata = [
    { "name": "Kavya", "Gender": "Male", "Image": "https://randomuser.me/api/portraits/men/64.jpg" },
    { "name": "Vansh", "Gender": "Male", "Image": "https://randomuser.me/api/portraits/men/63.jpg" },
    { "name": "Aarya", "Gender": "Male", "Image": "https://randomuser.me/api/portraits/men/62.jpg" },
    { "name": "Priya", "Gender": "Female", "Image": "https://randomuser.me/api/portraits/women/61.jpg" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Data</h2>
      <table border={1} cellPadding="10" style={{ borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.Gender}</td>
                <td>
                  <img src={value.Image} alt={value.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;