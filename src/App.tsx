import "./App.css";
import { useState } from "react";
import Filters from "./components/Filters";
import EmailList from "./components/Email-list";
import EmailContent from "./components/Email-content";

function App() {
  const filters = ["read", "unread", "favourite"];
  const [isOpen, setIsOpen] = useState(true);
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className="py-8 bg-bg px-12">
      <Filters filter={filter} changeFilter={setFilter} />
      <div className="flex gap-8  pt-9">
        <EmailList />
        {isOpen && <EmailContent />}
      </div>
    </div>
  );
}

export default App;
