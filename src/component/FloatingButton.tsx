import { MoreVertOutlined } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { CharactersFilterType } from '../types/CharactersFilterType';

const FloatingButton = () => {
  const history = useAppSelector((state) => state.history.value);
  const characters = useAppSelector((state) => state.characters.value);

  const location = useLocation();

  const [isActive, setIsActive] = useState(false);
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

  const smallButtonStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    color: '#3C3E44',
    '&:hover': {
      backgroundColor: grey[300],
    },
    '&:disabled': {
      backgroundColor: grey[400],
    },
  };

  const convertFilterOption = (obj: CharactersFilterType) => {
    const values = Object.values(obj).filter((item) => item);

    return (
      <Box sx={{ display: 'flex', gap: '10px' }}>
        {values.map((item, i) => (
          <Typography
            key={i}
            sx={{
              backgroundColor: grey[200],
              paddingX: '8px',
              borderRadius: '5px',
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    );
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
            sx={smallButtonStyle}
            onClick={() => setDrawerIsOpen(true)}
          >
            <AiOutlineExclamationCircle />
          </IconButton>
          <IconButton
            disabled={location.pathname !== '/'}
            sx={smallButtonStyle}
          >
            <CSVLink
              data={characters}
              filename={'rick_and_morty_characters.csv'}
            >
              <FiDownload />
            </CSVLink>
          </IconButton>
        </Box>
      )}

      <IconButton
        onClick={() => setIsActive(!isActive)}
        sx={{ ...smallButtonStyle, width: 56, height: 56 }}
      >
        {!isActive ? <MoreVertOutlined /> : <ClearIcon />}
      </IconButton>

      <Drawer
        PaperProps={{
          sx: {
            height: '570px',
            width: '420px',
            top: '23%',
            padding: '16px',
            borderRadius: '10px 0 0 10px',
          },
        }}
        anchor='right'
        open={drawerIsOpen}
        onClose={toggleDrawer}
      >
        <Box>
          <Box>
            <Typography
              fontSize={20}
              fontWeight={500}
              sx={{ marginBottom: '16px' }}
            >
              History
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                overflow: 'scroll',
              }}
            >
              {history.map((item, i) => {
                if (typeof item === 'string') {
                  return (
                    <Box key={i}>
                      <Typography sx={{ color: grey[500] }}>
                        You've watched info about
                      </Typography>
                      <Typography
                        key={i}
                        sx={{
                          backgroundColor: grey[200],
                          paddingX: '8px',
                          borderRadius: '5px',
                          display: 'inline-block'
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  );
                } else if (Object.values(item).filter((i) => i).length) {
                  return (
                    <Box key={i}>
                      <Typography sx={{ color: grey[500] }}>
                        Character:
                      </Typography>
                      {convertFilterOption(item)}
                    </Box>
                  );
                }
              })}
            </Box>
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
              top: '16px',
              right: '16px',
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
