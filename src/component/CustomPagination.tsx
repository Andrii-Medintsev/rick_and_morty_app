import { Pagination, PaginationItem } from '@mui/material';
import React from 'react';

type Props = {
  pagesAmount: number;
  currentPage: number,
  onPageChange: (_: React.ChangeEvent<unknown>, value: number) => void
}

const CustomPagination: React.FC<Props> = ({
  pagesAmount,
  currentPage,
  onPageChange
}) => {
  return (
    <Pagination
      count={pagesAmount}
      page={currentPage}
      onChange={onPageChange}
      size='large'
      variant='outlined'
      shape='rounded'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '44px',
      }}
      renderItem={(item) => (
        <PaginationItem
          sx={{
            backgroundColor: '#3C3E44',
            '&:hover': {
              backgroundColor: '#3C3E44',
            },
          }}
          {...item}
        />
      )}
    />
  );
};

export default CustomPagination;
