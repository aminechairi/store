import "./CutBacks.css";
import { Container } from "@mui/system";
import { Typography, Stack } from "@mui/material";

export default function CutBacks() {
  return (
    <Stack
      sx={{
        backgroundColor: "#f7f7f7",
      }}
    >
      <Container fixed>
        <div className="ab-cutBacks" 
          style={{
            backgroundImage: `url(${ require("../../images/laptops.png") })`,
          }}
        >
            <div className="bg">
              <Typography variant="h4" component="h2">
                Up to 30% discount on laptops
              </Typography>
            </div>
        </div>
      </Container>
    </Stack>
  );
}