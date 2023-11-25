import { ActionFunctionArgs } from "react-router-dom";

export async function createDevice({ request }: ActionFunctionArgs) {
  const { method } = request;
  const formData = await request.formData();
  const device = await fetch("http://localhost:5000/api/devices", {
    method: method,
    body: formData,
  });
  return { device };
}

export async function getDevices() {
  const res = await fetch("http://localhost:5000/api/devices");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
