import React, { useState } from 'react'

interface Todo{
    todoName       ?:string,
    todoDescription?:string,
    todoEstado     ?:string,
    todoCheck      ?:boolean
}

const Formulario = () => {
 
    const[todo,setTodo] = useState <Todo>({
    todoName        :'',
    todoDescription :'',
    todoEstado      :'pendiente',
    todoCheck       :false
    });
    

    const[error,setError] = useState(false);


    const handleSubmit= (e: any) =>{
        e.preventDefault();
        
        const {todoName,todoDescription}=todo;

        if(!todoDescription!.trim() || !todoName!.trim()){
            setError(true);        
            return
         } 

         setError(false)
        
    }

    const handleChange = (e:any) =>{
    
        const{name,value,checked,type} = e.target;

        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value 
        })
    }

    const PintarError= ()=>(
        <div className="alert alert-danger">
            Campos obligatorios
        </div>
    )
    
    return (
  
  <>
       <h1>Formulario Controlado</h1> 
       {
        error? <PintarError /> : null
       }

       <form
         
         onSubmit={handleSubmit}
         >
          
          <input 
          type       ="text" 
          placeholder="Ingrese TODO"
          name       ="todoName"
          className  ="form-control mb-2"
    
          onChange={handleChange}
          value={todo.todoName}
          />

          <textarea 
           name       ="todoDescription"
           className  ="form-control mb-2"
           placeholder="Ingrese descripcion del TODO"
           
           onChange={handleChange}
           value={todo.todoDescription}
          />
          
          <select 
          name="todoEstado" 
          className="form-control mb-2"
          
          onChange={handleChange}
          value={todo.todoDescription}
          >
          
          <option 
          value="pendiente"
          >
          Pendiente
          </option>
          
          <option 
          value="completada"
          >
          Completada
          </option>

          </select>

          <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name='todoCheck'
            onChange={handleChange}
            checked={todo.todoCheck}
            id="flexCheckDefault"
            />
          <label
            className="form-check-label"
            htmlFor  ="flexCheckDefault"
          >
          Checkbox
          </label>
          </div>
          
          <button
          type="submit"
          className="btn btn-outline-warning"
          >
          Dar Prioridad
          </button>

        </form>
  </>
  )

}

export default Formulario