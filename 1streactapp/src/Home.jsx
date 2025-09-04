import cow from "./assets/Logo.png";

function Home() {
  const a = 10;
  const mycolor = { color: "red", backgroundColor: "blue" }; // Internal CSS

  return (
    <>
      <h1>Home Page</h1>
      <p style={{ color: "red", backgroundColor: "yellow" }}>
        This is a P tag with inline CSS
      </p>
      <p style={mycolor}>This is a P tag with mycolor</p>
      <img src={cow} alt="Cow2Studios Logo" width={200} />
    </>
  );
}

export default Home;
