import * as React from 'react';
import { Container } from "@mui/system";
import { Typography, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Address() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container fixed>
      <Typography variant="h5" gutterBottom noWrap
        sx={{
          fontWeight: "700",
          margin: "20px 0px",
        }}
      >
        Address book
      </Typography>
      <Stack 
        sx={{
          padding: "20px 16px",
          backgroundColor: "#fff",
          marginBottom: "20px",
        }}
      >
        <AddIcon 
          sx={{
            color: "green",
            marginRight: "10px",
            margin: "0 0 0 auto",
            cursor: "pointer",
          }}
        />
      </Stack>
      {
        Array.from(Array(2)).map((_, i) => {
          return (
          <TableContainer component={Paper}
            key={i + 1}
            sx={{
              marginBottom: "20px",
            }}
          >
            <Table sx={{ minWidth: 650,}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Keys</TableCell>
                  <TableCell>Values</TableCell>                
                  <TableCell align="right">
                    <ModeEditIcon
                        sx={{
                          color: "green",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                      />
                    <DeleteIcon
                        sx={{
                          color: "red",
                          cursor: "pointer",
                        }}
                        onClick={handleClickOpen}
                      />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Home
                    </TableCell>
                    <TableCell component="th" scope="row">
                      { i + 1 }
                    </TableCell>
                    <TableCell align="right">
                        <BeenhereIcon 
                          sx={{
                            color: "green",
                          }}
                        />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Address
                    </TableCell>
                    <TableCell component="th" scope="row">
                      AV YARMOUK RUE 1 NR 12
                    </TableCell>
                    <TableCell align="right">
                    <BeenhereIcon 
                          sx={{
                            color: "green",
                          }}
                        />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Number Phone
                    </TableCell>
                    <TableCell component="th" scope="row">
                      06 18 09 25 39
                    </TableCell>
                    <TableCell align="right">
                    <BeenhereIcon 
                          sx={{
                            color: "green",
                          }}
                        />
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          )
        })
      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete this address from the address book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "#272727",
            }}
            autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            sx={{
              color: "#272727",
            }}
          onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}; 