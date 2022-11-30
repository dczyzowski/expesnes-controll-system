import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LoadingSpinner from "../LoadingSpinner";

import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";

import { Expense } from "../Interfaces";
import { dummyExpenseList } from "../Statics";

export default function AddFormDialog(props: {}) {
  const [open, setOpen] = useState(false);
  const [tempExpense, setTempExpense] = useState(dummyExpenseList[0]);
  const [loading, setLoading] = useState<boolean>(false);

  const pushData = async (body: Expense) => {
    console.log("body zdarzenia: " + body);

    //In this case I read data from django api problem was header and cors policy. I had to install cors on django project and allow my host
    await fetch("http://127.0.0.1:8000/api/task-create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        ["date"]: body.date.toISOString().split("T")[0],
      }),
    })
      .then((response) => response.json())
      .catch((e) => console.log("Błąd: " + e))
      .then((data) => console.log("Ok: " + JSON.stringify(data)));
  };

  //simulate internet connection TODO: fetch API push
  const checkData = () => {
    setTimeout(() => {
      setOpen(false);
      setLoading(false);
      pushData(tempExpense);
    }, 1000);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //TODO Check data
  const handleSave = () => {
    setLoading(true);
    checkData();
  };

  return (
    <div>
      <Fab id="fab" onClick={handleClickOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Expense</DialogTitle>
        <AddExpenseForm tempExpense={tempExpense} onChange={setTempExpense} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      <LoadingSpinner isVisible={loading} />
    </div>
  );
}
