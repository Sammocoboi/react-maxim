import style from './style.module.css'
import type { Props } from './types'




export const HeaderLink:React.FC<Props> = ({
    href,
    text,
}) =>{
    return(
        <a 
        className={style.component}
        href={href}>
            {text}   
        </a>
    )
}