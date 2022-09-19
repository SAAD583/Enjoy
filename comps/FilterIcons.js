import Image from "next/image"
import styles from "../styles/Filter.module.css"
import FilterData from './FilterData'
import { myContext } from "../pages/_app";
import React from "react";

function FilterIcons() {
    const context = React.useContext(myContext)
    return (
        <div className={styles.upperFilterContainer}>
            
        <div className={styles.filterIconsContainer}>
            {FilterData.map(item => {
                    return (<div className={styles.filterIconsItem} key={item.id}>
                        <div className={styles.iconContainer}>
                            <Image src={item.src} width={20} height={20}/> 
                            
                        </div>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                    </div> ) 
            })}
        </div>
        <div className={styles.rightFilterIconContainer} onClick={() => context.setFilterClicked(true) }>
                <Image src="/edit.png" height={30} width={30} /> 
                <strong>
                    Filter
                </strong>
            </div>
        </div>
    )
}

export default FilterIcons;