import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import styles from "../styles/FilterPopUp.module.css"
import Image from 'next/image';
import { myContext } from '../pages/_app';
import jsonData from "../data.json"

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#458DB7',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

const roomsOptions = [
  {number: "any", selected: true},
  {number: 1, selected: false},
  {number: 2, selected: false},
  {number: 3, selected: false},
  {number: 4, selected: false},
  {number: 5, selected: false},
  {number: 6, selected: false},
  {number: 7, selected: false}
  ]

const bedsOptions = [
  {number: "any", selected: true},
  {number: 1, selected: false},
  {number: 2, selected: false},
  {number: 3, selected: false},
  {number: 4, selected: false},
  {number: 5, selected: false},
  {number: 6, selected: false},
  {number: 7, selected: false}
  ]

  const propertyTypes = [
    {
      src: "home.png",
      type: "Ancient House",
      clicked: false
    },
    {
      src: "field.png",
      type: "Modern House",
      clicked: false
    },
    {
      src: "hotel.png",
      type: "Hotels",
      clicked: false
    },
  ]
  
export default function FilterPopUp({mainData,setMainData}) {
  const context = React.useContext(myContext)
  const [min, setMin] = React.useState(0)
  const [max, setMax] = React.useState(1000)
  const [propertyTypeData, setPropertyTypeData] = React.useState(propertyTypes)

  const [bedRoomsOptionsData, setBedRoomsOptionsData] = React.useState(roomsOptions)
  const [bedsOptionsData, setBedsOptionsData] = React.useState(bedsOptions)

  const [clickedBedsNumber,setClickedBedsNumber] = React.useState("any")
  const [clickedBedRoomsNumber,setClickedBedRoomsNumber] = React.useState("any")
  const [propertyTypeDataClicked,setPropertyTypeDataClicked] = React.useState(propertyTypes)

  const selectBedroomsOption = (clickedNumber) => {
    bedRoomsOptionsData.map((i,ii) => {
      bedRoomsOptionsData[ii].selected = false
        if (i.number == clickedNumber) {
          let x = bedRoomsOptionsData.indexOf(i)
          bedRoomsOptionsData[x].selected = true
        }
//////////////////////////////////////////////////////////////////////
        let actionobj = bedRoomsOptionsData
        let arr = []
        arr.push(...actionobj)
        setBedRoomsOptionsData(arr) 
      })
      setClickedBedRoomsNumber(clickedNumber)
}

const selectBedsOption = (clickedNumber) => {
  bedsOptionsData.map((i,ii) => {
    bedsOptionsData[ii].selected = false
      if (i.number == clickedNumber) {
        let x = bedsOptionsData.indexOf(i)
        bedsOptionsData[x].selected = true
      }
//////////////////////////////////////////////////////////////////////
      let actionobj = bedsOptionsData
      let arr = []
      arr.push(...actionobj)
      setBedsOptionsData(arr) 
    })
    setClickedBedsNumber(clickedNumber)
}

const propertyClickFunc = (propertyType,clicked) => {
  let newData = propertyTypeData.map(property => {
    if (property.type == propertyType) {
      return {...property, clicked: !property.clicked}
    } else {
      return property
    }
  })

  setPropertyTypeData(newData)
  let clickedTypes = newData.filter(item => {
    if (item.clicked) return item.type
  })
  //////////
  setPropertyTypeDataClicked(clickedTypes.length == 0? propertyTypes : clickedTypes)
}

const filtermainData = () => {
  const filteredData = jsonData.srcs.filter(item => {    
    if (item.price <= max && item.price >= min && 
      (clickedBedsNumber != "any" ? item.beds == clickedBedsNumber : item.beds) && 
      (clickedBedRoomsNumber != "any" ? item.bedRooms == clickedBedRoomsNumber : item.bedRooms) && 
      (item.type == propertyTypeDataClicked[0]?.type || item.type == propertyTypeDataClicked[1]?.type ||
        item.type == propertyTypeDataClicked[2]?.type )
      ) 
        {
         return item
    }
  })

  setMainData(filteredData)
  context.setFilterClicked(false)
}

  return (
    <div className={styles.FilterPopUpContainer}>
    <div className={styles.FilterPopUpContentContainer}>
      <div className={styles.crossContainer}>
                <div className={styles.crossImageContainer} onClick={() => context.setFilterClicked(false)}>
                  <Image src="/cross.png" width={30} height={30} />
                </div>
                <h3>
                  Filters
                </h3>
      </div>

    

  <div className={styles.scrollableContent}>

    <h2>
            Price Range
    </h2>
    <div className={styles.moneyRangeContainer}>
                
        <Box sx={{ width: "100%" }}>
        <AirbnbSlider
            components={{ Thumb: AirbnbThumbComponent }}
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={[0, 1000]}
            onChange={e => {
                setMin(e.target.value[0])
                setMax(e.target.value[1])
            }}
            min={0}
            max={1000}
            />
        </Box>

        <div className={styles.minAndMaxPrice}>
            <div>
                <small>Min price:</small>
                <br/>
                <span>
                    $ {min}
                </span>
            </div>
            <div>
                <small>Max price:</small>
                <br/>
                <span>
                    $ {max}
                </span>
            </div>
        </div>
    </div>

    <div className={styles.roomsAndBeds}>
         <h3>
            Bedrooms:
         </h3>
         <div className={styles.optionsContainer}>

        {bedRoomsOptionsData.map((option,index) => ( 
            <button className={`${styles.roomsAndBedsOption} 
                                ${option.selected? styles.activeRoomsAndBedsOption : ""}`} 
                    onClick={ () => selectBedroomsOption(option.number)}
                    key={index}
                    >
                {option.number}
            </button>
        ))}
        </div>

        
        <h3>
            Beds:
         </h3>
        
         {bedsOptionsData.map((option,index) => ( 
            <button className={`${styles.roomsAndBedsOption} 
                                ${option.selected? styles.activeRoomsAndBedsOption : ""}`} 
                    onClick={ () => selectBedsOption(option.number)}
                    key={index}
                    >
                {option.number}
            </button>
        ))}

    </div>

    <div className={styles.propertyType}>
      <h3>
        Property type
      </h3>
        {propertyTypeData.map(property => (
          <div  key={property.src} className={property.clicked? styles.propertyTypeClicked : ""}
                onClick={() => propertyClickFunc(property.type,property.clicked) }>
            <Image src={`/${property.src}`} width={40} height={40}/>
            <p>
              {property.type}
            </p>
          </div>
        ))}
    </div>
    </div>

    <div className={styles.showStaysContainer}>
      <button onClick={() => filtermainData()}>
        Show Stays
      </button>
    </div>
  </div>

    </div>
  );
}