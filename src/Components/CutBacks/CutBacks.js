import "./CutBacks.css";
import { Container } from "@mui/system";
import { Typography, Stack, Grid, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

export default function CutBacks() {
  return (
    <Stack
      sx={{
        backgroundColor: "#f7f7f7",
      }}
    >
        <div className="ab-cutBacks" 
          style={{
            backgroundImage: `url(${ require("../../images/Corona-Affects-Imports-Of-Electronics-Products-BIG.jpg") })`,
          }}
        >
            <div className="bg">
              <Container fixed>
                <Grid>
                  <Typography variant="h4" component="h2"
                    sx={{
                      marginBottom: "10px",
                    }}
                  >
                    Discounts up to 10%
                  </Typography>
                  <Link to="/prodacts" onClick={() => {
                    document.documentElement.scrollTop = 0;
                  }}>
                    <Button 
                      endIcon={ <ArrowForwardIcon /> }
                      variant="outlined"
                      style={{
                        color: "#fff",
                        borderColor: "#fff",
                        textTransform: "none",
                      }}
                    >
                      Shoping Electronec
                    </Button>
                  </Link>
                </Grid>
              </Container>
            </div>
        </div>
    </Stack>
  );
};