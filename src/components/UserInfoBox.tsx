import TextField from "@mui/material/TextField";
const UserInfoBox = () => {
  const onLogin = () => console.log("login");

  return (
    <div>
      <form onSubmit={onLogin}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
};

export default UserInfoBox;
