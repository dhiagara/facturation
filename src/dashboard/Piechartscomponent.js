// import { v4 as uuid } from "uuid";
// import moment from "moment";
// import {
//   Box,
//   Button,
//   Card,
//   CardHeader,
//   Divider,
//   IconButton,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
// } from "@material-ui/core";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";

// const products = [
//   {
//     id: uuid(),
//     name: "Dropbox",
//     imageUrl: "/static/images/products/product_1.png",
//     updatedAt: moment().subtract(2, "hours"),
//   },
//   {
//     id: uuid(),
//     name: "Medium Corporation",
//     imageUrl: "/static/images/products/product_2.png",
//     updatedAt: moment().subtract(2, "hours"),
//   },
//   {
//     id: uuid(),
//     name: "Slack",
//     imageUrl: "/static/images/products/product_3.png",
//     updatedAt: moment().subtract(3, "hours"),
//   },
//   {
//     id: uuid(),
//     name: "Lyft",
//     imageUrl: "/static/images/products/product_4.png",
//     updatedAt: moment().subtract(5, "hours"),
//   },
//   {
//     id: uuid(),
//     name: "GitHub",
//     imageUrl: "/static/images/products/product_5.png",
//     updatedAt: moment().subtract(9, "hours"),
//   },
// ];

// const LatestProducts = (props) => (
//   <Card {...props}>
//     <CardHeader
//       subtitle={`${products.length} in total`}
//       title="Latest Products"
//     />
//     <Divider />
//     <List>
//       {products.map((product, i) => (
//         <ListItem divider={i < products.length - 1} key={product.id}>
//           <ListItemAvatar>
//             <img
//               alt={product.name}
//               src={product.imageUrl}
//               style={{
//                 height:  56,
//                 width: 56,
//               }}
//             />
//           </ListItemAvatar>
//           <ListItemText
//             primary={product.name}
//             secondary={`Updated ${product.updatedAt.fromNow()}`}
//           />
//           <IconButton edge="end" size="small">
//             <MoreVertIcon />
//           </IconButton>
//         </ListItem>
//       ))}
//     </List>
//     <Divider />
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "flex-end",
//         p: 2,
//       }}
//     >
//       <Button
//         color="secondary"
//         endIcon={<ArrowRightIcon />}
//         size="small"
//         variant="text"
//       >
//         View all
//       </Button>
//     </Box>
//   </Card>
// );

// export default LatestProducts;
// import React from 'react';
// import { Card,CardContent,Typography,Grid} from '@material-ui/core';



// const Cards = () => {
//    return (
     
//       <div  className="Container">
//          <Grid>
            
//          </Grid>
         
//       </div>
//    )
// }
// export default Cards;
// import React from "react";

// import {
//   PieChart,
//   Pie,
//   Tooltip,
//   BarChart,
//   XAxis,
//   YAxis,
//   Legend,
//   CartesianGrid,
//   Bar,
// } from "recharts";

// const Cards = () => {
//   const data = [
//     { name: "Facebook", users: 2000000000 },
//     { name: "Instagram", users: 1500000000 },
//     { name: "Twiter", users: 1000000000 },
//     { name: "Telegram", users: 500000000 },
//   ];

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Socail Media Users</h1>
//       <div className="App">
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="users"
//             isAnimationActive={false}
//             data={data}
//             cx={200}
//             cy={200}
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Tooltip />
//         </PieChart>
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 80,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis
//             dataKey="name"
//             scale="point"
//             padding={{ left: 10, right: 10 }}
//           />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
//         </BarChart>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import {Pie} from 'react-chartjs-2';
import React from 'react';
import { Component } from 'react';
import {useTheme} from  '@material-ui/core';


class Piechartscomponent  extends Component {
   
 constructor(props) {
   super(props)
   
   
      
      this.state = {
         labels: [ 'categorie1','categorie2', 'categorie3', 'categorie4'],
         datasets : [{
            data: [2000,4000,2850,1200],
            backgroundColor: [
               'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                 'rgb(255, 205, 86)',
                 'rgb(12, 199, 129)'
            ]
            // ['red', 'blue', 'green']
            
         }]
      }
   }
   
   
   render() {
      return(
         <div>
            <h1> Categories factures </h1>
            <Pie
            data ={{
               labels: this.state.labels,
               datasets:this.state.datasets
            }}
            height='50%'
           
               
             
           
            />
               
           <br />
               
            
         </div>
      )
         }
   
}
export default  Piechartscomponent;