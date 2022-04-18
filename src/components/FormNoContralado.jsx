import { useRef } from "react";     // para la referencias("ref")

const FormNoContralado = () => {
  // referencia "ref" (hook) esto es para reemplanzar el getElementById
  // recibe el "null" por defecto, ademas se importa de react
  const formulario = useRef(null)

  //esto reemplaza el addEventListener con el evento "onSubmit"
  const handleSubmit = e => {
    //para evitar enviar los datos por url
    e.preventDefault();

    const datos = new FormData(formulario.current)
    // console.log(...datos.entries())
    
    //esto me devuelve en un objeto la "key:value" de los entries que son el "name" y el "defaultValue"
    const objetoDatos = Object.fromEntries([...datos.entries()])
    // console.log(objetoDatos)

    // usamos Destructuring para validar los datos que se envian.
    // !todoDescripcion.trim() para que no envie datos vacios
    const {todoDescripcion, todoName } = objetoDatos
    if( !todoDescripcion.trim()  || !todoName.trim()){
      console.log("nopooooooo está vacio")
      return
    }
    console.log("paso validaciones")
  }
  return (
    <>
      <h2>Formulario NO Controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea #01"
        />
        <textarea 
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripción del todo"
          defaultValue="Descripcion Tarea #01"
        />
        <select 
          className="form-control mb-2" 
          name="todoEstado"
          defaultValue="Pendiente"
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
        </select>
        <button type="submit" className="btn btn-primary">Agregar</button>

      </form>
    </>    
  )
}

export default FormNoContralado;