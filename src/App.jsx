import { useState } from "react"
import { requestToGroqAi } from "./utils/groq";
import { Light as SyntaxHighlight } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism"
import './App.css';


function App() {

  const [data, setData] = useState("")
  
  const handleSubmit = async() => {
    const ai = await requestToGroqAi(content.value);
    setData(ai);
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-[80vh] max-w-xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-indigo-500 text-center mt-4">
          ZIPPY AI
        </h1>
        <p className="font-bold text-indigo-500 text-center">Create using ReactJS + Groq</p>
        <form action="" className="mt-5 w-full flex-col gap-4 mx-auto">
          <input type="text" placeholder='ketik permintaan disini...' className="border me-2 px-4 py-2 text-md rounded-md" id='content' />
          <button type='button' onClick={handleSubmit} className="bg-indigo-500 py-2 px-4 rounded-md">Kirim</button>
        </form>
        <div className="max-w-xl max-h-screen">
          {data ? (
            <SyntaxHighlight language="swift" style={darcula} wrapLongLines={true}>{data.toString()}</SyntaxHighlight>
          ) : null }
        </div>
      </main>
    </>
  );
}

export default App;
