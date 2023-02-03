import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoTareas from "./components/ListadoTareas"

function App() {

   const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) ?? [])
   const[editar, setEditar] = useState({})

   useEffect(() => {
      localStorage.setItem('tareas', JSON.stringify(tareas))
   }, [tareas])

   const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter( tarea => tarea.id !== id)
      setTareas(tareasActualizadas)
   }

   

  return (
  
   <div className="container mx-auto mt-20">
      <Header/>

   <div className=" mt-12 md:flex">
      <Formulario
      tareas= {tareas}
      setTareas= {setTareas}
      editar= {editar}
      setEditar = {setEditar}
      />
     
      <ListadoTareas
       tareas = {tareas}
       setEditar= {setEditar}
       eliminarTarea= {eliminarTarea}
      />
   </div>

   </div>

  )
}

export default App
