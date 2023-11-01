import { MoreVertOutlined } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const FloatingButton = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        transform: 'translateX(50%) translateY(50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {isActive && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 80,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <IconButton
            sx={{ width: 40, height: 40 }}
            onClick={() => setDrawerIsOpen(true)}
          >
            <AiOutlineExclamationCircle />
          </IconButton>
          <IconButton
            disabled={location.pathname !== '/'}
            sx={{ width: 40, height: 40 }}
          >
            <FiDownload />
          </IconButton>
        </Box>
      )}

      <IconButton onClick={() => setIsActive(!isActive)}>
        {!isActive ? <MoreVertOutlined /> : <ClearIcon />}
      </IconButton>

      <Drawer
        PaperProps={{
          sx: {
            height: '570px',
            width: '420px',
            top: '33%',
            padding: '16px',
            borderRadius: '10px 0 0 10px',
          },
        }}
        anchor='right'
        open={drawerIsOpen}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: '250px' }}>
          <Typography fontSize={20} fontWeight={500} sx={{ marginBottom: '16px' }}>
            History
          </Typography>

          <Box>
            Action 1
          </Box>

          <Button
            sx={{
              background: '#fff',
              justifyContent: 'left',
              padding: '0 5px',
              height: 'fit-content',
              width: 'fit-content',
              minWidth: 'fit-content',
              position: 'absolute',
              bottom: '16px',
              color: blue[500],
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
            onClick={() => setDrawerIsOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default FloatingButton;
