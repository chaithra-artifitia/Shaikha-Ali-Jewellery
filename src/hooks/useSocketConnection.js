import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { getSocketUrl } from "../helpers/axiosService";
const adminId = import.meta.env.VITE_APP_ADMIN_ID;

const useSocketConnection = () => {
    const [socketUrl, setSocketUrl] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const fetchSocketUrl = async () => {
            try {
                const storedUrl = localStorage.getItem("socket");
                if (storedUrl) {
                    setSocketUrl(JSON.parse(storedUrl));
                } else {
                    const url = await getSocketUrl();
                    if (url) {
                        localStorage.setItem("socket", JSON.stringify(url));
                        setSocketUrl(url);
                    }
                }
            } catch (error) {
                console.error("Error fetching socket URL:", error);
            }
        };

        fetchSocketUrl();
    }, []);

    useEffect(() => {
        if (!socketUrl) return;
        const newSocket = io(socketUrl);
        setSocket(newSocket);

        newSocket.on("connect", () => console.log("Connected to socket"));
        newSocket.on("disconnect", () => console.log("Disconnected from socket"));
        newSocket.emit("join_room", { roomId: adminId });

        return () => newSocket.disconnect();
    }, [socketUrl]);

    return { socket };
};

export default useSocketConnection;
