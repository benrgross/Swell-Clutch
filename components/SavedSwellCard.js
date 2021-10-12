import React from "react";

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
}) {
  console.log(spotId, spotName);
  return (
    <div key={spotId}>
      <div className="card" key={spotId}>
        <p>hello</p>
        <h5 className="card-header">{spotName}</h5>
        <div className="card-body">
          <h5 className="card-title">{dateStr}</h5>
          <p>
            <span>surf report: {report}</span>
            <span></span>
          </p>
          <p> swell1: {swell1}</p>
          {swell2 != " " ? <p>{swell2}</p> : ""}
          {swell3 ? <p>swell3</p> : ""}
          {swell4 ? <p>swell4</p> : ""}
          {swell5 ? <p>swell5</p> : ""}
          {swell6 ? <p>swell6</p> : ""}
          <p>
            <span>wind: {wind}</span>
          </p>
          <p>
            <span>tide: {tide}</span>
          </p>
          <button href="#" className="btn btn-primary">
            Update Swell
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedSwellCard;
