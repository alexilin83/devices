import { ActionFunctionArgs } from "react-router-dom";

export async function createDevice({ request }: ActionFunctionArgs) {
  const { method } = request;
  const formData = await request.formData();
  const res = await fetch("http://localhost:5000/api/devices", {
    method: method,
    body: formData,
  });
  return res.json();
}

export async function updateDevice({ request, params }: ActionFunctionArgs) {
  const { method } = request;
  const { id } = params;
  const formData = await request.formData();
  const res = await fetch(`http://localhost:5000/api/devices/${id}`, {
    method: method,
    body: formData,
  });
  return res.json();
}

export async function getDevices() {
  const res = await fetch("http://localhost:5000/api/devices");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getDevice(id: string) {
  const res = await fetch(`http://localhost:5000/api/devices/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function deleteDevice({ request, params }: ActionFunctionArgs) {
  const { method } = request;
  const { id } = params;
  const res = await fetch(`http://localhost:5000/api/devices/${id}`, {
    method: method,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
