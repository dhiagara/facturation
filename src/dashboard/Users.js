import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
  import MoneyIcon from '@material-ui/icons/Money';
  import { red } from '@material-ui/core/colors';
  import './style1.css'
  import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
  
  const Users = (props) => (
   
    <Card className="Card"
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid className="Grid1"
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
               UTILISATEURS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              500
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className="pink"
              // sx={{
              //   backgroundColor: red[600],
              //   height: 56,
              //   width: 56
              // }}
              >
            
              <SupervisorAccountIcon />
            </Avatar>
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ArrowDownwardIcon sx={{ color: red[900] }} />
          <Typography
            sx={{
              color: red[900],
              mr: 1
            }}
            variant="body2"
          >
            12%
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
  
  export default Users;
  