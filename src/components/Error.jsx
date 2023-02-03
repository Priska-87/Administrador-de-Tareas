

const Error = ({mensaje}) => {
  return (
    <div className=" bg-red-800 font-bold text-white text-center p-3 mb-5 
    uppercase rounded-md">
    <p>{mensaje}</p>
    </div>
  )
}

export default Error
