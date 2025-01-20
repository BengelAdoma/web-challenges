import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
    const [people, setPeople] = useState(0);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter 
      count = {people} onAdd={() => setPeople(people + 1)} 
      onSubtract={() => setPeople(people -1)}/>
      <p>You are reserving a table for {people} people.</p>
    </div>
  );
}

