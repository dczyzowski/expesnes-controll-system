import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Selector from "../Selector/Selector";

import { Expense } from "../../Interfaces";

const AddExpenseForm = (props: {
  tempExpense: Expense;
  onChange(value: Expense): void;
}) => {
  const [currentItem, setCurrentItem] = useState<string>("");

  //TODO get user from global
  const getUser = () => {
    return "Damian";
  };

  const handleChange =
    (prop: keyof Expense) => (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange({ ...props.tempExpense, [prop]: event.target.value });
    };

  //TODO WHY DATE UPDATING?
  const setDate = (date: Date | null) => {
    props.onChange({
      ...props.tempExpense,
      ["date"]: date ? date : new Date(),
    });
  };

  const items = [""];

  return (
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
          value={props.tempExpense.date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Selector
        vendor={props.tempExpense.vendor}
        onChange={handleChange("vendor")}
      />

      {items.map((item) => (
        <div key={item} className="position">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="AddExpense"
            value={currentItem}
            onChange={(field) => setCurrentItem(field.target.value)}
          />
          <TextField
            id="standard-adornment-amount"
            value={props.tempExpense.amount}
            onChange={handleChange("amount")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </div>
      ))}
    </DialogContent>
  );
};

export default AddExpenseForm;
