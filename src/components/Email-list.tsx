import EmailItem from "./Email-item";

function EmailList({ onSelect, filteredEmails, openEmail, filterOption }) {
  console.log(filteredEmails);
  return (
    <div className="flex flex-col gap-6 w-full">
      {filteredEmails?.length === 0 ? (
        <h2>Emails loading</h2>
      ) : (
        filteredEmails?.map((email) => (
          <EmailItem
            content={email}
            openEmail={openEmail}
            onSelect={onSelect}
          />
        ))
      )}
    </div>
  );
}

export default EmailList;
