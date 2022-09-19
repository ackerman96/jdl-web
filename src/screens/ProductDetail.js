
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class ProductDetail extends Component {
  render() {
    return (
      <>Eiusmod consequat qui labore do pariatur laboris voluptate qui fugiat excepteur in aliquip ipsum. Aliquip ea minim aute quis aliquip do proident deserunt deserunt culpa. Nostrud ipsum cupidatat esse fugiat officia dolore duis nulla. Eu dolor nisi amet voluptate excepteur nulla consequat. Voluptate ea officia nulla cillum labore fugiat nulla.</>
    )
  }
}


export default ProductDetail;

/*
 <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            asdfsd
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
*/