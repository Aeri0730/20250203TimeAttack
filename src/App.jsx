import React from "react";
import { useState } from "react";
import Input from "./components/Input";
import Table from "./components/Table";

const App = () => {
  const localData = JSON.parse(localStorage.getItem("나라"));
  const [country, setCountry] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
    total: 0,
  });

  const [list, setList] = useState([...localData]);

  const addFunc = () => {
    //이미 등록된 국가 안됨
    const haveCountry = list.some((coun) => coun.name === country.name);
    const medalTotal = country.gold + country.silver + country.bronze; //메달 총 갯수 구현 미완성성
    if (haveCountry) {
      alert("이미 등록된 국가입니다.");
      resetCoun();
      return;
    }
    setCountry({ ...country, total: medalTotal });
    setList([...list, country]);
    localStorage.setItem("나라", JSON.stringify([...list, country]));
    resetCoun();
  };

  const updateFunc = () => {
    // 등록된 국가여야함
    const haveCountry = list.some((coun) => coun.name === country.name);
    if (!haveCountry) {
      alert("등록되지 않은 국가입니다.");
      resetCoun();
      return;
    }

    const newList = list.map((coun) => {
      if (coun.name === country.name) {
        return country;
      } else {
        return coun;
      }
    });

    resetCoun();
    setList([...newList]);
  };

  const resetCoun = () => {
    setCountry({
      name: "",
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
    });
  };
  return (
    <>
      <div>
        {" "}
        <Input
          value={country.name}
          text="국가명"
          type="text"
          onChangeFunc={(e) => {
            setCountry({ ...country, name: e.target.value });
          }}
        />
        <Input
          value={country.gold}
          text="금메달"
          type="number"
          onChangeFunc={(e) => {
            setCountry({ ...country, gold: +e.target.value });
          }}
        />
        <Input
          value={country.silver}
          text="은메달"
          type="number"
          onChangeFunc={(e) => {
            setCountry({ ...country, silver: +e.target.value });
          }}
        />
        <Input
          value={country.bronze}
          text="동메달"
          type="number"
          onChangeFunc={(e) => {
            setCountry({ ...country, bronze: +e.target.value });
          }}
        />
        <button onClick={addFunc}>국가추가</button>
        <button onClick={updateFunc}>업데이트</button>
      </div>
      <Table list={list} setList={setList} />
    </>
  );
};

export default App;
