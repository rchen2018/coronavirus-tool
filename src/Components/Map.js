import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import axios from "axios";
import allStates from "./../data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const API = "https://covidtracking.com/api/states";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

class Map extends React.Component {
  state = {
    states: [],
  };

  componentDidMount() {
    axios.get(API).then((response) => {
      const states = response.data;
      this.setState({ states });
    });
  }

  render() {
    return (
      <div>
        <h1>US Positive Cases by State</h1>
        <text>updated daily from The COVID Tracking Project</text>
        <ComposableMap projection="geoAlbersUsa" id="map">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    geography={geo}
                    fill="#DDD"
                  />
                ))}
                {geographies.map((geo) => {
                  const centroid = geoCentroid(geo);
                  const cur = allStates.find((s) => s.val === geo.id);
                  for (const state of this.state.states) {
                    if (state.state === cur.id) {
                      return (
                        <g key={geo.rsmKey + "-name"}>
                          {cur &&
                            centroid[0] > -160 &&
                            centroid[0] < -67 &&
                            (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                              <Marker coordinates={centroid}>
                                <text y="2" fontSize={10} textAnchor="middle">
                                  {state.positive}
                                </text>
                              </Marker>
                            ) : (
                              <Annotation
                                subject={centroid}
                                dx={offsets[cur.id][0]}
                                dy={offsets[cur.id][1]}
                              >
                                <text
                                  x={4}
                                  fontSize={10}
                                  alignmentBaseline="middle"
                                >
                                  {state.positive}
                                </text>
                              </Annotation>
                            ))}
                        </g>
                      );
                    }
                  }
                })}
              </>
            )}
          </Geographies>
        </ComposableMap>
      </div>
    );
  }
}

export default Map;
