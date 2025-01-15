import "./styles.css";
function Set(){
  return <article className="article">
    <h2 className="article__title">Happiness</h2>
    <label htmlFor="thing">THing</label>
    <input type="text" id="thing"/>
    <a href="wikipedia.com" className="article__link">link</a>
  </article>
 }
export default function App() {
  return <Set/>
}
