import React, { Component } from 'react'
import { map, forEach } from 'lodash';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { height } from '@mui/system';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Product extends Component {
  render() {
    const { product, detailItem } = this.props;
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {map(product, (item, index) => {
              return (
                <Grid style={styles.boxItem} key={index} item xs={3}>
                  <Item style={styles.imageCarousel}>
                    <div>
                      <Carousel showThumbs={false} axis='horizontal' >
                        {item.images === '' ?
                          null
                          :
                          map(item.images, (image) => {
                            return (
                              <img style={styles.imageContent} src={image} />
                            )
                          })
                        }
                      </Carousel>
                    </div>
                    <div style={styles.detailBox}>
                        <b>{item.title}</b>
                        <br/>
                        {item.description}
                        <br/>
                        <StarIcon/>{item.rating} | ${item.price}
                        <br/>
                      </div>
                      <div>
                        <Button variant="outlined" onClick={() => detailItem(item)}>Details</Button>
                      </div>
                  </Item>
                </Grid>
              )
            })}
        
        
      </Grid>
    </Box>
      </>
    )
  }
}

export default Product

const styles = {
  boxItem: {
    // display: 'flex',
    // width: 400,
    // height: 400,
    // justifyContent: 'space-between'
  },
  imageCarousel: {

  },
  imageContent: {
    width: 200,
    height: 200,
    resizeMode: 'contain',


  },
  detailBox:{
    justifyContent: 'space-evenly',
    flexDirection: 'row',

  }
}

{/* <div>
          {
            map(product, item => {
              return (
                <span style={styles.boxItem}>
                  <div style={styles.imageCarousel}>
                    <Carousel axis='horizontal' >

                      {item.images === '' ?
                        null
                        :
                        map(item.images, (image) => {
                          return (
                            <img style={styles.imageContent} src={image} />
                          )
                        })
                      }
                    </Carousel>
                  </div>
                  <div>
                    {item.price}
                  </div>

                  {/* Culpa incididunt sit veniam minim pariatur sit. Anim elit sint ad occaecat ea enim incididunt. Lorem quis enim do ex tempor in elit Lorem do exercitation sit excepteur id tempor. Sit ea proident non velit dolore ullamco est pariatur. */}
            //       </span>)
            //     })
    
            //   }
            // </div> */}
 