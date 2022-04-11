import "./myBackground.css";

function MyBackground({ children }) {
  const backgroundPicture = "";
  // https://source.unsplash.com/random/1920x1080
  return (
    <div
      className="myBackground-container"
      style={{ backgroundImage: `url(${backgroundPicture})` }}
    >
      {children}
    </div>
  );
}

export default MyBackground;
