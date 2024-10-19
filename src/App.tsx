import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Filters from "./components/Filters";
import EmailList from "./components/Email-list";
import EmailContent from "./components/Email-content";

import axios from "axios";
import { EmailProvider } from "./context/emailProvider.tsx";

function App() {
  const filters = ["read", "unread", "favourite"];
  const [isOpen, setIsOpen] = useState(false);
  const [currFilter, setCurrFilter] = useState(filters[1]);

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://flipkart-email-mock.now.sh/");
      const emailWithTags = response.data.list.map((email) => ({
        ...email,
        read: false,
        favourite: false,
      }));
      setEmails(emailWithTags);
    }

    getData();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currFilter]);

  function handleMarkRead(emailId) {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === emailId ? { ...email, read: true } : email,
      ),
    );
    filteredEmails = emails;
  }

  function handleMarkFavourite(emailId) {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === emailId ? { ...email, favourite: true } : email,
      ),
    );

    filteredEmails = emails;
  }

  function filterEmail() {
    return emails.filter((email) => {
      if (currFilter === "read") return email.read;
      if (currFilter === "unread") return !email.read;
      if (currFilter === "favourite") return email.favourite;
    });
  }
  let filteredEmails = filterEmail();

  return (
    <EmailProvider>
      <div className="py-8 bg-bg px-12">
        <Filters currFilter={currFilter} changeFilter={setCurrFilter} />
        <div className="flex gap-8  pt-9">
          <EmailList
            onSelect={handleMarkRead}
            filteredEmails={filteredEmails}
            openEmail={setIsOpen}
            currFilter={currFilter}
          />
          {isOpen && <EmailContent onMark={handleMarkFavourite} />}
        </div>
      </div>
    </EmailProvider>
  );
}

export default App;
