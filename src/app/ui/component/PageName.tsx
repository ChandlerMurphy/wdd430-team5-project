import React from "react";
interface PageName {
  pageName: string;
  bgColor: string;
}
const PageName = ({ pageName, bgColor }: PageName) => {
  return (
    <div
      className={`${bgColor} text-2xl w-full font-semibold text-white px-2 py-5 text-1xl`}
    >
      <p>{pageName}</p>
    </div>
  );
};

export default PageName;
