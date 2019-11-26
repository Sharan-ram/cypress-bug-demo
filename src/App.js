import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function App() {
  const [dialog, setDialog] = useState(false);
  const [selectedFood, setSelectedFood] = useState();
  const foods = ["Chicken", "Mutton", "Beef", "Pork"];
  return (
    <div>
      {!dialog && <Button onClick={() => setDialog(true)}>FOODS</Button>}
      <Menu open={dialog}>
        {foods.map((food, index) => (
          <MenuItem
            onClick={() => {
              setSelectedFood(index);
              setDialog(false);
            }}
          >
            {food}
          </MenuItem>
        ))}
      </Menu>
      {selectedFood !== undefined && (
        <div>
          The food you have selected is <span>{foods[selectedFood]}</span>
        </div>
      )}
    </div>
  );
}

export default App;
