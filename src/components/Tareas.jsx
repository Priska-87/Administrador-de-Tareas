
const Tareas = ({tareas, setEditar, eliminarTarea}) => {
const {nombre, fecha, time, tarea, id} = tareas
 

const handleEliminar = () => {
  const respuesta = confirm('¿Deseas eliminar la tarea seleccionada?')

  if (respuesta) {
    eliminarTarea(id)
  }
}
   
  return (
        
    <div className=" bg-white drop-shadow-xl px-10 py-10 m-5 rounded-lg mx-10">

            <p className="block text-gray-700 uppercase font-bold">Tarea: {""}
                <span className=" font-normal normal-case ml-1">{nombre}</span>
            </p>

            <p className="block text-gray-700 uppercase font-bold -3/5
                mt-3 ">Fecha: {""}
                <span className=" font-normal normal-case ml-1">{fecha}</span>
            </p>

            <p className="block text-gray-700 uppercase font-bold -3/5
                mt-3 ">Hora: {""}
                <span className=" font-normal normal-case ml-1">{time}</span>
            </p>

            <p className="block text-gray-700 uppercase font-bold -3/5
                mt-3">Descripción de la tarea: {""}
                <span className=" font-normal normal-case ml-1">{tarea}</span>
            </p>

            <div className=" flex justify-around lg:justify-between">
                <button 
                type="button" className=" bg-green-700 text-sm py-1 px-5 mt-4 ml-3 text-white bold uppercase
                hover:bg-green-900 cursor-pointer transition-colors rounded-md 
                sm:py-2 sm:px-8 sm:text-sm  md:px-8 mr-3 lg:px-10 lg:text-base "
                onClick={() => setEditar(tareas)}

                >
                  Editar
                </button>

                <button 
                type="button" className=" bg-orange-600 text-sm py-2 px-5 mt-4 text-white bold uppercase
                hover:bg-orange-700 cursor-pointer transition-colors rounded-md 
                sm:py-2 sm:px-8 sm:text-sm  md:px-6 mr-3  lg:px-10 lg:text-base "
                onClick={handleEliminar}
                >
                  Eliminar
                </button>
            </div>
            
    </div> 
  )
}

export default Tareas