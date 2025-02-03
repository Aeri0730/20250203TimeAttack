import React from "react";

const Table = ({ list, setList }) => {
  const deleteFunc = (name) => {
    const newList = list.filter((coun) => coun.name !== name);

    setList([...newList]);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>총갯수</th>
          </tr>
        </thead>
        <tbody>
          {list
            .sort((a, b) => b.gold - a.gold)
            .map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.gold}</td>
                  <td>{item.silver}</td>
                  <td>{item.bronze}</td>
                  <td>{item.bronze}</td>
                  <button onClick={() => deleteFunc(item.name)}>삭제</button>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
