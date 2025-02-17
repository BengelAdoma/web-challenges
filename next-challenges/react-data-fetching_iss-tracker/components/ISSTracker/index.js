import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (URL) => fetch(URL).then((res) => res.json());


  

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
const {data:tracker, error, isloading} = useSWR('https://api.wheretheiss.at/v1/satellites/25544',fetcher,{refreshInterval:5000,});

if(error || !tracker){
  return <div>
  ERROR!!!
  </div>
}
if (isloading){
  return <div>
    Page is loading...
  </div>
}

  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map longitude={tracker.longitude} latitude={tracker.latitude} />
      <Controls
        longitude={tracker.longitude}
        latitude={tracker.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
