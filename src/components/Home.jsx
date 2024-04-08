
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import { Button, TableBody, TableCell, TableContainer, Table, TableHead, TableRow } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { Grid } from '@mui/material';


const Home = () => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Review:', { comment, rating });
    setComment('');
    setRating(0);
  };

  const cards = [
    {
      title: "pizza margherita",
      price: 167,
      description: "tomato sauce with fresh tomatoes mozzarella cheese and basil which represent the colours of the Italian flag red tomatoes,white mozzarella,and green basil.",
      image: "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=",
    },
    {
      title: "veg-friedrice",
      price: 160,
      description: "classic Veg Fried Rice recipe is made with a hearty mix of fresh vegetables, green onions, seasonings and spices for an incredibly flavorful fried rice dish.Stir-fried",
      image: "https://recipe52.com/wp-content/uploads/2020/09/Fried-Rice-11.jpg",
    },
    {
      title: "zinger burger",
      price: 210,
      description: "delicately seasoned and coated with our secret blend of herbs and spices. Crispy on the outside, yet irresistibly moist and flavorful on the inside, each bite is a burst of savory goodness..",
      image: "https://img.freepik.com/premium-photo/crispy-zinger-burger-with-side-chili-fries_807701-2160.jpg",
    },
    {
      title: "Lebanese shawarma",
      price: 159,
      description: "made of spit-roasted layers of lamb, beef, or other meat that are sliced and often wrapped in or served with pita,The flavour of this Chicken Shawarma is incredible!!",
      image: "https://cookingorgeous.com/wp-content/uploads/2024/01/easy-homemade-lebanese-chicken-shawarma-20.jpg",
    }
  ];

  const addItemToCart = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3001/cart/check/${item.title}`);
      if (res.data.exists) {
        await axios.put(`http://localhost:3001/cart/update`, {
          title: item.title,
          quantity: res.data.quantity + 1,
        });
        alert("Quantity updated successfully");
      } else {
        await axios.post('http://localhost:3001/cart', {
          title: item.title,
          price: item.price,
          quantity: 1,
        });
        alert("Successfully added to cart");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      alert("Failed to update the cart.");
    }
  };

//   const [FeedbackItems, setFeedbackItems] = useState([]);
//   const navigate = useNavigate();
  

//   useEffect(() => {
//     const fetchFeedbackItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/feedback');
//         console.log(response.data);
//         setFeedbackItems(response.data);
//       } catch (error) {
//         console.error('Failed to fetch feedback items', error);
//       }
//     };

//     fetchFeedbackItems();
//   }, []);

//   const handleBackClick = () => {
    
//   };

const FeedbackSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleFeedbackChange = (event) => {
      setFeedback(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post('http://localhost:3001/feedback', { name, email, feedback });
        alert('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setFeedback('');
      } catch (error) {
        console.error('Failed to submit feedback', error);
        alert('Failed to submit feedback');
      }
    };
}
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp3138487.jpg"
              alt="First slide"
              style={{ height: 700, marginRight: 100 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp3495563.jpg"
              alt="Second slide"
              style={{ height: 700, marginRight: 100 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp1828455.jpg"
              alt="Third slide"
              style={{ height: 700, marginRight: 100 }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br /><br /><br /><br />

      <Grid container spacing={2}>
        {cards.map((val, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345, minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <CardMedia
                  sx={{ height: 140 }}
                  component="image"
                  height="300"
                  alt={val.title}
                  image={val.image}
                  title={val.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'IND' }).format(val.price)}
                  </Typography>
                </CardContent>
              </div>
              <CardActions>
                <Button variant='contained' color="info" onClick={() => addItemToCart(val)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br /><br /><br />
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              KAPILAVASTU
            </Typography>
            <Typography variant="h5" component="div">
              About Us
            </Typography><br />
            <Typography variant='h5' component="div">
              Our Restaurant
              <Typography >Welcome to Kapilavastu, your go-to destination for delicious food and impeccable service. Located in the heart of Bangalore, we pride ourselves on offering a diverse menu filled with culinary delights to satisfy every palate.</Typography>
              <Typography>At Kapilavastu, we are committed to using only the freshest ingredients sourced from local suppliers whenever possible. Our talented chefs craft each dish with passion and creativity, ensuring a memorable dining experience for our guests.</Typography><br />
              <Typography variant='h5' component="div">Our Mission</Typography>
              <Typography>Our mission is simple: to exceed our guests' expectations with exceptional food, service, and ambiance. We strive to create a warm and inviting atmosphere where friends and family can gather to enjoy delicious meals and create lasting memories.</Typography><br />
              <Typography variant='h5' component="div">Our Team</Typography>
              <Typography>Behind every great restaurant is a dedicated team, and Kapilavastu is no exception. Our team members are passionate about hospitality and are committed to providing you with an unparalleled dining experience.</Typography>
              <Typography>From our skilled chefs who bring culinary masterpieces to life to our friendly servers who ensure your every need is met, each member of our team plays a vital role in creating the welcoming atmosphere that sets Kapilavastu apart.</Typography>
              <Typography variant='h5' component="div"></Typography>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <section className="feedback-section">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between" style={{ margin: '5px' }}>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Card>
                <Typography variant="h4" component="h2" gutterBottom style={{ textAlign: 'center' }}>
                  Leave  your feedback
                </Typography>
                <form noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={5}>
                      <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        variant="outlined"
                        onChange={handleCommentChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                       
                    
                      />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        required
                        id="feedback"
                        name="feedback"
                        label="Your Feedback"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        
                      
                
                      />
                    </Grid>
                    <Grid item xs={12} sm={10} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button type='submit' variant="contained" color="primary" >
                        Submit Feedback
                      </Button>
                    </Grid>
                  </Grid>
                </form>


                <br /><br />
                <Card>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary"><br />
                      Contact Us: kapilavastu@gmail.com
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
                      Corporate Office: kapilavastu Products Private Limited No.45-A, 2nd Phase, Peenya Industrial Area Bengaluru-560 058, Karnataka
                    </Typography>
                  </CardContent>
                </Card>
              </Card>
            </CardContent>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Home;
