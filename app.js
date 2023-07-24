const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

class Room {
    constructor(leader) {
        this.leader = leader;
        this.player = "";
        this.isPlaying = false;
        this.leaderNickname = "";
        this.playerNickname = "";
    }
}


let rooms = {};

io.on("connection", (socket) => {
    console.log("Made socket connection with id: " + socket.id);
    socket.on("updateNickname", (nickname) => {
        // validate input
        socket.nickname = nickname;
    });


    socket.on("startJoining", () => {
        console.log(socket.nickname);
        let room = searchForEmptyRoom();
        console.log(room);
        if (room) {
            // join socket
            socket.join(room.leader);
            rooms[room.leader].isPlaying = true;
            rooms[room.leader].player = socket.id;
            rooms[room.leader].playerNickname = socket.nickname;
            console.log("joined");
            console.table(rooms[room.leader]);
            io.in(room.leader).emit("startGame", [rooms[room.leader].leaderNickname, rooms[room.leader].playerNickname]);
        } else {
            // create new room
            rooms[socket.id] = new Room(socket.id);
            socket.join(socket.id);
            rooms[socket.id].leaderNickname = socket.nickname;
            console.log("created");
            console.table(rooms[socket.id]);
        }
    });
    socket.on("cancelSearch", () => {
        if (rooms[socket.id]) {
            console.log("Deleting room " + socket.id);
            delete rooms[socket.id];
        }
    });
    socket.on("averageSend", time => {
        let room = searchForRoomWhereUser(socket.id);
        if (room) {
            socket.to(room.leader).emit("averageShare", time);
        }
    });
});

const searchForEmptyRoom = () => {
    let isFound = null;
    for (const key in rooms)
        if (rooms[key].isPlaying === false) {
            isFound = rooms[key];
            break;
        }

    return isFound;
}

const searchForRoomWhereUser = (sockeid) => {
    let isFound = null;
    for (const key in rooms)
        if (rooms[key].player == sockeid || rooms[key].leader == sockeid) {
            isFound = rooms[key];
            break;
        }

    return isFound;
}

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
  });