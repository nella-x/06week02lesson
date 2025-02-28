import { useEffect, useState } from "react";
import "./App.css";

type God = {
  name: string;
  domain: string;
  symbol: string;
};

const emojiMap: { [key: string]: string } = {
  Sky: "⚡️",
  Marriage: "🦚",
  Sea: "🌊",
  Wisdom: "🦉",
  Sun: "🌞",
  Hunt: "🏹",
  Thunderbolt: "⚡️",
  Peacock: "🦚",
  Trident: "🔱",
  Owl: "🦉",
  Lyre: "🎵",
  "Bow and Arrow": "🏹",
};

function App() {
  const [gods, setGods] = useState<God[]>([]);

  const fetchApi = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/gods");
      const data = await response.json();
      setGods(data.gods);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="app-container">
      <h1>Greek Gods</h1>
      <div className="card-container">
        {gods.map((god, index) => (
          <div className="card" key={index}>
            <div className="emoji">{emojiMap[god.domain] || emojiMap[god.symbol] || "🧿"}</div>
            <h2>{god.name}</h2>
            <p>
              <strong>Domain:</strong> {god.domain}
            </p>
            <p>
              <strong>Symbol:</strong> {god.symbol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
