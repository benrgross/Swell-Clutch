import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { server } from "../config";
import styles from "../styles/Home.module.css";

import { UsingJoinColumnOnlyOnOneSideAllowedError } from "typeorm";
import next from "next";

function SavedSwellCard({
  spotName,
  dateStr,
  report,
  swell1,
  swell2,
  swell3,
  swell4,
  swell5,
  swell6,
  tide,
  wind,
  notes,
  spotId,
  id,
}) {
  const router = useRouter();
  const deleteSwell = async (id) => {
    const postId = await {
      id: id,
    };
    const data = await axios.post(`${server}/api/deleteSwell`, postId);

    if (data.status < 300) {
      refreshData();
    } else alert("Sorry something went wrong...");
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <div key={spotId} className="col-lg-4 col-md-4 col-sm-4">
      <div className={styles.card} key={id}>
        <p>Swell</p>
        <h5 className="card-header">{spotName}</h5>
        <div className="card-body">
          <h5 className="card-title">date: {dateStr}</h5>
          <p>
            <span>surf report: {report}</span>
            <span></span>
          </p>
          <p> swell1: {swell1}</p>
          {swell2 != " " ? <p>swell2: {swell2}</p> : ""}
          {swell3 != " " ? <p>swell3 {swell3}</p> : ""}
          {swell4 != " " ? <p>swell4 {swell4}</p> : ""}
          {swell5 != " " ? <p>swell5 {swell5}</p> : ""}
          {swell6 != " " ? <p>swell6 {swell6}</p> : ""}
          <p>
            <span>wind: {wind}</span>
          </p>
          <p>
            <span>tide: {tide}</span>
          </p>

          <button
            value={id}
            onClick={() => deleteSwell(id)}
            className="btn btn-primary"
          >
            Delete Swell
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedSwellCard;
