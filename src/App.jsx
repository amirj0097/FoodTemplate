import Main from "./Components/Main";
import Header from "./Headers/Header";

function App() {

  return (

    <div className="w-full  items-start  font-shabnam text-right min-h-[1280vh]">


     <Header />


      <Main /> 
      <div className="bg-blue-700 flex absolute w-1/2 left-auto right-auto px-6">
      <a href=""><img src="src/img/Sweets.svg" alt="Sweets" /></a>
      <a href=""><img src="src/img/Pasta.svg" alt="Pasta" /></a>
      </div>

    </div>

  )
}

export default App
