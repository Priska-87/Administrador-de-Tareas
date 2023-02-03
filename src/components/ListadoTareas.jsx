
import Tareas from "./Tareas";

const ListadoTareas = ({tareas, setEditar, eliminarTarea}) => {
    
    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {tareas && tareas.length ? (

            <>
                <h2 className=" font-black text-3xl text-center">Tareas añadidas</h2>
                <p className="text-lg mt-5 text-center mb-10"> Administra tus {""}
                    <span className=" text-amber-600 font-bold">
                       tareas
                    </span>
                </p>
            
                {tareas.map( tareas => (
                <Tareas
                key={tareas.id}
                tareas = {tareas}
                setEditar = {setEditar}
                eliminarTarea= {eliminarTarea}
                  />
               ))}
            </> 

            ) : ( 
                <>
                    <h2 className=" font-black text-3xl text-center">No hay tareas registradas</h2>
                    <p className="text-lg mt-5 text-center mb-10"> Cuando completes el formulario tus tareas {""}
                        <span className=" text-amber-600 font-bold">
                            apareceran aquí ↓
                        </span>
                    </p>    
                </>
            )}
        </div>
     );
}
 
export default ListadoTareas;