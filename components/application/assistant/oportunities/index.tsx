import mapboxgl, { RequestParameters, ResourceType } from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import ToggleIcon from '@/components/common/toggle_icon_swap'; 
import { __modelMeta__ } from '@aws-amplify/datastore';
import { use } from 'i18next';
import Map from 'react-map-gl';

import { Feature, FeatureCollection, LineString, Point } from 'geojson';


interface Props {
  onLeftToggle?: () => void;
  onRightToggle?: () => void;
  leftClosed?: boolean;
  rightClosed?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const OportunityMap: React.FC<Props> = ({
  onLeftToggle, 
  onRightToggle, 
  leftClosed = true, 
  rightClosed = true,
  children, 
  }) => {
  
    const [openItems, setOpenItems] = useState(0); // id -> open

    function circleToPolygon(center: any, radiusInKm: any, numVertices = 64) {
      const coordinates = [];
      const distanceX = radiusInKm / (111.32 * Math.cos((center[1] * Math.PI) / 180));
      const distanceY = radiusInKm / 110.574;
    
      let theta, x, y;
      for (let i = 0; i < numVertices; i++) {
        theta = (i / numVertices) * (2 * Math.PI);
        x = distanceX * Math.cos(theta);
        y = distanceY * Math.sin(theta);
    
        coordinates.push([center[0] + x, center[1] + y]);
      }
      
      // Close the loop
      coordinates.push(coordinates[0]);
    
      return {
        type: 'Polygon',
        coordinates: [coordinates],
      };
    }
    
    const geojsonData = {
      type: 'FeatureCollection',
      features: [
        { //USA - EAST COAST
          type: 'Feature',
          properties: { surplus: 10000 * 100},
          geometry: circleToPolygon([-85.617808, 35.866298], 200)
        },
        { //USA - WEST COAST
          type: 'Feature',
          properties: { surplus: 10000 * 100},
          geometry: circleToPolygon([-120.617808, 35.866298], 200)
        },
        { //CANADA - EAST COAST
          type: 'Feature',
          properties: { surplus: 1000 * 100},
          geometry: circleToPolygon([-75.617808, 50.866298], 200)
        },
        { //CANADA - WEST COAST
          type: 'Feature',
          properties: { surplus: 3000 * 100},
          geometry: circleToPolygon([-120.617808, 55.866298], 200)
        },
        { //MIDDLE - America (Mexico, Panama, etc)
          type: 'Feature',
          properties: { surplus: 100 * 100},
          geometry: circleToPolygon([-90.617808, 15.866298], 200)
        },    // Brasilien
        {
          type: 'Feature',
          properties: { surplus: -6000 * 1000 },
          geometry: circleToPolygon([-43.1729, -22.9068], 200)
        },
        // Argentinien
        {
          type: 'Feature',
          properties: { surplus: 2000 * 1000 },
          geometry: circleToPolygon([-58.4173, -34.6118], 200)
        },
        // UK
        {
          type: 'Feature',
          properties: { surplus: -8000 * 1000 },
          geometry: circleToPolygon([-0.1275, 51.5072], 200)
        },
        // Frankreich
        {
          type: 'Feature',
          properties: { surplus: 4000 * 1000 },
          geometry: circleToPolygon([2.3522, 48.8566], 200)
        },
        // Deutschland
        {
          type: 'Feature',
          properties: { surplus: 10000 * 1000 },
          geometry: circleToPolygon([13.4050, 52.5200], 200)
        },
        // Indien - Westküste
        {
          type: 'Feature',
          properties: { surplus: -1000 * 1000 },
          geometry: circleToPolygon([72.8777, 19.0760], 200)
        },
        // Indien - Ostküste
        {
          type: 'Feature',
          properties: { surplus: 2000 * 1000 },
          geometry: circleToPolygon([88.3639, 22.5726], 200)
        },
        // China - Ostküste
        {
          type: 'Feature',
          properties: { surplus: -12000 * 1000 },
          geometry: circleToPolygon([121.4737, 31.2304], 200)
        },
        // Japan
        {
          type: 'Feature',
          properties: { surplus: -9000 * 1000 },
          geometry: circleToPolygon([139.6917, 35.6895], 200)
        },
        // Australien - Ostküste
        {
          type: 'Feature',
          properties: { surplus: -3000 * 1000 },
          geometry: circleToPolygon([153.0251, -27.4698], 200)
        },
        // Australien - Westküste
        {
          type: 'Feature',
          properties: { surplus: 2000 * 1000 },
          geometry: circleToPolygon([115.8575, -31.9505], 200)
        },
        // Südafrika - Kapstadt
        {
          type: 'Feature',
          properties: { surplus: -3000 * 1000 },
          geometry: circleToPolygon([18.4241, -33.9249], 200)
        },
        // Ägypten - Alexandria
        {
          type: 'Feature',
          properties: { surplus: 1000 * 1000 },
          geometry: circleToPolygon([29.9187, 31.2001], 200)
        },
        // Nigeria - Lagos
        {
          type: 'Feature',
          properties: { surplus: -4000 * 1000 },
          geometry: circleToPolygon([3.3792, 6.5244], 200)
        },
        // Somalia - Mogadischu
        {
          type: 'Feature',
          properties: { surplus: 200 * 1000 },
          geometry: circleToPolygon([45.3182, 2.0469], 200)
        },
        // Marokko - Casablanca
        {
          type: 'Feature',
          properties: { surplus: 1000 * 1000 },
          geometry: circleToPolygon([-7.5898, 33.5731], 200)
        }
      ],
        // Add more features as needed
    };

    
    // const data: Feature<LineString> = {
    //   type: "Feature",
    //   properties: {
    //     MT_RELOCATION_DEMAND_TEU: 10000
    //   },
    //   geometry: {
    //     type: "LineString",
    //     coordinates: [
    //       [120.342270,	36.088219	], // Starting point (surplus area)
    //       [55.061183,	25.011232]  // Ending point (demand area)
    //     ]
    //   }
    // };
        
    // const data: FeatureCollection<Point> = {
    //   type: "FeatureCollection",
    //   features: [
    //     {
    //       type: "Feature",
    //       properties: { surplus: 2 },
    //       geometry: { type: "Point", coordinates: [-122.414, 37.776] }
    //     },
    //     {
    //       type: "Feature",
    //       properties: { surplus: 100 },
    //       geometry: { type: "Point", coordinates: [-121.414, 37.776] }
    //     }

    //     // More features
    //   ]
    // };
    const token = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

    useEffect(() => {
      // Initialize map
      const map = new mapboxgl.Map({
        accessToken: token,
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
      });

      map.on('load', function () {
        // map.addSource('floorplan', {
        //   'type': 'geojson',
        //   /*
        //   * Each feature in this GeoJSON file contains values for
        //   * `properties.height`, `properties.base_height`,
        //   * and `properties.color`.
        //   * In `addLayer` you will use expressions to set the new
        //   * layer's paint properties based on these values.
        //   */
        //   'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
        //   });
        //   map.addLayer({
        //   'id': 'room-extrusion',
        //   'type': 'fill-extrusion',
        //   'source': 'floorplan',
        //   'paint': {
        //   // Get the `fill-extrusion-color` from the source `color` property.
        //   'fill-extrusion-color': ['get', 'color'],
           
        //   // Get `fill-extrusion-height` from the source `height` property.
        //   'fill-extrusion-height': ['get', 'height'],
           
        //   // Get `fill-extrusion-base` from the source `base_height` property.
        //   'fill-extrusion-base': ['get', 'base_height'],
           
        //   // Make extrusions slightly opaque to see through indoor walls.
        //   'fill-extrusion-opacity': 0.5
        //   }
        //   });
        // map.addSource('seaports', {
        //   type: 'geojson',
        //   data: data as FeatureCollection<Point>
        // });


        map.addSource('seaports', {
          type: 'geojson',
          data: geojsonData
        });

        map.addLayer({
          id: '3d-bars',
          type: 'fill-extrusion',
          source: 'seaports',
          paint: {
            'fill-extrusion-height': ['abs', ['get', 'surplus']],
            'fill-extrusion-base': 0,
            // 'fill-extrusion-color': 'red',
            'fill-extrusion-color': [
              'interpolate',
              ['linear'],
              ['get', 'surplus'],
              -2000, 'red',
              0, 'yellow',
              2000, 'green'
            ],
            'fill-extrusion-opacity': 0.9,
          },
        });
        
        // map.addLayer({
        //   id: 'relocation-line',
        //   type: 'line',
        //   source: 'seaports',
        //   layout: {
        //     'line-cap': 'round'
        //   },
        //   paint: {
        //     'line-color': [
        //       'interpolate',
        //       ['linear'],
        //       ['line-progress'],
        //       0, 'green',
        //       1, 'red'
        //     ],
        //     'line-width': [
        //       'interpolate',
        //       ['linear'],
        //       ['get', 'MT_RELOCATION_DEMAND_TEU'],
        //       0, 1, // 0 MT_RELOCATION_DEMAND_TEU, line-width 1
        //       100, 10  // 100 MT_RELOCATION_DEMAND_TEU, line-width 10
        //     ],
        //     'line-opacity': 0.8
        //   }
        // });
        
      //   map.addLayer({
      //     id: 'heatmap',
      //     type: 'heatmap',
      //     source: 'seaports',
      //     paint: {
      //       'heatmap-color': [
      //         'interpolate',
      //         ['linear'],
      //         ['heatmap-density'],
      //         0, 'rgba(0,255,0,0)',
      //         0.2, 'lime',
      //         0.4, 'yellow',
      //         0.6, 'orange',
      //         0.8, 'red'
      //       ]
      //     }
      //   });
      // map.addLayer({
      //   id: 'heatmap', 
      //   type: 'heatmap',
      //   source: 'seaports',
      //   paint: {
      //     "heatmap-weight": {
      //       property: 'surplus',
      //       type: 'exponential',
      //       stops: [
      //         [0, 2],
      //         [22, 64]
      //       ]
      //     },
      //     // // increase intensity as zoom level increases
      //     // 'heatmap-intensity': {
      //     //   stops: [
      //     //     [11, 1],
      //     //     [15, 3]
      //     //   ]
      //     // }, 
      //     'heatmap-color': [
      //       'interpolate',
      //       ['linear'],
      //       ['heatmap-density'],
      //       0,'rgba(0,255,0,0)',
      //       0.2, 'lime',
      //       0.4, 'yellow',
      //       0.6, 'orange',
      //       0.8, 'red'
      //     ],
      //     // increase radius as zoom increases
      //     'heatmap-radius': {
      //       stops: [
      //         [11, 64],
      //         [50, 512]
      //       ]
      //     },
      //     // decrease opacity to transition into the circle layer
      //     'heatmap-opacity': {
      //       default: 1,
      //       stops: [
      //         [0, 2],
      //         [50, 512]
      //       ]
      //     }
      //   }
      // });
    });


    }, []);
    
    // useEffect(() => {
    //   const map = new mapboxgl.Map({
    //     // omit the access token here
    //     container: 'my-map',
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     // add this line
    //     transformRequest: (url: string, resourceType: ResourceType) => {
    //       if (resourceType === 'Tile' && url.startsWith('https://api.mapbox.com')) {
    //         return {
    //           url: `/api/mapboxProxy?url=${encodeURIComponent(url)}`,
    //           headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //           },
    //           method: 'POST',
    //           body: `url=${encodeURIComponent(url)}`
    //         } as RequestParameters;
    //       }
    //       return { url } as RequestParameters;
    //     },
    //   });
    // }, []);

    
  
  const justify = leftClosed && rightClosed ? 'justify-between' : (leftClosed ? 'justify-start' : (rightClosed ? 'justify-end' : 'justify-between'));

  return (
  <div className="relative flex flex-col flex-grow max-h-full items-center">      

    <div className={`flex absolute top-0 left-0 w-full pr-2 pb-2 pt-2 z-40 bg-gradient-to-b from-gray-100 to-transparent opacity-75 ${justify}`}> 
      {leftClosed && onLeftToggle && (
        <div className="indicator">
          {/* {openItems > 0 && <span className="indicator-item top-2 badge badge-md h-6 bg-red-500 text-white">{openItems}</span>} */}
          <ToggleIcon className='h-12 w-12' onToggle={onLeftToggle} isOn={false} /> 
        </div>
          )
      }
      {rightClosed && onRightToggle && (
          <div className="indicator">
            {/* {openItems > 0 && <span className="indicator-item top-2 badge badge-md h-6 bg-red-500 text-white">{openItems}</span>} */}
            <ToggleIcon className='h-12 w-12' onToggle={onRightToggle} isOn={false}/>
          </div>
        )
      }
    </div>

    <div id="my-map" style={{ width: "100%", height: "100%" }} />

    {/* <Map
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    />; */}

    </div>
  );
}

export default OportunityMap;
