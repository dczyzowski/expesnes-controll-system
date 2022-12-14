import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { vendorsArray } from "../../Statics";

const Selector = (props: {
  vendor: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  //TODO API NIP z GUS

  const selectVendor = (event: SelectChangeEvent) => {
    props.onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="text-field">
      <div className="text-field__description">Select vendor</div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.vendor}
        label="Age"
        onChange={selectVendor}
      >
        {vendorsArray.map((vendor: string) => {
          return (
            <MenuItem key={vendor} value={vendor}>
              {vendor}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Selector;
