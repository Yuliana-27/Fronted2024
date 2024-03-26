import { useForm } from "./Hoks/useForm"

function App() {
  const [inputsForm, handleInputChange, formReset]= useForm({
    username: "",
    password: "",
    button: "",
    checkbox: "",
    color: "",
    date: "",
    datetime_local: "",
    email: "",
    file: "",
    image: "",
    month: "",
    number: "",
    radio: "",
    range: "",
    reset: "",
    search: "",
    tel: "",
    text: "",
    time: "",
    url: "",
    week: "",
    })
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Nombre de usuario:", inputsForm.username)
    console.log("Contraseña:", inputsForm.password)
    console.log("botón:", inputsForm.button)
    console.log("caja:", inputsForm.checkbox)
    console.log("color:", inputsForm.color)
    console.log("día:", inputsForm.date)
    console.log("fechahora-local:", inputsForm.datetime_local)
    console.log("correo:", inputsForm.email)
    console.log("archivo:", inputsForm.file)
    console.log("imagen:", inputsForm.image)
    console.log("mes:", inputsForm.month)
    console.log("numero:", inputsForm.number)
    console.log("radio:", inputsForm.radio)
    console.log("rango:", inputsForm.range)
    console.log("reset:", inputsForm.reset)
    console.log("buscar:", inputsForm.search)
    console.log("tel:", inputsForm.tel)
    console.log("texto:", inputsForm.text)
    console.log("tiempo:", inputsForm.time)
    console.log("url:", inputsForm.url)
    console.log("semana:", inputsForm.week)
    formReset()
    
  }

return(
  <div>
    <h1>Inputs</h1>
    <hr />
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="username">Username</label>
        <input  
        id="username" 
        type="text" 
        name="username"
        value={inputsForm.username}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
        id="password" 
        type="password" 
        name="password"
        value={inputsForm.password}
        onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="button">Button</label>
        <input  
        id="button" 
        type="button" 
        name="button"
        value={inputsForm.button}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="checkbox">Checkbox</label>
        <input  
        id="checkbox" 
        type="checkbox" 
        name="checkbox"
        value={inputsForm.checkbox}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input  
        id="color" 
        type="color" 
        name="color"
        value={inputsForm.color}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input  
        id="date" 
        type="date" 
        name="date"
        value={inputsForm.date}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="datetime-local">DateTime-Local</label>
        <input  
        id="datetime-local" 
        type="datetime-local" 
        name="datetime-local"
        value={inputsForm.datetime_local}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input  
        id="email" 
        type="email" 
        name="email"
        value={inputsForm.email}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="file">File</label>
        <input  
        id="file" 
        type="file" 
        name="file"
        value={inputsForm.file}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input  
        id="image" 
        type="image" 
        name="image"
        value={inputsForm.image}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <input  
        id="month" 
        type="month" 
        name="month"
        value={inputsForm.month}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input  
        id="number" 
        type="number" 
        name="number"
        value={inputsForm.number}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="radio">Radio</label>
        <input  
        id="radio" 
        type="radio" 
        name="radio"
        value={inputsForm.radio}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="range">Range</label>
        <input  
        id="range" 
        type="range" 
        name="range"
        value={inputsForm.range}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="reset">Reset</label>
        <input  
        id="reset" 
        type="reset" 
        name="reset"
        value={inputsForm.reset}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="search">Search</label>
        <input  
        id="search" 
        type="search" 
        name="search"
        value={inputsForm.search}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="tel">Tel</label>
        <input  
        id="tel" 
        type="tel" 
        name="tel"
        value={inputsForm.tel}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input  
        id="text" 
        type="text" 
        name="text"
        value={inputsForm.text}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input  
        id="time" 
        type="time" 
        name="time"
        value={inputsForm.time}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="url">Url</label>
        <input  
        id="url" 
        type="url" 
        name="url"
        value={inputsForm.url}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <div>
        <label htmlFor="week">Week</label>
        <input  
        id="week" 
        type="week" 
        name="week"
        value={inputsForm.week}
        onChange={(event)=> handleInputChange(event)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
)
}

export default App