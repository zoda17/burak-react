import React from "react";
import PopularDishes from "./PopulatDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Statistics from "./Statistics";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
    return <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
  }