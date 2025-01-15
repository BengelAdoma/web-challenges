export default function App() {
  return <Greetings name ="Benny"/>;
}

function Greetings(props){
  let benny = props.name.toUpperCase()
  return <>
  
  <h1>{benny}</h1>
  <p>{benny}</p>
  </>
}