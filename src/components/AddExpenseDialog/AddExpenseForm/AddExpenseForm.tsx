import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Selector from "../Selector/Selector";

import { Expense, InvoiceItem } from "../../Interfaces";
import ItemsComponent from "./ItemsComponent";

const AddExpenseForm = (props: {
  expense: Expense;
  onChange(value: Expense): void;
}) => {
  //TODO get user from global
  const getUser = () => {
    return "Damian";
  };

  const [items, setItems] = useState<InvoiceItem[]>([
    { position: "", amount: 0 },
  ]);

  const handleChange =
    (prop: keyof Expense) => (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange({ ...props.expense, [prop]: event.target.value });
    };

  //TODO WHY DATE UPDATING?
  const setDate = (date: Date | null) => {
    props.onChange({
      ...props.expense,
      date: date ? date : new Date(),
    });
  };

  const addNewPositionHandler = () => {
    setItems((prevItems) => {
      const newArray = [...prevItems, { position: "", amount: 0 }];
      return newArray;
    });
    console.log(items);
  };

  const changeItem = (item: InvoiceItem, index: number) => {
    const newItems: InvoiceItem[] = [...props.expense.items!];
    newItems[index] = item;
    props.onChange({ ...props.expense, items: newItems });
  };

  return (
    <div>
      <DialogContent>
        <TextField
          id="outlined-read-only-input"
          label="User"
          defaultValue={getUser()}
          InputProps={{
            readOnly: true,
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of invoice"
            value={props.expense.date}
            onChange={setDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Selector
          vendor={props.expense.vendor}
          onChange={handleChange("vendor")}
        />
        {items.map((item, index) => {
          return (
            <ItemsComponent
              key={index}
              index={index}
              item={item}
              onChange={changeItem}
            />
          );
        })}
        <button onClick={addNewPositionHandler}>DODAJ +</button>
      </DialogContent>
    </div>
  );
};

export default AddExpenseForm;
