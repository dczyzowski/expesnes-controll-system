import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import LoadingSpinner from "./LoadingSpinner";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Expense } from "./Interfaces";

export default function AddFormDialog(props: {}) {
  const [open, setOpen] = useState(false);
  const [expense, setExpense] = useState<Expense>();
  const [loading, setLoading] = useState<boolean>(false);

  const [currentVendor, setVendor] = useState<string>(
    "Profit Media - Sławomir Trzósło"
  );

  const [currentItem, setCurrentItem] = useState<string>("");

  const getUser = () => {
    return "Damian";
  };

  const [tempDate, setTempDate] = useState<Date>(new Date());

  const tempExpense: Expense = {
    user: getUser(),
    amount: 0,
    vendor: "",
    date: tempDate,
  };

  const items = [""];

  //simulate internet connection TODO: fetch API connection
  const checkData = () =>
    setTimeout(() => {
      setOpen(false);
      setLoading(false);
      setExpense(tempExpense);
      console.log(tempExpense, expense);
    }, 1000);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //TODO Check data
  const handleSave = () => {
    setLoading(true);
    console.log(tempExpense, expense);
    checkData();
  };

  //TODO API NIP z GUS
  const vendorsArray = [
    "Profit Media - Sławomir Trzósło",
    "Chroma.pl",
    "Coś innego",
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setVendor(event.target.value);
  };

  return (
    <div>
      <Fab id="fab" onClick={handleClickOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Expense</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            disabled
            id="name"
            label="Damian"
            type="email"
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic example"
              value={tempExpense.date}
              onChange={(newValue) => {
                setTempDate(newValue ? newValue : new Date());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            autoFocus
            //    ref={amountInput}
            margin="dense"
            id="name"
            label="Damian"
            type="email"
            fullWidth
            variant="standard"
          />
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentVendor}
            label="Age"
            onChange={handleChange}
          >
            {vendorsArray.map((vendor) => {
              return (
                <MenuItem key={vendor} value={vendor}>
                  {vendor}
                </MenuItem>
              );
            })}
          </Select>
          {items.map((item) => (
            <div key={item} className="position">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Select vendor"
                value={currentItem}
                onChange={(field) => setCurrentItem(field.target.value)}
                fullWidth
                variant="standard"
              />
            </div>
          ))}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Damian"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Damian"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      <LoadingSpinner isVisible={loading} />
    </div>
  );
}
