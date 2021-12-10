import React, { useState } from "react";
import data from "./Menu";
const Card = () => {
  const [state, setState] = useState(data);


  const FilterItem = (categoryItem) => {
    const updateItem = data.filter((item) => {
      return (
        item.category === categoryItem
      )
    })
    setState(updateItem)
  }



  return (
    <>
      <div className="btnList">
        <ul>
          <li>
            <a className="active" href="#" onClick={() => { FilterItem("juice") }}>Fruits</a>
          </li>
          <li>
            <a href="#" onClick={() => { FilterItem("fruits") }} >Juice</a>
          </li>
          <li>
            <a href="#" onClick={() => { FilterItem("Vegetables") }} >Vegetables</a>
          </li>
          <li>
            <a href="#" onClick={() => { setState(data) }}>All</a>
          </li>
        </ul>
      </div>

      {state.map((item) => {
        console.log(item);

        return (
          <div className="container" key={item.id}>
            <div className="wrapper">
              <div className="img">
                <img src={item.img} alt={"food"} />
              </div>

              <div className="description">
                <p>{item.description}</p>

                <div className="anchor">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
