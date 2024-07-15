import { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  function handleWord(el) {
    setWord(el.target.value.toUpperCase());
  }

  function handleResult(el) {
    setResult(el.target.value.toUpperCase());
  }

  return (
    <div className="font-body pt-6">
      <div className="container">
        <h1 className="font-heading mb-4 text-center text-4xl font-bold">
          Cryptarithm Solver
        </h1>
        <p className="mb-8 text-center text-base font-medium">
          Cryptarithm Solver is a website designed to help you solve your
          cryptarithm puzzles.
        </p>
        <div className="rounded bg-gray-200 p-4">
          <form action="">
            <div className="mb-2">
              <input
                type="text"
                name="word[]"
                placeholder="WORD 1"
                value={word}
                onChange={(el) => handleWord(el)}
                autoFocus
                aria-label="Word 1"
                className="w-full rounded border border-gray-500 px-4 py-2 text-center text-lg font-medium outline-none focus:ring focus:ring-gray-600"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="word[]"
                placeholder="WORD 2"
                value={word}
                onChange={(el) => handleWord(el)}
                aria-label="Word 2"
                className="w-full rounded border border-gray-500 px-4 py-2 text-center text-lg font-medium outline-none focus:ring focus:ring-gray-600"
              />
            </div>
            <div className="mb-2 flex items-center gap-1 before:h-[2px] before:w-full before:bg-black before:content-[''] after:w-[5px] after:text-2xl after:font-medium after:content-['+']"></div>
            <div className="mb-2">
              <input
                type="text"
                name="word[]"
                placeholder="RESULT"
                value={result}
                onChange={(el) => handleResult(el)}
                aria-label="Result"
                className="w-full rounded border border-gray-500 px-4 py-2 text-center text-lg font-medium outline-none focus:ring focus:ring-gray-600"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
