import TextField from "@mui/material/TextField";
import { useState } from "react";

import { InvoiceItem } from "../../Interfaces";

const ItemsComponent = (props: {
  index: number;
  item: InvoiceItem;
  onChange(item: InvoiceItem, index: number): void;
}) => {
  const [item, setItems] = useState<InvoiceItem>(props.item);

  const setItemHandler =
    (prop: keyof InvoiceItem) =>
    (field: React.ChangeEvent<HTMLInputElement>) => {
      setItems((prevState) => {
        const newValue = { ...prevState, [prop]: field.target.value };
        props.onChange(newValue, props.index);
        return newValue;
      });
    };

  return (
    <div className="position">
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
