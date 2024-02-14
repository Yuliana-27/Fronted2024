
const persona = {
  nombre : 'Yuliana del Carmen Altamirano Montes',
  edad : 21,
  profesión: 'Estudiante',
  pasatiempos: [
    'Jugar voleibol',
    'leer',
    'ver pelicula',
    'jugar videojuegos',
    'escuchar musica',
    'cantar',
  ],
  fechadenacimiento: '15/07/2002',
  lugardenacimiento: 'Cosamaloapan, Veracruz',
  signo: 'Cáncer'
}

function App() {    

  return (
    <div>
      <h1>Información Personal</h1> 
      <hr />
      <ul>
      <li>Nombre: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Profesión: {persona.profesión}</li>
      <li>Fecha de nacimiento: {persona.fechadenacimiento}</li>
      <li>Lugar de nacimiento: {persona.lugardenacimiento}</li>
      <li>signo: {persona.signo}</li>
      <li>Pasatiempos:
        <ul>
          {
            persona.pasatiempos.map((pasatiempo) =>{
              return <li key={pasatiempo}>
                {pasatiempo}
              </li>
            } )
          }
        </ul>
      </li>
      </ul>
    </div>
  )
   
}

export default App
