import './Products.css';


function Product ({leftCornerItem, image, nameBag, priceBag })  {
    return (
        <article>
            <span>{leftCornerItem}</span>
            <img src={image} alt="bag"/>
            <p>The {nameBag} bag</p>
            <h4>€{priceBag}</h4>
        </article>
    );
}

export default Product;