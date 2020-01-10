import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "https://it-blog-posts.herokuapp.com/api/",
  responseType: "json"
});

const Endpoint = EndpointFactory(axiosInstance);

export default {
  roomsStatus: new Endpoint("rooms/status"),
  rooms: new Endpoint(({ id = "" }) => "/rooms/" + id),
  bookings: new Endpoint(({ id = "" }) => "/roomBookings/" + id),
  visitors: new Endpoint(({ id = "" }) => "/visitors/" + id)
};
