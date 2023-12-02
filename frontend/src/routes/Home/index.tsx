import { useParams, useLoaderData, ActionFunctionArgs, redirect } from "react-router-dom";
import { LatLngBoundsExpression } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MapOverlay from "./components/MapOverlay";
import { createDevice, getDevice } from "../../common/actions";
import "leaflet/dist/leaflet.css";

export async function loader(data: ActionFunctionArgs) {
  const { params } = data;
  const id = params.id || "";
  const device = await getDevice(id);
  return device;
}

export async function action(data: ActionFunctionArgs) {
  const device = await createDevice(data);
  return redirect(`/devices/${device._id}`);
}

export default function HomePage() {
  const { deviceId } = useParams();
  const devices = useLoaderData();

  let devicesWithCoords = [];
  let coords: LatLngBoundsExpression = [[55.935797, 37.275621], [55.568574, 37.932386]];
  if (Array.isArray(devices)) {
    devicesWithCoords = devices.filter((device) => device.latitude && device.longitude);
    coords = devicesWithCoords.map((device) => [device.longitude, device.latitude]);
  }

  return (
    <>
      <div className="h-full">
        <MapContainer
          zoom={10}
          zoomControl={false}
          bounds={coords}
          boundsOptions={{
            paddingTopLeft: [400, 0],
            paddingBottomRight: [0, deviceId ? 1440 * 0.5 : 0],
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {devicesWithCoords.map(({ _id, latitude, longitude }) => (
            <Marker key={_id} position={[longitude, latitude]} />
          ))}
          <MapOverlay />
        </MapContainer>
      </div>
    </>
  );
}
