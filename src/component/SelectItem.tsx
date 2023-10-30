import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const options = ['Character', 'Loaction', 'Episodes'];

export default function SelectItem() {
  const [searchOptions, setSearchOption] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof searchOptions>) => {
    const {
      target: { value },
    } = event;
    setSearchOption(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
      );
  };

  return (
    <div>
      <FormControl sx={{ width: 213, height: 60 }}>
        <InputLabel id='select'>Select Item</InputLabel>
        <Select
          labelId='select'
          id='multiple-checkbox'
          multiple
          value={searchOptions}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          sx={{ backgroundColor: '#f5f5f5', height: '100%', outline: 'none' }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={searchOptions.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
