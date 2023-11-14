export async function getDevices() {
  const res = await fetch("http://localhost:5000/api/devices");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}