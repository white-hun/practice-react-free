import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만나는 React.js" numOfPage={200} />
      <Book name="처음 만나는 Node.js" numOfPage={100} />
      <Book name="처음 만나는 JS" numOfPage={120} />
    </div>
  );
}

export default Library;
