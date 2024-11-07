import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WaterBar from "./WaterBar";
import FoodBar from "./FoodBar";

const baseURL = "http://localhost:5001";

type ControlProps = {
  ws: WebSocket;
};

export default function Control({ ws }: ControlProps) {
  const [waterLevel, setWaterLevel] = useState(0);
  const [foodLevel, setFoodLevel] = useState(0);

  function sendMessage(message: string) {
    console.log("Sending message: ", message);
    axios.post(`${baseURL}/message`, { message: message }).then((response) => {
      console.log(response.data);
    });
  }

  function parseData(data: string) {
    const [cmd, value] = data.split(": ");

    if (cmd === "Water") {
      setWaterLevel(parseInt(value));
    } else if (cmd === "Food") {
      setFoodLevel(parseInt(value));
    }
  }

  ws.onmessage = function (event) {
    console.log("Message Received");
    event.data.text().then((dataReceived: string) => parseData(dataReceived));
  };

  return (
    <>
      <div className="h-2/3 flex justify-between items-center px-4">
        <WaterBar level={waterLevel} />
        <div className="w-3/4 h-72 flex flex-col items-center">
          <p className="text-xl font-titan text-arena mb-3">
            Tu mascota está en "Habitación 1"
          </p>
          <div className="w-3/4 h-5/6 border-4 border-solid border-marron-900"></div>
        </div>

        <FoodBar level={foodLevel} />
      </div>
      <footer className="flex justify-around p-5 items-center">
        <div
          className="w-20 h-20 bg-arena rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={() => sendMessage("ban")}
        >
          <FontAwesomeIcon icon="ban" className="text-4xl text-marron-900" />
        </div>
        <div
          className="w-28 h-28 bg-arena rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={() => sendMessage("gift")}
        >
          <FontAwesomeIcon icon="gift" className="text-4xl text-marron-900" />
        </div>
        <div
          className="w-28 h-28 bg-arena rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={() => sendMessage("music")}
        >
          <FontAwesomeIcon icon="music" className="text-4xl text-marron-900" />
        </div>
        <div
          className="w-20 h-20 bg-arena rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={() => sendMessage("mute")}
        >
          <FontAwesomeIcon
            icon="volume-mute"
            className="text-4xl text-marron-900"
          />
        </div>
      </footer>
      {/* <button */}
      {/*   className="bg-arena text-white p-3 font-black uppercase" */}
      {/*   onClick={sendMessage} */}
      {/* > */}
      {/*   Send Message{" "} */}
      {/* </button> */}
    </>
  );
}
