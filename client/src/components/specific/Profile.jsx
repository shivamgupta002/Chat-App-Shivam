import { Avatar, Stack, Typography } from "@mui/material";
import {Face as FaceIcon,AlternateEmail as UserNameIcon,CalendarMonth as CalendarMonthIcon } from "@mui/icons-material"
import React from "react";
import moment from "moment";

const Profile = () => {
  return (
    <>
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
          sx={{
            width: 200,
            height: 200,
            border: "5px solid white",
            marginBottom: "1rem",
            objectFit: "contain",
          }}
        />

        <ProfileCard heading={"Bio"} text={"hi i am shivam"}  />
        <ProfileCard heading={"Username"} text={"shivamgupta9876"} Icon={<UserNameIcon/>}/>
        <ProfileCard heading={"Name"} text={"Shivam Gupta"} Icon={<FaceIcon/>} />
        <ProfileCard heading={"Joined"} text={moment('2024-04-05T18:30:00.000Z').fromNow()} Icon={<CalendarMonthIcon/>} />
      </Stack>
    </>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
