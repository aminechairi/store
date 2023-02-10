import * as React from 'react';
import { Container } from "@mui/system";
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import BeenhereIcon from '@mui/icons-material/Beenhere';

export default function AllOrders() {

  return (
    <Container fixed>
      <Typography variant="h5" gutterBottom noWrap
        sx={{
          fontWeight: "700",
          margin: "20px 0px",
        }}
      >
        Personel Data
      </Typography>
          <TableContainer component={Paper}
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
                        }}
                      />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      User Name
                    </TableCell>
                    <TableCell component="th" scope="row">
                        Amine Messeiyah
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
                      Email
                    </TableCell>
                    <TableCell component="th" scope="row">
                      aminemesseiyah@gmail.com
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
    </Container>
  );
};