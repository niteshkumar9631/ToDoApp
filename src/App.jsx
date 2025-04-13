import React, { useState } from "react";
import { Delete } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleOnclick = (e) => {
    e.preventDefault();
    const upperInput = input.toUpperCase().trim();
    setTodos([...todos, upperInput]);
    setInput("");
  };

  const deleteTodo = (i) => {
    const newTodos = todos.filter((_, index) => index !== i);
    setTodos(newTodos);
  };

  const handleDeleteAll = () => {
    if (todos.length === 0) {
      alert("There is no todo to delete");
      return;
    }
    setTodos([]);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-zinc-900">
      <div className="mt-8 md:w-2/5 w-[90%] shadow-2xl bg-zinc-800 px-8 py-8 rounded-2xl overflow-hidden min-h-[600px] flex flex-col justify-between">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TO-DO APP
        </motion.h1>

        <form onSubmit={handleOnclick}>
          <motion.div
            className="mb-4 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <input
              className="border border-gray-600 bg-zinc-700 text-white p-2 rounded-2xl w-full text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={input}
              placeholder="Enter your todo here"
              onChange={handleInput}
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <input
              type="submit"
              className="cursor-pointer w-full bg-blue-600 py-2 rounded-2xl text-white text-xl transition-all hover:bg-blue-700"
              value="Add Todo"
            />
          </motion.div>
        </form>

        <div className="mt-8 overflow-y-auto max-h-60 pr-2">
          <AnimatePresence>
            {todos.length > 0 ? (
              todos.map((todo, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-center font-medium text-lg bg-zinc-700 my-3 text-white p-2 rounded-md"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{todo}</p>
                  <Delete
                    className="cursor-pointer hover:text-red-400"
                    onClick={() => deleteTodo(i)}
                  />
                </motion.div>
              ))
            ) : (
              <motion.p
                className="text-lg font-semibold text-center mt-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                There is no todo...
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.div className="mt-8" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
          <button
            className="p-2 w-full bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
