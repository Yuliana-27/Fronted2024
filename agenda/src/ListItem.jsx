const ListItem=({name, correo, telefono, asunto, direccion, fecha, hora}) =>{
    return(
        <li>
          <li><b>Cita </b>
        <ul>
            <li><b>Nombre: </b>{name}</li>
            <li><b>Correo: </b> {correo}</li>
            <li><b>telefono: </b>{telefono}</li>
            <li><b>asunto: </b>{asunto}</li>
            <li><b>direccion: </b>{direccion}</li>
            <li><b>fecha: </b>{fecha}</li>
            <li><b>hora: </b>{hora}</li>
            
            <br />
        </ul>
        </li>
    
        </li>
    )
}

export default ListItem