import { useLoaderData } from "react-router-dom";

export async function productLoader({ params }) {
  const id = params.id;
  return { id };
}

export default function Product() {
  const { id } = useLoaderData();
  return <div>{id}</div>;
}
