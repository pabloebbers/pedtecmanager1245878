import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchOnBlur, setSearchOnBlur] = useState("");
  const [searchOnChange, setSearchOnChange] = useState("");

  return (
    <div className="p-6 max-w-xl mx-auto text-center space-y-8">
      <h1 className="text-2xl font-bold">Página Inicial</h1>

      {/* Campo com botão */}
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite algo aqui"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={() => alert(`Você digitou: ${inputValue}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Mostrar Texto
        </button>
      </div>

      {/* Campo com onBlur */}
      <div className="text-left space-y-2">
        <label className="block font-medium">Campo com <code>onBlur</code></label>
        <input
          type="text"
          placeholder="Digite e clique fora"
          onBlur={(e) => setSearchOnBlur(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <p className="text-gray-700">Valor (onBlur): <strong>{searchOnBlur}</strong></p>
      </div>

      {/* Campo com onChange */}
      <div className="text-left space-y-2">
        <label className="block font-medium">Campo com <code>onChange</code></label>
        <input
          type="text"
          placeholder="Digite e veja ao vivo"
          onChange={(e) => setSearchOnChange(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <p className="text-gray-700">Valor (onChange): <strong>{searchOnChange}</strong></p>
      </div>
    </div>
  );
};

export default Home;
