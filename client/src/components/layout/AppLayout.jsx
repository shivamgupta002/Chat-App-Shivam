import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { SampleChats } from "../../constants/SampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("DeleteChat", _id, groupChat);
  };
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    return (
      <>
        <Header />
        <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height="100%"
          >
            <ChatList
              chats={SampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} sx={{ height: "100%" }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
              height: "100%",
            }}
          >
            third
          </Grid>
        </Grid>
        <div>Footer</div>
      </>
    );
  };
};

export default AppLayout;
