import "./app.styles.css";
import WebDevAnimation from "./components/web-dev-animation/webDev";

function App() {
  return (
    <div className="app">
      <h1 className="main__title">GSAP animation</h1>
      <div className="app__animation">
        <WebDevAnimation />
      </div>
    </div>
  );
}

export default App;
