import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
          <h2>A useless book full of information</h2>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            {" "}
            <a
              href="https://github.com/jeandar11/she-codes-react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-cource code
            </a>{" "}
            by Jeanne Darcel thanks to{" "}
            <a href="https://shecodes.io" target="_blank" rel="noreferrer">
              SheCodes
            </a>{" "}
            👩‍💻
          </small>
        </footer>
      </div>
    </div>
  );
}
