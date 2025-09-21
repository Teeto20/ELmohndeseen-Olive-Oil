import { useState } from "react";
import Header from "./components/header";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header lang={lang} setLang={setLang} />
    </div>
  );
}

export default App;
