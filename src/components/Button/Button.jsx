import './Button.css';

// functie-declraratie (met hoofdletter)
// funtie moet html teruggeven
// de functie moet geexportyeerd worden

function Button ({ text, onClick, disabled })  {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;