import axios from "axios";
import { useEffect, useState } from "react";
import EmailItem from "./Email-item";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://flipkart-email-mock.now.sh/");
      console.log(response);
      setEmails(response.data.list);
    }

    getData();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {emails.length === 0 ? (
        <h2>Emails loading</h2>
      ) : (
        emails.map((email) => <EmailItem content={email} />)
      )}
    </div>
  );
}

export default EmailList;
