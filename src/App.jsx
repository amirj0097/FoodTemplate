import Categories from "./Components/Categories";
import Main from "./Components/Main1/Main";
import Header from "./Headers/Header";

function App() {

  return (

    <div className="w-full  items-start  font-shabnam text-right min-h-[1280vh]">


      <Header />


      <Main />

      <Categories />

      <div className="bg-[#F7F7F7] w-full h-900">
        pijpo
      </div>

    </div>

  )
}

export default App
