import { useState } from "react";

const Formulario = () => {
    const [todo, setTodo] = useState({
        todoName: "",
        todoDescripcion:"",
        todoEstado: "pendiente",
        todoCheck: false,
    })

    const [error,setError] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();

      // usamos Destructuring para validar los datos que se envian.
      // !todoDescripcion.trim() para que no envie datos vacios
      const {todoDescripcion, todoName } = todo
      if( !todoDescripcion.trim() || !todoName.trim()){
        setError(true)
        return
      }

      
      setError(false)
      console.log(todo)
    }

    const handleChange = e => {
        // console.log(e.target.value)
        // console.log(e.target.name)

        const { name, value, checked, type } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const PintarError = () => (
      <div className="alert alert-danger">Campos Obligatorios</div>
    )

  return (
    <>    
    <h2>Formulario Controlado</h2>
      {
        error ? <PintarError/> : null 
      }

      <form onSubmit={handleSubmit}>
        <input 
          name="todoName"
          type="text" 
          placeholder="Ingrese Todo"
          className="form-control mb-2"
          // onChange funcion para recibir el evento
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea 
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripción del todo"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select 
          name="todoEstado"
          className="form-control mb-2" 
          onChange={handleChange}
          value={todo.todoDescripcion}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
        </select>


        <div className="form-check">
            <input 
            id="flexCheckDefault" 
            className="form-check-input" 
            type="checkbox" 
            name="todoCheck"
            //solo para este caso el value se transforma a checked
            checked={todo.todoCheck}
            onChange={handleChange}
            />

            <label className="form-check-label" htmlFor="flexCheckDefault">
                Dar prioridad
            </label>
        </div>

        <button type="submit" className="btn btn-primary">Agregar</button>

      </form>
    </>
  )
}

export default Formulario