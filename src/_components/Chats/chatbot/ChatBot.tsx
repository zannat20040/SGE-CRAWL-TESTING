'use client'
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { RiCloseLargeLine } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import Image from "next/image";
import ClientResponse from "./ResponseTypes/ClientResponse";
import BotTextResponse from "./ResponseTypes/BotTextResponse";
import UniversityList from "./ResponseTypes/UniversityList";
import ErrorResponse from "./ResponseTypes/ErrorResponse";
import useChatData from "@/_components/StudyDestinationComponents/Shared/Components/Hooks/useChatData";
import useAxiosPublic from "@/_components/StudyDestinationComponents/Shared/Components/Hooks/useAxiosPublic";
const ChatBot = ({chatHover, showChat, setShowChat}:{chatHover:boolean, showChat: boolean, setShowChat:React.Dispatch<React.SetStateAction<boolean>>}) => {

  interface Payload{
    fields:{
      type:{
        stringValue:string
      }
    }
  }
  interface BotResponse {
    fulfillmentMessages: Array<{
      payload:Payload
    }>;
    action:string
  }
  // const [chat, setChat] = useState([])
  const [clientMessage, setClientMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [token, setToken] = useState<string |null>(null);
  const [chatData, refetch] = useChatData(token);
  const axiosPublic = useAxiosPublic();
  // const [loading, setLoading] = useState<boolean>(false)
  const generateToken = () => {
    return uuidv4();
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    // setLoading(true)
    e.preventDefault();
    if (clientMessage.trim()) {
      setClientMessage("");
      axiosPublic
        .post("/text_query", { text: clientMessage, userId: "riyaz333" })
        .then((res:{data: {queryText:string}}) => {
          axiosPublic
            .patch(`/chats/${token}`, {
              clientResponse: clientMessage,
              user: "user",
            })
            .then((rest:{status: number}) => {
              setClientMessage("");
              if (rest.status == 200) {
                refetch();
                axiosPublic
                  .patch(`/chats/${token}`, {
                    botResponse: res.data,
                    user: "bot",
                    queryText: res.data.queryText ? res.data.queryText : 0,
                  })
                  .then((res:{status: number}) => {
                    if (res.status == 200) {
                      // setLoading(false)
                      refetch();
                    }
                  });
              }
            });
        });
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("user-token");

    if (savedToken) {
      setToken(savedToken);
      axiosPublic.get(`/chats/${savedToken}`).then((res:{data : boolean}) => {
        if (!res.data && savedToken) {
          axiosPublic
            .post("/chat", {
              id: savedToken,
              messages: [{ clientResponse: clientMessage, user: "user" }],
            })
            .then((clientRes:{status:number}) => {
              if (clientRes.status == 200) {
                refetch();
              }
            });
        }
      });
    } else {
      const newToken = generateToken();
      localStorage.setItem("user-token", newToken);
      setToken(newToken);
      axiosPublic.get(`/chats/${newToken}`).then((res: { data: boolean }) => {
        if (!res.data && newToken) {
          axiosPublic
            .post("/chat", {
              id: token,
              messages: [{ clientResponse: clientMessage, user: "user" }],
            })
            .then((clientRes:{status: number}) => {
              if (clientRes.status == 200) {
                refetch();
              }
            });
        }
      });
    }

    if (showChat && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatData, showChat, token, clientMessage, refetch, axiosPublic]);

  return (
    <div
      className={`${showChat ? "sm:w-[450px] w-[330px]" : "w-0"} z-40    fixed bottom-0 right-0`}
    >
      {token ? (
        <div className="overflow-hidden ">
          <div
            onClick={() => setShowChat(true)}
            className={`${showChat ? "hidden" : "flex flex-col"} cursor-pointer fixed transition-all duration-300 ${chatHover? 'right-14 bottom-28': 'right-10 bottom-10'}`}
          >
            <p
              style={{
                WebkitTransform: `scaleX(-1)`,  
                transform: `scaleX(-1)`,
              }}
              className="text-xl w-12 h-12 text-center flex items-center text-white border-2 border-white rounded-full  p-3 bg-black"
            >
              IA
            </p>
          </div>
          <motion.div
            initial={{ scale: 0, x: 400, y: 400 }}
            animate={
              showChat ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: 400, y: 400 }
            }
            transition={{ duration: 0.2 }}
            className={`bg-blue-100 shadow rounded-2xl max-w-xl lg:ml-auto  m-2 lg:mb-5 lg:mr-5 overflow-hidden`}
          >
            <div className="flex items-center justify-between  bg-blue-900 shadow-lg px-4 py-3">
              <div className="flex  items-start  ">
                <Image width={100} height={100}
                  className="w-[35px] h-auto mx-2 "
                  src="https://i.ibb.co.com/svmtx3c/image-removebg-preview.png"
                  alt=""
                />
                <div className="text-white sm:text-lg text-base font-semibold ">
                  <p>Shabuj Global Education</p>
                  <p className="font-normal text-sm">Chatbot</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className=" hover:bg-gray-100/10 duration-300 rounded-full p-4 text-md font-bold text-white "
              >
                <RiCloseLargeLine />
              </button>
            </div>

            <div
              ref={chatContainerRef}
              className="h-[400px] overflow-hidden  space-y-2 mb-2 overflow-y-scroll"
            >
              {chatData.messages ? (
                <div>
                  {chatData?.messages?.map((message: { clientResponse: string, botResponse: BotResponse, user: string, queryText: string }, index: number) => (
                    <div key={index}>
                      {message?.clientResponse ? (
                        <ClientResponse message={message} />
                      ) :
                        message?.botResponse?.fulfillmentMessages &&
                          message?.botResponse?.action !== "input.unknown" ?
                          <div>
                            {
                              message?.botResponse?.fulfillmentMessages.length == 1 ?

                                <BotTextResponse message={message} />
                                :
                                <div>
                                  {message?.botResponse.fulfillmentMessages[1].payload &&
                                    <div>
                                      {
                                        message?.botResponse.fulfillmentMessages[1].payload.fields.type.stringValue == 'university list' &&
                                        <div>
                                          <UniversityList message={message} />
                                        </div>
                                      }
                                    </div>
                                  }
                                </div>
                            }
                          </div>
                          :
                          message?.botResponse?.action == "input.unknown" ? (
                            <ErrorResponse />
                          ) : (
                            <div className="hidden">s</div>
                          )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-1/2 mx-auto">
                  <p>
                    <span className="loading loading-dots loading-lg">
                    </span>
                  </p>
                </div>
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex px-5 bg-white items-center justify-between h-14 pr-0"
            >
              <input
                placeholder="Ask your question.."
                className="p-2  w-full px-5 rounded-bl-2xl   outline-none"
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                type="text"
              />
              <button
                type="submit"
                className="px-4  text-blue-900 h-full hover:bg-blue-900 hover:text-white duration-300 "
              >
                <BsFillSendFill className="text-2xl " />
              </button>
            </form>
          </motion.div>
        </div>
      ) : (
        <div>
          <p>loading...</p>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
