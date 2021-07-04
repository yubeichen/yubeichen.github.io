import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'gtd.csv'
const row = d => {
  d.coords = d['Location Coordinates'].split(',').map(d => +d).reverse();
  d['Total Dead and Missing'] = + d['Total Dead and Missing'];
  d['Reported Date'] = new Date(d['Reported Date']);
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
