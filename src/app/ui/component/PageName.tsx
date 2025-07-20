import React from "react";
interface PageName {
  pageName: string;
  bgColor: string;
}
const PageName = ({ pageName, bgColor }: PageName) => {
  return (
    <div
      className={`${bgColor} w-full py-2 px-2 font-semibold text-primary text-1xl`}
    >
      <p>{pageName}</p>
    </div>
  );
};

export default PageName;
