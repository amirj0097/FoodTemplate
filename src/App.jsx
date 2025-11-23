import Main from "./Components/Main";
import Header from "./Headers/Header";

function App() {

  return (

    <div className="w-full  items-start  font-shabnam text-right min-h-[1280vh]">


      <Header />


      <Main />

      <div className="flex flex-row-reverse absolute bg-white shadow-2xl shadow-gray-400 items-center justify-center gap-19 py-8 -mt-12.5 ml-50  w-[70%]  px-8">
        <a href=""><img src="src/img/Sweets.svg" alt="Sweets" /></a>
        <a href=""><img src="src/img/Pasta.svg" alt="Pasta" /></a>
        <a href=""><img src="src/img/Meat.svg" alt="Meat" /></a>
        <a href=""><img src="src/img/Bakery.svg" alt="Bakery" /></a>
        <a href=""><img src="src/img/Semi-finished.svg" alt="Semi-finished" /></a>
        <a href=""><img src="src/img/Vegetables.svg" alt="Vegetables" /></a>
        <a href=""><img src="src/img/Fruits.svg" alt="Fruits" /></a>

      </div>

      <div className="bg-[#F7F7F7] w-full h-900">
        pijpo
      </div>

    </div>

  )
}

export default App
