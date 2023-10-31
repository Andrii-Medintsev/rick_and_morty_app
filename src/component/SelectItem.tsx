import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  searchOptions: string[];
  onOptionChange: (opt: string[]) => void
}

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

export const SelectItem: React.FC<Props> = ({ searchOptions, onOptionChange }) => {

  const handleChange = (event: SelectChangeEvent<typeof searchOptions>) => {
    const {
      target: { value },
    } = event;
    onOptionChange(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <FormControl sx={{ width: 250, height: 60, position: 'absolute' }}>
      <InputLabel shrink={false}>
        {searchOptions.length ? '' : 'Select Item'}
      </InputLabel>
      <Select
        multiple
        value={searchOptions}
        onChange={handleChange}
        input={<OutlinedInput label='Tag' />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        sx={{
          backgroundColor: '#f5f5f5',
          height: '100%',
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              border: 0,
            },
        }}
      >
        {['Character', 'Location', 'Episodes'].map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={searchOptions.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
