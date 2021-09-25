import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";

const FacturesValides = (props) => (
  <Card  className="Card" sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid  className="Grid1" container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
           FACTURES VALIDÉS
          </Typography>
          <Typography color="textPrimary" variant="h3">
            75.5%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar className="orange"
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56,
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress value={75.5} variant="determinate" />
      </Box>
    </CardContent>
  </Card>
);

export default FacturesValides;
