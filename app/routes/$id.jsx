import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getContact } from "../data/listContact";

export default function Index() {
  const dataConcat = useLoaderData();
  console.log(dataConcat);
  return (
    <div className="divConList">
      <div key={dataConcat.id} className="divCan">
        <h1 className="nameLastName">
          <span className="spanTitle">{"Name :  "}</span>
          {dataConcat.name}
          {dataConcat.lastName}
        </h1>
        <div className="dataUser">
          <span>
            {"email : "} {dataConcat.email}
          </span>
          <span>
            {"number phone :  "}
            {dataConcat.numberPhone}
          </span>
          <span>
            {"gender  : "}
            {dataConcat.gender}
          </span>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getContact();
  const dataId = params.id;
  const concatData = data.find((i) => i.id === dataId);
  if (!data) {
    throw json(
      { message: "could not founded" },
      { status: 404, statusText: "Not Founded" },
    );
  }
  return concatData;
}
