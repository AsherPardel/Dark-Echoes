import { episodeList } from "./data";
import { useState } from "react";
import  styles from `./index.css`;

export default function App() {
  // TODO
  // === STATE ===
  let selectedEpisode;
  const [selectedEP, setSelectedEP] = useState(null);

  function Header() {
    return (
      <header>
        <h1>Dark Echoes</h1>
      </header>
    );
  }

  function EpisodeDetails() {
    const HandleClick = () => {
      //opens URL in new tab
      window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "_blank",
        "noopener,noreferrer",
      );
    };

    if (!selectedEP) {
      return (
        <section className="card-details">
          <h2>Episode Details</h2>
          <p>Select an Episode to learn more</p>
        </section>
      );
    }

    return (
      <section className="card-details">
        <h3>Episode {selectedEP.id}</h3>
        <h3>{selectedEP.title}</h3>
        <p>{selectedEP.description}</p>
        <button className="button" onClick={HandleClick}>Watch Now</button>
        <p>the button works please try it</p>
      </section>
    );
  }

  function EpisodeList() {
    return (
      <section className="card">
        <h2>Episodes</h2>
        <ul className="episode-grid">
          {episodeList.map((episode) => {
            return (
              <li
                className="episode-item"
                key={episode.id}
                onClick={() => setSelectedEP(episode)}
              >
                <h3>{episode.title}</h3>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  //rendering??
  return (
    <main className="app">
      <Header />
      <article className="content">
      <EpisodeList />
      <EpisodeDetails />
      </article>
    </main>
  );
  // === COMPONENTS ===

  // === RENDER ===
}
