import WSPGallery from '../conponents/WSPGallery.js'
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../image/capslock.fill.svg";
// import '../App.css';
import clone from '../json/clone.json'
import products from '../json/products.json'
import Img1 from '../exploreImage/e01.png'
import Img2 from '../exploreImage/e02.png'
import Img3 from '../exploreImage/e03.png'
import Img4 from '../exploreImage/e04.png'
import Img5 from '../exploreImage/e05.png'
import Img6 from '../exploreImage/e06.png'
import Img7 from '../exploreImage/e07.png'
import Img8 from '../exploreImage/e08.png'
import Img9 from '../exploreImage/e09.png'
import Img10 from '../exploreImage/e10.png'
import Img11 from '../exploreImage/e11.png'
import Img12 from '../exploreImage/e12.png'
import Img13 from '../exploreImage/e13.png'
import Img14 from '../exploreImage/e14.png'
import Img15 from '../exploreImage/e15.png'
import Img16 from '../exploreImage/e16.png'
import Img17 from '../exploreImage/e17.png'
import Img18 from '../exploreImage/e18.png'
import Img19 from '../exploreImage/e19.png'
import Img20 from '../exploreImage/e20.png'
import Img21 from '../exploreImage/e21.png'

function Gallery() {


    const galleryImages = [
        {
            img: Img1
        },
        {
            img: Img2
        },
        {
            img: Img3
        },
        {
            img: Img4
        },
        {
            img: Img5
        },
        {
            img: Img6
        },
        {
            img: Img7
        },
        {
            img: Img8
        },
        {
            img: Img9
        },
        {
            img: Img10
        },
        {
            img: Img11
        },
        {
            img: Img12
        },
        {
            img: Img13
        },
        {
            img: Img14
        },
        {
            img: Img15
        },
        {
            img: Img16
        },
        {
            img: Img17
        },
        {
            img: Img18
        },
        {
            img: Img19
        },
        {
            img: Img20
        },
        {
            img: Img21
        },
    ]

    return (
        <div className="Gallery">
            <ScrollToTop smooth component={<MySVG />} />
            <h1>Explore</h1>


            <WSPGallery
                galleryImages={galleryImages}
            />

        </div>
    );






}

export default Gallery;
