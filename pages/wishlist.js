import wishListstyles from "../styles/wishlist.module.css"
import { myContext } from "./_app";
import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Link from "next/link";
import houseCarouslstyles from '../styles/HouseCarousel.module.css'

function WishList() {

    const context = React.useContext(myContext)

    return ( 
        <div className={wishListstyles.wishListContainer}>
            <h2>
                Your WishList:
            </h2>
            <div>
        {context?.favouriteHouses?.map((item, index) => (
        <div className={houseCarouslstyles.outerCarouselContainer} key={index}>
            <div className={houseCarouslstyles.carouselContainer}>

              <span className={houseCarouslstyles.carouselContainerLoveIcon}
                    style={{opacity: item.favourite? 1 : .5}}
                    >
              </span>
          <Carousel key={item.id}
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
            {item.images.map(img => <Item src={`/${img}`} id={item.id} key={item.id}/>)}
          </Carousel>
        </div>
        <div className={houseCarouslstyles.favCarouselDetails}>

            <h3>
                {item.name}
            </h3>
            <p>
                {item.location}
                <br/>
                Price : {item.price}$
                <br/>
                Bedrooms: {item.bedRooms}
                <br/>
                Beds: {item.beds}
            </p>
          </div>
</div>
))}
            </div>
        </div>
     );
}

function Item(props)
{

    return (
        <Link href={`/houses/${props.id}`}>
          <Paper className={houseCarouslstyles.innerCarousel} style={{background: `url(${props.src}) center no-repeat`
                ,backgroundSize: "cover" ,height: "190px", borderRadius: "15px",}}>
          </Paper>
        </Link>
    )
}

export default WishList;

