import React from "react"
import Carousel from 'react-material-ui-carousel'


var images = [
    {
        url : "https://rukminim1.flixcart.com/fk-p-flap/2000/140/image/5cee5d597b55471a.jpg?q=50"
    },
    {
        url : "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d3a42152e8c1f5e5.jpeg?q=50"
    },
    {
        url : "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/7b06cf56f376257c.jpg?q=50"
    }
]


const Home = () => {
    
    return(
        <>
            <Carousel
            sx={{
                mt : 11 , 
                
            }}
            interval={5000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover
            swipe
            navButtonsAlwaysVisible
            
            >

                {images.map((image , index) => (
                    <img key={index} style={{display : "block" , margin : " 0 auto" , width : "90vw" , height : "50%"}}  src= {image.url} alt="pic" />
                ))}

            </Carousel>

        </>
    )
}

export default Home