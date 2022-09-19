import Image from "next/image";
import styles from "../../styles/Details.module.css"
import DetailsImagesContainer from "../../comps/DetailsImagesContainer";
import StaticDateRangePickerExample from "../../comps/StaticDateRangePickerExample";
import data from "../../data.json"

import React from "react";
import { myContext } from "../_app";
import moment from "moment";

export const getStaticPaths = async () => {
    const paths = data.srcs.map(item => ({ 
        params: {id: item.id.toString()}
    }))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    return {
        props: {
            details: data.srcs[id-1]
        }
    }
}

function One(props) {
    const context = React.useContext(myContext)
    return (
        <>

        <div className={styles.header}>
            <h1>
            {props.details.name}
            </h1>
            <div className={styles.leftDetails}>
                <div>
                    <Image src="/star (1).png" width={16} height={16} />
                    {props.details.stars}
                </div>
                <div>
                    <Image src="/map.png" width={16} height={16} />
                    {props.details.location}
                </div>
            </div>
            <div className={styles.rightDetails}>
                <div>
                        <Image src="/share.png" width={16} height={16} />
                        <span style={{
                            marginLeft: "5px"
                        }} >
                            Share
                        </span>
                    </div>
                    <div>
                        <Image src="/heart (3).png" width={16} height={16} />
                        <span style={{
                            marginLeft: "3px",
                            alignSelf: "top"
                            }} >
                            Love
                        </span>
                    </div>
                </div>
        </div>



        <DetailsImagesContainer images={props.details.images}/>


    <main className={styles.offersAndRangePicker}>

        <div className={styles.offers}>
            <h2>
            What this place offers
            </h2>         
            <div>
                {props.details.features.map((feature,index) => (
                    <div className={styles.featureContainer} key={index}>
                        <Image src={`/${feature.icon}`} width={27} height={20}/>
                    <span>{feature.feature}</span>
                </div>
                ))}
            </div>

        <div className={styles.calendarContainer}>
            <h2>
               {context.daysNumber} Nights in {props.details.location}
            </h2>
            <StaticDateRangePickerExample/>
        </div>
            
        </div>




        <div className={styles.buyDetails}>
                <div className={styles.buyDetailsHeader}>
                    <div>{props.details.price}$ night</div>
                    <div> 
                        <Image src="/star (1).png" height={16} width={16}/>
                        <span style={{margin: 0, textDecoration: "underline"}}>
                            {props.details.stars}
                        </span>
                        </div>
                </div>
                <div className={styles.buyDetailsTime}>
                    <div>
                        Check In: 
                        <br/>
                        {moment(context.checkInDate).format('L') == "Invalid date" ? "" : moment(context.checkInDate).format('L')}
                        </div>
                    <div>
                        Check Out: 
                        <br/>
                        {moment(context.checkOutDate).format('L') == "Invalid date" ? "" : moment(context.checkOutDate).format('L')}
                    </div>
                </div>
                <div className={styles.buyDetailsPricingCal}>
                    <div>
                        <div>{props.details.price} * {context.daysNumber} nights</div>
                        <div> {props.details.price * context.daysNumber}$</div>
                    </div>
                    <div>
                        <div>service fee</div>
                        <div>30$</div>
                    </div>
                    <div>
                        <div>Total</div>
                        <div>{props.details.price * context.daysNumber + 30}$</div>
                    </div>
                </div>
                <div className={styles.bookNow}>
                    Book now
                </div>
            </div>

        
            </main>

    </>
            )}
export default One;