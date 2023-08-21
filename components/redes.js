import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'

import utilStyles from '../styles/utils.module.css';

export default function Redes() {
    return (
        <div className={utilStyles.icons}>
            <div className={utilStyles.itemsIcons}>
                <Link href="https://github.com/samuelTedeschi" >
                    <AiFillGithub />
                </Link>
            </div>
            <div className={utilStyles.itemsIcons}>
                <Link href="https://www.linkedin.com/in/samuel-tedeschi/">
                    <AiFillLinkedin />
                </Link>
            </div>
            <div className={utilStyles.itemsIcons}>
                <Link href="">
                    <BsDiscord />
                </Link>
            </div>
        </div>
    )
}