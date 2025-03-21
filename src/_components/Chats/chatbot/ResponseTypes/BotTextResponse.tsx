import Image from "next/image";
import logo from '../../../../assets/images/Group.svg'
import { motion } from "framer-motion";
interface Payload {
  fields: {
    cards?: {
      listValue: {
        values: {
          structValue: {
            fields: {
              header: { stringValue: string };
              description?: { stringValue: string };
              link: { stringValue: string };
              rank: { stringValue: string };
            };
          };
        }[];
      };
    };
    type: {
      stringValue: string;
    };
  };
}
interface FulfillmentMessage {
  text?: {
    text: string[];
  };
  payload?: Payload;
}

interface BotResponse {
  fulfillmentMessages: FulfillmentMessage[];
}

interface MessageProps {
  message: {
    clientResponse: string;
    botResponse: BotResponse;
  };
}
const BotTextResponse = ({ message }: MessageProps) => {
  return (
    <motion.div
      className="max-w-xs pl-1 lg:pl-2 flex items-start"
      initial={{ scale: 0, x: -300, y: 100 }}
      animate={{ scale: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image width={100} height={100} className="w-[35px] h-auto mr-1  rounded-full p-[2px]"
        src={logo}
        alt=""
      />
      {message?.botResponse?.fulfillmentMessages.length ==
        1 && (
          <div>
            <p
              className={`"ml-auto bg-blue-900 text-white w-fit"      rounded-lg p-2 `}
            >
              {
                message?.botResponse?.fulfillmentMessages[0]
                .text  && message?.botResponse?.fulfillmentMessages[0]
                  .text.text[0]
              }
            </p>
          </div>
        )}
    </motion.div>
  );
};

export default BotTextResponse;