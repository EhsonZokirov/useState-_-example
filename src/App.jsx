import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container m-auto w-[80%] ">
      <div className="text-center ">
        <h1 className="font-bold text-[20px] md:text-[50px]">
          Знакомство с хуками
        </h1>
        <p className=" md:text-[30px] text-[10px] text-slate-500">
          Хуки — это новое дополнение в React 16.8. Они позволяют вам
          использовать состояние и другие функции React без написания класса.
        </p>
        <p className="font-bold">
          Хук <span className="text-blue-500">useState()</span> отвечает за работу с состоянием внутри компонента. В
          отличие от классовых компонентов, хук занимается сразу всем:
          инициализацией, обновлением и предоставляет доступ к состоянию. Пример
          вызова:
        </p>
      </div>
      {/* COMPONENTs */}
      <Counter />
    </div>
  );
}

export default App;
