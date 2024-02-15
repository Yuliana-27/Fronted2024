import Listitem from "./ListItem.jsx"

const agenda = [ 
  {

    name: 'Yuliana del Carmen Altamirano Montes',  
    correo: 'montesyuliana713@gmail.com',
    telefono:'2871655409',
    asunto:'junta de trabajo',
    direccion:'Instituto Tecnologico',
    fecha:'03/03/2024',
    hora:'12:00 pm'
  },
  {
    name: 'jenifer vendel javier',
    correo: 'jitkrbirkg@gmail.com',
    telefono:'2871679870',
    asunto:'junta de trabajo',
    direccion:'Instituto tecnologico',
    fecha:'03/03/2024',
    hora:'12:00 pm'
  },
  {
    name: 'maria de los angeles',
    correo: 'ovnjonvonv@gmail.com',
    telefono: '2871456790',
    asunto:'junta de trabajo',
    direccion:'Instituto tecnologico',
    fecha:'03/03/2024',
    hora:'12:00 pm'
  }
]

function App() {
  return(
    <div>
    <h1>
    Agenda
    </h1>
    <hr/>
    <ul>
      {
      agenda.map((agenda)=>(
        <Listitem
        
        key={agenda.name}
        name={agenda.name}
        correo={agenda.correo}
        telefono={agenda.telefono}
        asunto={agenda.asunto}
        direccion={agenda.direccion}
        fecha={agenda.fecha}
        hora={agenda.hora}/>
      ))
      //link.map((link)=>(
        //<li key={link.name}
        //<a href={link.url}>{link.name}</a>
        //</li>
      //))
      }
    </ul>
    </div>
  )
}

export default App
