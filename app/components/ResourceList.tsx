"use client";

import { useEffect, useState } from "react";

const ResourceList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchResources();
  });

  const fetchResources = async () => {
    const res = await fetch("/resources.json");
    const jay = await res.json();
    console.log(jay);
    setItems(jay);
  };

  return (
    <>
      Resources
      {items.map((item: { id: number; title: string; link: string }) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default ResourceList;
