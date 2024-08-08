import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyleComponent";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation();
  // const password = useStrongPassword(); // Use for strong password comes from 6pp
  const name = useInputValidation("");
  const bio = useInputValidation("");

  const avatar = useFileHandler("single");

  return (
    <>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form style={{ width: "100%", marginTop: "1rem" }}>
                <TextField
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  required="true"
                  fullWidth="true"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth="true"
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  Or
                </Typography>

                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="text"
                  fullWidth="true"
                  onClick={toggleLogin}
                >
                  Sign up instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">SignUp</Typography>
              <form style={{ width: "100%", marginTop: "1rem" }}>
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    margin={"1rem auto"}
                    display={"block"}
                    width={"fit-content"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  label="Full Name"
                  margin="normal"
                  variant="outlined"
                  required="true"
                  fullWidth="true"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  required="true"
                  fullWidth="true"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  required="true"
                  fullWidth="true"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  required="true"
                  type="password"
                  fullWidth="true"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth="true"
                >
                  SignUp
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  Or
                </Typography>

                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="text"
                  fullWidth="true"
                  onClick={toggleLogin}
                >
                  Login instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Login;
