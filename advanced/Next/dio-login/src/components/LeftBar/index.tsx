
import {BarContainer, BarItems, BarItem} from "./styles"
import { IItems } from "./types";



const LeftBar: React.FC<IItems> = ({ items }) => {
  return (
    <BarContainer>
      <BarItems>
         <BarItem ><a href="">Teste</a></BarItem>
      </BarItems>
    </BarContainer>
  );
}

export default LeftBar;