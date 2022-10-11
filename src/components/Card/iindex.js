import "./style.css";

function Card({ plano }) {
    return (
        <div className="container-card">
         
                <span>Planos de internet</span>
                <span>{plano}</span>
            

        </div>
    )
}

export default Card