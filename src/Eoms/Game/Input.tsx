import { observer } from "mobx-react-lite";
import { useState } from "react";
import GameState from "../../store/GameState";

const Input = observer(() => {

  const [store] = useState(GameState);

  return (
    <div>
      
    </div>
  )
});

export default Input;