import Image from "next/image"
import navBarStyles from "../styles/NavBar.module.css"
import { myContext } from "../pages/_app"
import { useContext } from "react"
import Profile from "./Profile"

export default function NavBar() {
    const context = useContext(myContext)
    return (
        <nav>
            <div className={navBarStyles.navContainer}>
                <div className={navBarStyles.logoContainer}>
                    <Image src="/enjoy.png" width={110} height={45} />
                </div>
                <div className={navBarStyles.searchContainer}>
                    <div className={navBarStyles.searchIcon}>
                    <Image src="/search.png" width={18} height={18}/>
                    </div>
                    <input placeholder="Search" className={navBarStyles.searchInput}/>
                </div>
                
                <div className={navBarStyles.rightFilterIconContainer} onClick={() => {
                    console.log(context.filterClicked);
                    context.setFilterClicked(true) }}>
                    <Image src="/edit.png" height={25} width={25} /> 
                    <strong>
                        Filter
                    </strong>
                </div>

                {context.signedUp?
                <div className={navBarStyles.accountContainer}>
                    <Profile />
                    <Image src="/user.png" width={32} height={32} className={navBarStyles.user}/>
                </div>
                :
                <div className={navBarStyles.accountContainer} onClick={() => context.setSignUpCompShowed(true)}>
                <span>Sign up</span>    
                <Image src="/user.png" width={32} height={32} className={navBarStyles.user}/>
                </div> 
                }
            </div>
        </nav>
    )
}