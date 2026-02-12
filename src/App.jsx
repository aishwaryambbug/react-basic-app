import { profiles } from "./data/profiles";
import ProfileCard from "./component/Profile/ProfileCard";
import "./index.css";

function App() {
  return (
    <main className="app">
      <h1>Interactive Profile Cards</h1>
      <section className="grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </section>
    </main>
  );
}

export default App;


