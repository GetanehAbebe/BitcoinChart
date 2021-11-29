import React from "react";
function Tabs(props: any) {
  const { tabs, name, onChange } = props;
  return (
    <div>
      <div className="tabs">
        {tabs.map((item: any, i: number) => {
          return (
            <div className="tab" key={i}>
              <input
                type="radio"
                id={item.id}
                name={name}
                onClick={() =>
                  onChange(
                    item.id.split(" ").length > 1
                      ? [item.id.split(" ")[0], Number(item.id.split(" ")[1])]
                      : item.id
                  )
                }
              />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
