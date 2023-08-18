import {FcUpLeft} from 'react-icons/fc'
import styles from './layout.module.css'
import Link from 'next/link'

export default function Voltar(){
    return(
    <div className={styles.blackToHome}>
        <FcUpLeft/>
        <Link href='/'>Voltar</Link>
      </div>
    )
}