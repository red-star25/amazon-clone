import React from 'react'
import "./HomePage.css"
import Product from "./Product"

function HomePage() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
            <Product
                id="12345"
                title = "The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION) Hardcover – 1 December 2019"
                price={22}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
            />
            <Product
                id="12345"
                title = "Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminium Case with Black Sport Band"
                price={300}
                rating={5}
                image="https://m.media-amazon.com/images/I/71wu+HMAKBL._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product
                id="12345"
                title = "Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (White)"
                price={22}
                rating={4}
                image="https://m.media-amazon.com/images/I/61fAoBkYQ1L._AC_UY327_FMwebp_QL65_.jpg"
            />
            </div>

            <div className="home__row">
            <Product
                id="12345"
                title = "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)"
                price={22}
                rating={4}
                image="https://m.media-amazon.com/images/I/81WF9kxcNrL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
                id="12345"
                title = "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
                price={22}
                rating={4}
                image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="12345"
                title = "LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69"
                price={22}
                rating={4}
                image="https://m.media-amazon.com/images/I/81t1tAzEgGL._AC_UY327_FMwebp_QL65_.jpg"
            />
            </div>
        </div>
    )
}

export default HomePage
