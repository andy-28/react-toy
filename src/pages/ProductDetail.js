import React from 'react';
// import './App.css';
import DetailsThumb from '../conponents/DetailsThumb';
import "../app.css";
import FormInput from '../conponents/FormInput.js'
import toy from '../json/toy.json'
import clone from '../json/clone.json'
import Img1 from '../image/01.png'
import Img2 from '../image/02.png'
import Img3 from '../image/03.png'
import Img4 from '../image/04.png'
import b01 from '../image/b01.png'
import b02 from '../image/b02.png'
import b03 from '../image/b03.png'
import b04 from '../image/b04.png'

class ProductDetail extends React.Component {


    state = {

        products: [

            {
                "id": "1",
                "title": "Farmer Bob 垂耳兔",

                "src": [
                    b01,
                    b02,
                    b03,
                    b04
                ],
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 25000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },

        ],



        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount() {
        const { index } = this.state;
        this.myRef.current.children[index].className = "active";
    }


    render() {
        const { products, index } = this.state;

        return (
            <div className="app">
                {
                    products.map(item => (
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt="" />

                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <h2 className='price'>${item.price}</h2>
                                </div>
                                <a href='https://www.pinterest.com/' className='url'>https:shopee.tw</a>

                                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                                <button className="cart">Add to cart</button>

                            </div>
                        </div>
                    ))
                }

            </div>
        );
    };
}

export default ProductDetail;
