import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card"


export default function HeroTest() {
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/');
      if (!response.ok) {
        console.log('error');
        return;
      }
      const result = await response.json();
      setData(result.message);
    }
    fetchData();
  }, []);

return (
    <div>
        <h1 className="text-red-500">{data}</h1>
        <Card>
          <h2>Card Title</h2>
          <p>This is a card component.</p>
        </Card>
    </div>
);
}