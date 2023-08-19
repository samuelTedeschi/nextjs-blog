import Redes from "./redes";
import utilStyles from '../styles/utils.module.css';

export default function Conectar(){
    return(
        <div className={utilStyles.conectar}>
            <div>
                <p className={utilStyles.conectarP}>Siga-me:</p>
            </div>
            <Redes/>
        </div>
    )
}