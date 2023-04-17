import MenuPage from "@/components/templates/MenuPage";
import React from "react";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: { data: data },
    revalidate: 1 * 60 * 60, //seconds
  };
}
