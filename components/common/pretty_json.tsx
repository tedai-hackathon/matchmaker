import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  data: any;
  withLeafeTable?: boolean;
  className?: string;
  titleClassName?: string;
  keyClassName?: string;
  valueClassName?: string;
}

const PrettyJson: React.FC<Props> = ({ 
  title,
  data,
  withLeafeTable=true,
  className
}) => {
  const [jsonObject, setJsonObject] = useState<any>(null);

  useEffect(() => {
    try {
      if(data && typeof data === 'string' && data !== '' && data !== '{}' && data !== '[]') {
        const obj = JSON.parse(data);
        const validObj = deleteNulls(obj);
        if(validObj && Object.keys(validObj).length > 0 ) {
          setJsonObject(validObj);
        }
      }
    } catch (error) {
      console.log('error: ', error);
    }    
  },[data]);

  function deleteNulls(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.filter((el) => el !== null && el !== undefined).map(deleteNulls);
    }
    if (typeof obj === 'object' && obj !== null) {
      const newObj: any = {};
      for (const key of Object.keys(obj)) {
        const val = obj[key];
        if (val === null || (typeof val === 'string' && val === '0')) continue;
        if (typeof val === 'object') {
          newObj[key] = deleteNulls(val);
        } else {
          newObj[key] = val;
        }
      }
      return newObj;
    }
    return obj;
  }
  

  function isLeafObject(obj: any): obj is { [key: string]: string } {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      !Array.isArray(obj) &&
      !Object.values(obj).some((val) => typeof val === 'object')
    );
  }


  function renderLeafAsTable(leaf: { [key: string]: string }) {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(leaf).map((key, idx) => (
              <th key={idx}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(leaf).map((val, idx) => (
              <td key={idx}>{val}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }

  function renderLeafArrayAsTable(leafArray: any[]) {
    const keys = Object.keys(leafArray[0]);
  
    return (
      <table>
        <thead>
          <tr>
            {keys.map((key, idx) => (
              <th key={idx}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leafArray.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {keys.map((key, colIndex) => (
                <td key={colIndex}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }  

  function isLeafArray(arr: any[]): boolean {
    return (
      Array.isArray(arr) &&
      arr.length > 0 &&
      !arr.some((item) => typeof item === 'object' && !isLeafObject(item))
    );
  }

  function renderObject(obj: any): JSX.Element {
    return (
      <div>
        {Object.keys(obj).map((key) => {
          const val = obj[key];
          return (
            <div key={key}>
              <strong>{key}:</strong>
              {isLeafObject(val) ? (
                renderLeafAsTable(val)
              ) : isLeafArray(val) ? (
                renderLeafArrayAsTable(val)
              ) : typeof val === 'object' ? (
                renderObject(val)
              ) : (
                ` ${val}`
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function jsxEntries(obj: any) {
    if (isLeafArray(obj) && withLeafeTable) {
      return renderLeafArrayAsTable(obj);
    } else if (isLeafObject(obj) && withLeafeTable) {
      return renderLeafAsTable(obj);
    } else {
      const res = Object.keys(obj).map((key) => (
        <div className="" key={key}>
          {jsxObjects(key, obj[key])}
        </div>
      ))
      return res;
    }
  }

  function jsxObjects(key: any, obj: any) {
    if(typeof obj === 'object' && obj !== null && (!withLeafeTable || (!isLeafObject(obj) && !isLeafArray(obj)))) {
      const entries = jsxEntries(obj);
      return (
        <div className="pb-3">
          {entries}
        </div>
        );
    } else if (isLeafArray(obj) && withLeafeTable) {
      return renderLeafArrayAsTable(obj);
    } else if (isLeafObject(obj) && withLeafeTable) {
      const noEmptyLeafes = Object.values(obj).filter((val: any) => typeof val === 'string' && val.length > 0);
      if(noEmptyLeafes.length > 1 && withLeafeTable) {
        return renderLeafAsTable(obj);
      } else if (noEmptyLeafes.length > 0) {
        const key = Object.keys(noEmptyLeafes[0])[0]
        const val = Object.values(noEmptyLeafes[0])[0]
        return (
          <div className="px-4">
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {val}
          </div>
        );
      }
    } else {
      return (
        <div className="px-4">
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {obj}
        </div>
      );
    }
  }

  return (
    <div>
      {jsonObject && 
        <div>
          <header className="text-lg font-semibold pt-2">{title}</header>
          {jsxEntries(jsonObject)}
        </div>
      }
    </div>
  );
};

export default PrettyJson;
