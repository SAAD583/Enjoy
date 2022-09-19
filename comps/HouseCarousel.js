// // import Carousel from 'react-material-ui-carousel'
// // import { Paper } from '@mui/material'
// // import {carouselOne} from "./ImagesData"
// // import styles from "../styles/HouseCarousel.module.css"

// // export default function Example(props)
// // {

// //     return (
// //         <div className={styles.carouselsContainer}>
// //             <div className={styles.carouselContainer}>
// //                 <Carousel
                 
// //                 autoPlay={false}
// //                 navButtonsProps={{
// //                     style: {
// //                         backgroundColor: '#458DB7',
// //                         padding: "3px"
// //                     }
// //                 }} 
// //                 indicatorIconButtonProps={{
// //                     style: {
// //                         color: '#999',
// //                         zIndex: 10,
// //                         marginBottom: "10px"
// //                     }
// //                 }}
// //                 activeIndicatorIconButtonProps={{
// //                     style: {
// //                         color: '#458DB7',
// //                         zIndex: 10 
// //                     }
// //                 }}
// //                 indicatorContainerProps={{
// //                     style: {
// //                         zIndex: 10,
// //                         marginTop: "-60px",
// //                     }
// //                 }}
// //                 >
// //                     {carouselOne.map( (item, i) => <Item item={item} key={i} />)}
// //                 </Carousel>
// //             </div>


// //             <div className={styles.carouselContainer}>
// //                 <Carousel 
                    
// //                     autoPlay={false}
// //                     navButtonsProps={{
// //                         style: {
// //                             backgroundColor: '#458DB7',
// //                             padding: "3px"
// //                         }
// //                     }} 
// //                     indicatorIconButtonProps={{
// //                         style: {
// //                             color: '#999',
// //                             zIndex: 10,
// //                             marginBottom: "10px"
// //                         }
// //                     }}
// //                     activeIndicatorIconButtonProps={{
// //                         style: {
// //                             color: '#458DB7',
// //                             zIndex: 10 // 2
// //                         }
// //                     }}
// //                     indicatorContainerProps={{
// //                         style: {
// //                             zIndex: 10,
// //                             marginTop: "-60px",
// //                         }
// //                     }}
// //                     >
// //                     {carouselOne.map( (item, i) => <Item item={item} key={i} />)}
// //                 </Carousel>
// //             </div>


// //             <div className={styles.carouselContainer}>
// //                 <Carousel
                    
// //                     autoPlay={false}
// //                     navButtonsProps={{
// //                         style: {
// //                             backgroundColor: '#458DB7',
// //                             padding: "3px"
// //                         }
// //                     }} 
// //                     indicatorIconButtonProps={{
// //                         style: {
// //                             color: '#999',
// //                             zIndex: 10,
// //                             marginBottom: "10px"
// //                         }
// //                     }}
// //                     activeIndicatorIconButtonProps={{
// //                         style: {
// //                             color: '#458DB7',
// //                             zIndex: 10 // 2
// //                         }
// //                     }}
// //                     indicatorContainerProps={{
// //                         style: {
// //                             zIndex: 10,
// //                             marginTop: "-60px",
// //                         }
// //                     }}
// //                     >
// //                     {carouselOne.map( (item, i) => <Item item={item} key={i} />)}
// //                 </Carousel>
// //             </div>

// //             <div className={styles.carouselContainer}>
// //                 <Carousel
                    
// //                     autoPlay={false}
// //                     navButtonsProps={{
// //                         style: {
// //                             backgroundColor: '#458DB7',
// //                             padding: "3px"
// //                         }
// //                     }} 
// //                     indicatorIconButtonProps={{
// //                         style: {
// //                             color: '#999',
// //                             zIndex: 10,
// //                             marginBottom: "10px"
// //                         }
// //                     }}
// //                     activeIndicatorIconButtonProps={{
// //                         style: {
// //                             color: '#458DB7',
// //                             zIndex: 10 // 2
// //                         }
// //                     }}
// //                     indicatorContainerProps={{
// //                         style: {
// //                             zIndex: 10,
// //                             marginTop: "-60px",
// //                         }
// //                     }}
// //                     >
// //                     {carouselOne.map( (item, i) => <Item item={item} key={i} />)}
// //                 </Carousel>
// //             </div>

// //         </div>
// //     )
// // }

// // function Item(props)
// // {


// //     return (
// //         <Paper className={styles.innerCarousel} style={{background: `url(${props.item}) center no-repeat`
// //                 ,backgroundSize: "cover" ,height: "225px", borderRadius: "15px"}}>

// //         </Paper>
// //     )
// // }







// function HouseCarousel() {
//     return (
//         <div>

//         </div>
//     );
// }

// import fsPromises from "fs/promises"
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData
//   }
// }

// export default HouseCarousel;