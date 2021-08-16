import React from "react";
import { useStoreContext } from "../utils/GlobalState";

function GetSwellBtn() {
  const [state, dispatch] = useStoreContext();

  const getSwell = async () => {
    let date = new Date();
    let timeStamp = date.toISOString();

    const location = {
      lat: state.location.lat,
      lon: state.location.lon,
      timeStamp: timeStamp,
    };

    try {
      const res = await fetch("http://localhost:3000/api/meteomatics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      });
      const data = await res.json();

      console.log(data);

      return {
        swell: res,
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={getSwell} className="btn btn-success">
        get swell
      </button>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const data = await getSwell();

//   return {
//     props: data,
//   };
// };

export default GetSwellBtn;
