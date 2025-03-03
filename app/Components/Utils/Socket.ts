import { io, Socket } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const socket: Socket = io(SOCKET_URL, {});

export default socket;