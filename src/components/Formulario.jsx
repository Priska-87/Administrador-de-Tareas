import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({tareas, setTareas, editar, setEditar}) => {

 const [nombre, setNombre] = useState('');
 const [fecha, setFecha] = useState('');
 const [time, setTime] = useState('');
 const [tarea, setTarea] = useState('');
 const [error, setError] = useState(false)

 useEffect( () => {
    if(Object.keys(editar).length > 0) {
        setNombre(editar.nombre)
        setFecha(editar.fecha)
        setTime(editar.time)
        setTarea(editar.tarea)
    }
 }, [editar])

 
 
const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

const handleSubmit = (e) => {
    e.preventDefault()

    if([nombre, fecha, time, tarea].includes('')) {
        setError(true)
        return;
        
    } 
    
    setError(false)

    // Objetos de tareas

    const objetosTareas = {
        nombre,
        fecha,
        time,
        tarea,
    }

    if(editar.id){
        // Editando registro
        objetosTareas.id = editar.id
        const tareasActualizadas = tareas.map( tareaState => tareaState.id === editar.id ? 
        objetosTareas : tareaState)

        setTareas(tareasActualizadas)
        setEditar({})

        
    } else {
        // Nuevo registro
        objetosTareas.id = generarId()
        setTareas([...tareas, objetosTareas])
        
    }

    

    // Reiniciar Formulario

    setNombre('')
    setFecha('')
    setTime('')
    setTarea('')

 }

    return(
        <div className=" md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Ingresa tus Tareas a realizar
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Tareas y {""}
                <span className=" text-amber-600 font-bold">Adminístralas</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white drop-shadow-xl rounded-lg py-10 px-10 mb-10 mx-10">
                
                { error && <Error mensaje= 'Todos los campos son obligatorios'/> }

                <div className=" mb-5">
                    <label htmlFor="tarea" className="block text-gray-700 uppercase font-bold">
                        Nombre de la Tarea 
                    </label>

                    <input type="text"
                    id="tarea"
                    placeholder="Ingrese el nombre de la tarea"
                    className=" w-full border-2 mt-2 p-2 placeholder-orange-600 rounded-md"
                    value={nombre}
                    onChange = {(e) => setNombre(e.target.value)}
                    />
                </div>
            

                <div className=" mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
                        Fecha de la tarea
                    </label>

                    <input type="date"
                    id="fecha"
                    className=" w-full border-2 mt-2 p-2 placeholder-orange-600 rounded-md"
                    value={fecha}
                    onChange = { (e) => setFecha(e.target.value)}
                    />
                </div>

                
                <div className=" mb-5">
                    <label htmlFor="time" className="block text-gray-700 uppercase font-bold">
                        Hora de la tarea
                    </label>

                    <input type="time"
                    id="time"
                    className=" w-full border-2 mt-2 p-2 placeholder-orange-600 rounded-md"
                    value={time}
                    onChange = { (e) => setTime(e.target.value)}
                    />
                </div>

                
                <div className=" mb-5">
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold">
                        Descripción de la tarea
                    </label>
              
                    <textarea 
                    className=" w-full block mt-2 p-2 border-2 rounded-md placeholder-orange-600"
                    id="descripcion"
                    placeholder="Escriba aquí la tarea a realizar"
                    value={tarea}
                    onChange = { (e) => setTarea(e.target.value)}
                    />
                </div>

                <input type="submit"
                className=" bg-orange-600 w-full p-2 text-white bold uppercase
                 hover:bg-orange-700 cursor-pointer transition-colors rounded-md" 
                 value= {editar.id ? "Editar tarea" : "Agregar tarea"}
                />
            </form>
        </div>
    )
}

export default Formulario