import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponents } from "@/components/BoxWithClassName/BoxWithStyledComponents.js";



export default function HomePage() {
  console.log("")
  return (
    <div>
      <BoxWithStyledComponents/>
      <BoxWithStyledComponents isBlack />
    </div>
  );
}
