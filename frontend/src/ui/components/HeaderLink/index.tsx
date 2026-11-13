import style from './style.module.css'


type Props = {
    /**
     * сслык адля перехода 
     */
    href: string;
    /**
     * наполенение 
     */
    text: string

}


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