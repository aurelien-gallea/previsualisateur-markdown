// librairies
import React, { useState, useEffect } from "react";
import "./App.css";
import { marked } from "marked";
function App() {
  // useState
  const [area, setArea] = useState(
    "# `Prévisualisateur - Markdown`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Believemy](https://believemy.com)"
  );
  // etats
  useEffect(() => {
    console.log("update");
  });
  // methode
  const changeTextHandler = (event) => {
    
    setArea(event.target.value);
  };

  function createMarkup() {
    return {
      __html: marked.parse(
        area.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
      ),
    };
  }
  function MyMarkdown() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
  
  // JSX
  return (
    <div className="App">
      <textarea onChange={(e) => changeTextHandler(e)} value={area}></textarea>
      <div>
        <MyMarkdown />
      </div>
    </div>
  );
}
export default App;
