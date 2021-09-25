import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ReceiptIcon from '@material-ui/icons/Receipt';

const TotalProfit = (props) => (
  <Card className="Card" {...props}>
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
            TOTAL FACTURES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
           200
          </Typography>
        </Grid>
        <Grid item>
          <Avatar className="indigo"
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <ReceiptIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TotalProfit;
