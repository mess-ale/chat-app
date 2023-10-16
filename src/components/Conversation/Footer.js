import {
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  PaperPlaneTilt,
  Smiley,
} from "phosphor-react";
import { useTheme } from "@emotion/react";
import { Emoji, ImageFile, Files } from "./Inputs";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    height: "2rem",
    borderRadius: "1rem",
  },
}));

const Footer = () => {
  const theme = useTheme();
  const [showIcons, setShowIcons] = useState(false);

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={1} direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"}>
          {showIcons && <Emoji />}
          <IconButton onClick={() => setShowIcons(!showIcons)}>
            <Smiley />
          </IconButton>
          <ImageFile />
        </Stack>
        <Stack>
          <Files />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <StyledInput
          fullWidth
          placeholder="Write a message... "
          variant="filled"
          InputProps={{
            height: 13,
            disableUnderline: true,
            position: "relative",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.background.default,

            endAdornment: (
              <InputAdornment>
                <IconButton></IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
