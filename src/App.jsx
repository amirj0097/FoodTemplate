import Categories from "./Components/Categories";
import Main from "./Components/Main1/Main";
import Main2 from "./Components/Main2/Main";
import Header from "./Headers/Header";

function App() {

  return (

    <div className="w-full  items-start  font-shabnam text-right min-h-[1280vh]">


      <Header />


      <Main />

      <Categories />

      <Main2 />

    </div>

  )
}

export default App
