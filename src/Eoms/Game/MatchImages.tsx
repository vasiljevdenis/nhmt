import { observer } from "mobx-react-lite";
import { useState } from "react";
import GameState from "../../store/GameState";

const MatchImages = observer(() => {

  const [store] = useState(GameState);

  return (
    <div>
      
    </div>
  )
});

export default MatchImages;