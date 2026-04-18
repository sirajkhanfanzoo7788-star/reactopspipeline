import React, { useEffect, useState } from "react";
import "./App.css";

const message = "Hi Siraj Janu 💖 How are you?";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i + 1));
      i++;
      if (i === message.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* Floating hearts */}
      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Glass card */}
      <div className="card">
        <table className="message-table">
          <tbody>
            <tr>
              <td>
                <h1 className="text">{text}</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;