import TextField from "@mui/material/TextField";
import { useState } from "react";

import { Item } from "../../Interfaces";

const ItemsComponent = (props: { item: Item; onChange(item: Item): void }) => {
  const [item, setItems] = useState<Item>(props.item);

  const setItemHandler =
    (prop: keyof Item) => (field: React.ChangeEvent<HTMLInputElement>) => {
      setItems((prevState) => {
        const newValue = { ...prevState, [prop]: field.target.value };
        props.onChange(newValue);
        return newValue;
      });
    };

  return (
    <div key={item.position} className="position">
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="AddExpense"
        value={item.position}
        onChange={setItemHandler("position")}
      />
      <TextField
        id="standard-adornment-amount"
        value={item.amount}
        onChange={setItemHandler("amount")}
      />
    </div>
  );
};

export default ItemsComponent;
