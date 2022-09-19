import styles from "../styles/Details.module.css"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Image from "next/image"

function DetailsImagesContainer(props) {
    
    const secondaryImages = props.images.filter((img, index) => index > 0)


    return (
        <>
        <div className={styles.imagesContainer}>
            <div className={styles.mainImgContainer}>
                <img src={`/${props.images[0]}`} width="100%" height="400px"/>
            </div>
            <div className={styles.secImgContainer}>
                {secondaryImages.map((img,index) =><img src={`/${img}`} height="195px" key={index} /> )}
            </div>
            </div>




            <div  className={styles.carousel}>
            <Carousel
              autoPlay={false}
                                  navButtonsProps={{
                                      style: {
                                          backgroundColor: '#458DB7',
                                          padding: "3px"
                                        }
                                  }} 
                                  indicatorIconButtonProps={{
                                      style: {
                                          color: '#999',
                                          zIndex: 10,
                                          marginBottom: "10px"
                                      }
                                    }}
                                  activeIndicatorIconButtonProps={{
                                      style: {
                                          color: '#458DB7',
                                          zIndex: 10
                                        }
                                    }}
                                  indicatorContainerProps={{
                                      style: {
                                          zIndex: 10,
                                          marginTop: "-20px",
                                      }
                                  }}
          >
            {props.images.map((img,index) => <Item src={`/${img}`} key={index}/>)}
          </Carousel>
        </div>
        </>
    );
}

function Item(props)
{
    
    
    return (
          <Paper className={styles.innerCarousel} style={{background: `url(${props.src}) center no-repeat`
                ,backgroundSize: "cover" ,height: "300px"}}>
                  
          </Paper>
    )
}

export default DetailsImagesContainer;