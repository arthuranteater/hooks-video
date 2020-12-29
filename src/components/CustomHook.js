import React, { useEffect, useState } from "react";

export function getJSON(api, value, upd) {
  const [data, setData] = useState();

  useEffect(() => {
    setData("loading...");
    fetch(api, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res[value]);
      });
  }, [api, value, upd]);
  return data;
}
