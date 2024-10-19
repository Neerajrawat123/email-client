import { useContext } from "react";
import { EmailContext } from "../context/emailProvider";

function EmailContent({ onMark }) {
  const { email } = useContext(EmailContext);
  console.log(email);

  const firstLetter = email?.from.name[0].toUpperCase();

  function handleClick() {
    onMark(email?.id);
  }

  return (
    <div className="border w-[200%] border-brdr rounded-lg bg-white h-34 flex py-10 text-txt ">
      <div className="h-full px-7 flex">
        <div className="w-14 h-14 rounded-full bg-acnt flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">
            {firstLetter}
          </span>
        </div>
      </div>
      <div className="w-full pr-16">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">{email?.subject}</h2>
            <h4>26/2/2022 10:30am</h4>
          </div>
          <button
            onClick={handleClick}
            className="text-white bg-acnt px-3 py-1 h-8 text-sm rounded-3xl"
          >
            Mark as favourite
          </button>
        </div>

        <div className="py-8">{email?.content} </div>
      </div>
    </div>
  );
}

export default EmailContent;
