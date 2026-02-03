import { useState } from "react";
import "./App.css";
import img from "./assets/image.jpeg";

export default function App() {
  const [screen, setScreen] = useState(1);
  const [showSong, setShowSong] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <div className="page">
      {/* SCREEN 1 */}
      {screen === 1 && (
        <section className="fullScreen fade">
          <h1>Happy Birthday, Nasser 🎂</h1>
          <p className="miniText">
            Welcome to a little starry adventure made with love,
            just for you ✨
          </p>
          <button onClick={() => setScreen(2)}>
            Start the Journey 🌙 →
          </button>
        </section>
      )}

      {/* SCREEN 2 */}
      {screen === 2 && (
        <section className="fullScreen fade screenTwo enterBeat">
          <img src={img} alt="Nasser" className="topIcon" />

          <div className="balloon balloon1"></div>
          <div className="balloon balloon2"></div>
          <div className="balloon balloon3"></div>

          <div className="confetti"></div>

          <h2>🎉 Happy Birthday Bestfriend!</h2>
          <p>
            Nasser, today is all about you.  
            May your day be filled with laughter, warmth, and love  
            and may Allah grant you more prosperous blessed years 💙
          </p>

          <div className="navButtons">
            <button onClick={() => setScreen(1)}>← Back</button>
            <button onClick={() => setScreen(3)}>Next →</button>
          </div>
        </section>
      )}

      {/* SCREEN 3 */}
      {screen === 3 && (
        <section className="fullScreen fade">
          <h2>😂 Nasser Once Said…</h2>

          <div className="thoughtsWrapper">
            {[
              "Something about me you know…",
              "Whats in it for me",
              "You must really hate my guts",
              "And thus I rest my case"
            ].map((text, i) => (
              <div className="thoughtBubble" key={i}>
                {text}
                <span></span><span></span><span></span>
              </div>
            ))}
          </div>

          <p className="miniText">
            Honestly, all your jokes suck 😭✨
          </p>

          <div className="navButtons">
            <button onClick={() => setScreen(2)}>← Back</button>
            <button onClick={() => setScreen(4)}>Next →</button>
          </div>
        </section>
      )}

      {/* SCREEN 4 */}
      {screen === 4 && (
        <section className="fullScreen fade scrollScreen">
          {!openLetter ? (
            <div className="envelope" onClick={() => setOpenLetter(true)}>
              💌
              <p className="miniText">Click to open</p>
            </div>
          ) : (
            <>
              <div className="letter fade">
                <p>
                  <strong>Nasser, you are more than just a friend ,you are family.</strong>
                  <br /><br />
                  I wish you nothing but the best in everything you do in this world and the next.
                  <br /><br />
                  Knowing you has brought me the truest sense of friendship.
                  Even on the days we don’t yap for 2+ hours (which honestly suck),
                  it never diminishes what we have.
                  <br /><br />
                  You’re funny… not more than me though 😭  
                  But you’re also one of the most genuine people I know.
                  <br /><br />
                  The way you value the people you love is rare,
                  and I hope you always remember that you are deeply loved and valued too.
                  <br /><br />
                  I pray you heal from all the things you never speak about.
                  <br /><br />
                  You basically merged into my routine without warning,
                  but I’m glad you did.
                  <br /><br />
                  And just so you know…
                  <br /><br />
                  <strong>We’re cuffed for life.</strong>  
                  Good luck trying to untangle your fate from mine.
                  <br /><br />
                  Thank you for being the comfort, the chaos,
                  and the laughter in my life.
                </p>
              </div>

              <button onClick={() => setScreen(5)}>
                Final Surprise 🎁 →
              </button>
            </>
          )}

          <div className="navButtons">
            <button onClick={() => setScreen(3)}>← Back</button>
          </div>
        </section>
      )}

      {/* SCREEN 5 */}
      {screen === 5 && (
        <section className="fullScreen fade">
          <h2>💫 One Last Thing…</h2>

          <p className="miniText">
            <strong>Dedicated to you on your special day!</strong>
          </p>

          <div className="youtubeBox">
            <p className="miniText">🎵 Jungkook — Still With You</p>
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

          <h3 className="finalMessage">
           お誕生日おめでとう！大好きだよ！ 🎂✨
          </h3>

          <div className="navButtons">
            <button onClick={() => setScreen(4)}>← Back</button>
            <button onClick={() => setScreen(1)}>Restart 🌙</button>
          </div>
        </section>
      )}
    </div>
  );
}