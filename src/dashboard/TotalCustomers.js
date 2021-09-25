import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import { green } from '@material-ui/core/colors';
  import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
  import PeopleIcon from '@material-ui/icons/PeopleOutlined';
  import './style1.css'
  
  const TotalCustomers = (props) => (
    <Card className= "Card"{...props}>
      <CardContent>
        <Grid className ="Grid1"
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
              text-aligne ="center"
            >
              CLIENTS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
              text-aligne ="center"
            >
              1,600
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className="green"
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          <ArrowUpwardIcon sx={{ color: green[900] }} />
          <Typography
            variant="body2"
            sx={{
              color: green[900],
              mr: 1
            }}
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box> */}
      </CardContent>
    </Card>
  );
  
  export default TotalCustomers;
  