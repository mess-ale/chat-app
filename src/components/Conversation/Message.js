import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { Timeline, TexMsg, ImageMsg, ReplyMsg, LinkMsg, DocMsg } from "./MsgType";

const Message = ({menu}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  return <ImageMsg el={el} menu={menu} />;

                case "doc":
                    return <DocMsg el={el} menu={menu} />
                    
                case "link":
                  return <LinkMsg el={el} menu={menu} />;

                case "reply":
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  return <TexMsg el={el} menu={menu} />;
              }
              break;

            default:
              // Handle any additional or unrecognized message types
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
