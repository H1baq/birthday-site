import { useState } from "react";
import "./App.css";
import img from './assets/image.jpeg';

export default function App() {
  const [screen, setScreen] = useState(1);
  const [showSong, setShowSong] = useState(false);

  return (
    <div className="page">
      {screen === 1 && (
        <section className="fullScreen fade">
          <h1>Happy Birthday, Nasser 🎂</h1>
          <p className="miniText">
            Welcome to a little starry journey made with love,
            just for you ✨
          </p>
          <button onClick={() => setScreen(2)}>
            Start the Journey 🌙 →
          </button>
        </section>
      )}

   {screen === 2 && (
  <section
    className="fullScreen fade"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h2>🎉 Happy Birthday Bestfriend!</h2>
    <p>
      Nasser, today is all about you.  
      May your day be filled with laughter, warmth, and love 💙
    </p>
    <div className="navButtons">
      <button onClick={() => setScreen(1)}>← Back</button>
      <button onClick={() => setScreen(3)}>Next →</button>
    </div>
  </section>
)}7


      {/* SCREEN 3 — Inside Jokes */}
      {screen === 3 && (
        <section className="fullScreen fade">
          <h2>😂 Nasser Once Said…</h2>
          <ul className="jokesList">
            <li>“Something about me you know...”</li>
            <li>“Whats in it for me”</li>
            <li>“You must really hate my guts”</li>
            <li>“And thus I rest my case”</li>
          </ul>
          <p className="miniText">
            Honestly, all your jokes suck 😭✨
          </p>
          <div className="navButtons">
            <button onClick={() => setScreen(2)}>← Back</button>
            <button onClick={() => setScreen(4)}>
              Final Surprise 🎁 →
            </button>
          </div>
        </section>
      )}

      {screen === 4 && (
        <section className="fullScreen fade">
          <h2>💌 Final Birthday Surprise</h2>
          <p>
            Nasser, you’re more than my bestfriend.  
            You’re family ❤️ 
          </p>
          <p>
            Thank you for being the comfort, the chaos, and the laughter in my life 💙
          </p>
          {!showSong ? (
            <button onClick={() => setShowSong(true)}>
              Click to Play Your Surprise Song 🎶
            </button>
          ) : (
            <div className="youtubeBox">
              <p className="miniText">🎵 Jungkook — Still With You 🌙</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/djKdPZiJdvA"
                title="Still With You - Jungkook"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <h3 className="finalMessage">
            Happy Birthday, Nasser ❤️✨
          </h3>
          <div className="navButtons">
            <button onClick={() => setScreen(3)}>← Back</button>
            <button onClick={() => setScreen(1)}>Restart 🌙</button>
          </div>
        </section>
      )}
    </div>
  );
}
