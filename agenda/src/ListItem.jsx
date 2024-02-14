const ListItem=({name, correo, telefono, asunto, direccion, fecha, hora}) =>{
    return(
        <li>
        <a href={name}>
            {correo}
            {telefono}
            {asunto}
            {direccion}
            {fecha}
            {hora}</a>
        </li>
    )
}

export default ListItem