import './App.css'
import Button from "./components/Button/Button.jsx";
import Image1 from './assets/bag_1.png'
import Image2 from './assets/bag_2.png'
import Image3 from './assets/bag_3.png'
import Image4 from './assets/bag_4.png'
import Product from "./components/Products/Products.jsx";
import Tiles from "./components/Tiles/Tiles.jsx";
import PictureBrand from './assets/brand.png';


function App() {
    function atClick(event) {
        console.log(event.target.innerText);
    }

    return (

        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection" onClick={atClick}/>
                <Button text="shop all bags" onClick={atClick}/>
                <Button text="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product
                    leftCornerItem="Best seller"
                    image={Image1}
                    nameBag="handy"
                    priceBag={400}
                />
                <Product
                    leftCornerItem="Best seller"
                    image={Image2}
                    nameBag="stylish"
                    priceBag={250}
                />
                <Product
                    leftCornerItem="New Collection"
                    image={Image3}
                    nameBag="simple"
                    priceBag={300}
                />
                <Product
                    leftCornerItem="Best seller"
                    image={Image4}
                    nameBag="trendy"
                    priceBag={150}
                />
            </main>
            <footer>
                <Tiles
                picture={PictureBrand}
                title="The Brand"
                text="Lorem ipsum etc"/>
                <Tiles/>
                <Tiles/>
                <Tiles/>
            </footer>
        </>
    )
}

export default App
