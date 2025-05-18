import foto from './assets/IMG_6064.JPG'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={foto} alt="Yo" />
            <h2 className="card-title">Tusa</h2>
            <p className="card-text">Ing. Informático</p>
        </div>
    );
}

export default Card