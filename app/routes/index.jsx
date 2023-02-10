import { useLoaderData } from "@remix-run/react";
import { getContact } from "../data/listContact";

export default function Index() {
const dataConcat=useLoaderData();

  return (
    <div className="divConList" >
      {dataConcat.map((item,index)=>{
      
      return (
        <div key={item.id} className="divCan">
          <span className="spanIndex">index {index + 1}</span>
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
  
  export async function loader(){
  const data = await getContact();
  return data;
  }