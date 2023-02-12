import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


export default function CardProdacts() {
  const value = 3.5;
  return (
    <Card>
      <CardActionArea>
        <Link to='/prodact/1' onClick={() => {
            document.documentElement.scrollTop = 0;
        }}>
          <CardMedia
            component="img"
            height="140"
            image={require("../../images/item.png")}
            alt="green iguana"
          />
        </Link>
        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
          style={{
              padding: '0px 16px',
          }}
        >
          <StyledRating
            name="customized-color"
            defaultValue={0}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </Box>
        <Link to='/prodact/1' onClick={() => {
            document.documentElement.scrollTop = 0;
        }}>
          <CardContent 
              style={{
                padding: '0px 16px 16px',
              }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Title prodact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The iPhone 14 comes with 6.1-inch OLED display and Apple's improved Bionic A15 processor. On the back there is a Dual camera setup with 12MP main camera and 12MP Ultra-wide sensor. Prices start from 799$.
            </Typography>
          </CardContent>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: "space-between",
              flexGrow: "wrape",
            }}
            style={{
              padding: '0px 16px 16px',
            }}
          >
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={1}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Box>{labels[value]}</Box>
          </Box>
          <Typography gutterBottom variant="h6" component="div"
            style={{
              padding: '0px 16px 16px',
              margin: "0",
            }}
          >
            <span>150.00</span> <span>$</span>
          </Typography>        
        </Link>
      </CardActionArea>
    </Card>
  );
}