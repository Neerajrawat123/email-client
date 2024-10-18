import { dateFormatter } from "../utils/date";

function EmailItem({ content }) {
  console.log(content);
  const { from, id, short_description, subject, date } = content;

  const { dt, time } = dateFormatter(date);

  const firstWord = from.name[0].toUpperCase();
  return (
    <div
      key={id}
      className="border border-brdr rounded-lg bg-white h-34 flex w-full py-3 text-txt "
    >
      <div className="h-full px-6 flex">
        <div className="w-14 h-14 rounded-full bg-acnt flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">{firstWord}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[1.04rem] flex flex-col ">
          <p>
            From:
            <span className="font-semibold text-gray-600">
              {" "}
              {from.name} {"<"}
              {from.email}
              {">"}
            </span>
          </p>
          <p>
            Subject:{" "}
            <span className="font-semibold text-gray-600">{subject}</span>
          </p>
        </div>

        <div>
          <p>{short_description.slice(0, 45)}...</p>
        </div>

        <div>
          <p>
            {dt} {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailItem;
