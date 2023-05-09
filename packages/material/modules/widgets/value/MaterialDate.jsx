import React from "react";
import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";

export default (props) => {
  const {value, setValue, readonly, customProps, dateFormat, valueFormat, placeholder} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const useKeyboard = window?.matchMedia
    ? window.matchMedia?.("(pointer:fine), (pointer:none)").matches
    : props.useKeyboard;
  const Picker = useKeyboard ? KeyboardDatePicker : DatePicker;

  return (
    <FormControl>
      <Picker
        readOnly={readonly}
        disabled={readonly}
        placeholder={!readonly ? placeholder : ""}
        format={dateFormat}
        value={value || null}
        onChange={handleChange}
        {...customProps}
      />
    </FormControl>
  );
};