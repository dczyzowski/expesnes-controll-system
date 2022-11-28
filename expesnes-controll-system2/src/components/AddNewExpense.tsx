import TextField from "@mui/material/TextField";

const AddNewExpense = () => {
  const onSubmit = () => console.log("submited");

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
};

export default AddNewExpense;
