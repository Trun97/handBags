import './Tiles.css';

function Tiles ({picture, title, text})  {
    if (!picture) {
        return (
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
            </section>
        );
    }
}

// meerdere p als optie, met.map en een array in app.jsx of mapje constants denk ik, maar krijg de titel en text
// niet eens aan de praat

export default Tiles;