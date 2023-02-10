import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getContact } from "../data/listContact";

export default function Index() {
  const dataConcat = useLoaderData();
  // const [stateBtn, setStateBtn] = useState(false);
  // const handelDelete = (id) => {
  //   const data = [...dataConcat];
  //   const newData = data.filter((x) => x.id !== id);
  //   return newData;
  // };
  return (
    <div className="divConList">
      {dataConcat.map((item, index) => {
        return (
          <div to={`/${item.id}`} key={item.id} className="divCan">
            <div className="divBtn">
              <Link to={`/${item.id}`} className="Link">
                <span className="spanIndex">index {index + 1}</span>
              </Link>
              {/* <button
                className="btnDelete"
                onClick={() => {
                  setStateBtn(index);
                }}
              >
                Delete
              </button>
              {index === stateBtn && (
                <form className="divDelete" method="post" action="/delete">
                  Are You sure for DeleteItem?
                  <input type="text" name="id" hidden value={item.id} />
                  <button type="submit" className="deleteBtn">
                    Deleted
                  </button>
                  <button
                    type="rest"
                    className="cancelBtn"
                    onClick={() => {
                      setStateBtn(false);
                    }}
                  >
                    Cancel
                  </button>
                </form>
              )} */}
            </div>
            <h1 className="nameLastName">
              <span className="spanTitle">{"Name :  "}</span>
              {item.name}
              {item.lastName}
            </h1>
            <div className="dataUser">
              <span>
                {"email : "} {item.email}
              </span>
              <span>
                {"number phone :  "}
                {item.numberPhone}
              </span>
              <span>
                {"gender  : "}
                {item.gender}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function loader() {
  const data = await getContact();
  if (!data) {
    throw json(
      { message: "could not founded" },
      { status: 404, statusText: "Not Founded" },
    );
  }
  return data;
}
