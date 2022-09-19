import styles from "../styles/Registration.module.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState, useContext } from "react"
import 'react-phone-number-input/style.css'
import Image from "next/image"
import PropTypes from 'prop-types'
import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import { myContext } from "../pages/_app"

function Registration() {

  const context = useContext(myContext)
  console.log(context.signUpClicked);
    const [value, setValue] = useState()
    const [country, setCountry] = useState("SA")
    console.log(country);
    return (
      <div className={styles.registrationContainer}>
        <div className={styles.registrationContntContainer}>
            <div className={styles.crossContainer}>
              <div className={styles.crossImageContainer} onClick={() => context.setSignUpCompShowed(false)}>
                <Image src="/cross.png" width={30} height={30} />
              </div>
              <h3>
                Login or Sign up
              </h3>
            </div>
            
              <div className={styles.scrollableContent}>
            <h2>
                Welcome to Enjoy
            </h2>
            <div className={styles.phoneNumber}>

              <div className={styles.phoneNumberInputsContainer}>
                <div>
                  <CountrySelect
                  labels={en}
                  value={country}
                  onChange={setCountry}/>
                </div>

                <div>
                  <Input
                    international
                    country={country}
                    value={value}
                    withCountryCallingCode
                    onChange={setValue}/>
                </div>
      
              </div>
              <small className={styles.privacyText}>
                  We'll call or text you to confirm your number. standard message and data rates apply, <span>
                    Privacy Policy.
                  </span>
                </small>
                <button className={styles.numberContinueButton} onClick={() => {
                  context.setSignUpCompShowed(false)
                  context.setSignedUp(true)
                  }}>
                  Continue
                </button>

            <div className={styles.orContainer}>
              <div className={styles.orLine}></div>
              <div>or</div>
              <div className={styles.orLine}></div>
            </div>

            <div className={styles.loginButtonsContainer}>
              <div className={styles.loginButtonContainer}>
                <div className={styles.loginButtonImg}>
                  <Image src="/facebook.png" width={20} height={20} />
                </div>
                <button className={styles.loginButton}>
                  Continue with Facebook
                </button>
              </div>
              <div className={styles.loginButtonContainer}>
                <div className={styles.loginButtonImg}>
                  <Image src="/google.png" width={20} height={20} />
                </div>
                <button className={styles.loginButton}>
                  Continue with Google
                </button>
              </div>
              <div className={styles.loginButtonContainer}>
                <div className={styles.loginButtonImg}>
                  <Image src="/apple-logo.png" width={20} height={20} />
                </div>
                <button className={styles.loginButton}>
                  Continue with Apple
                </button>
              </div>
              <div className={styles.loginButtonContainer}>
                <div className={styles.loginButtonImg}>
                  <Image src="/mail.png" width={20} height={20} />
                </div>
                <button className={styles.loginButton}>
                  Continue with Email
                </button>
              </div>
            </div>
          </div>

</div>

        </div>
      </div>

    )
}

const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
      {...rest}
      value={value}
      onChange={event => onChange(event.target.value || undefined)}>
      <option value="">
        {labels['ZZ']}
      </option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {labels[country]} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  )

  CountrySelect.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    labels: PropTypes.objectOf(PropTypes.string).isRequired
  }


export default Registration;