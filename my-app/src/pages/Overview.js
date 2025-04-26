import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { videoData } from "./data";

const Overview = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // Combined searchable data including custom items
  const searchableItems = [
    ...videoData.map((video) => ({
      label: video.title,
      description: video.description,
      path: `/video/${video.id}`,
    })),
    {
      label: "Supplementary Content",
      description:
        "This page provides additional content from the previous training, a majority of this consists of inputting various types of plays and scenarios.",
      path: "/additional",
    },
    {
      label: "Quick Links & Resources",
      description:
        "This page provides quick access to important links and helpful resources. This includes, finding an event, DiamondKast Academy, High School Rules, Youth Rules, High School Pitching Rules, Youth Pitching Rules, and the Youtube Training Playlist",
      path: "/quicklinks",
    },
    {
      label: "Standard Operating Procedures (SOP's)",
      description:
        "This page outlines the SOPs to ensure consistency in daily operations. This includes, Representing Perfect Game, Communicating with Directors, Red Players, Missing Players, Home and Away Swapped, Tie Breaker Rule, Game Protests, Ejections and Fights, Stat Corrections, DiamondKast Stopped Working, Illegal Bats, and Getting Help.",
      path: "/sops",
    },
    {
      label: "FAQs",
      description:
        "This page answers frequently asked customer questions for clarity and quick solutions. This includes, Downloading DiamondKast, Trying a Training Game, Arriving, Late Teams, Late Umpires, Equipment, What to Bring, What to Wear, Logged out DiamondKast, Logged out of Stream Phone, Dropping a Shift, NewTek, Start Time, Incorrect Stats, Incorrect Highlights, and No Livestream.",
      path: "/faqs",
    },
  ];

  // Filter the items based on the search input
  const filteredItems = searchableItems.filter(
    (item) =>
      item.label.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "rgba(0, 56, 100, 1)",
        color: "#fff",
        py: 3,
        position: "relative",
      }}
    >
      {/* Search Toggle Button */}
      <IconButton
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1300,
          backgroundColor: "#00b34f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#029241",
          },
        }}
      >
        <SearchIcon />
      </IconButton>

      {/* Search Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 300, p: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Search</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            sx={{ my: 2 }}
          />
          <Divider />
          <List>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, i) => (
                <ListItem
                  key={i}
                  button
                  onClick={() => {
                    navigate(item.path);
                    setDrawerOpen(false);
                    setSearchInput("");
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    secondary={item.description}
                  />
                </ListItem>
              ))
            ) : (
              <Typography
                sx={{ mt: 2, px: 1 }}
                variant="body2"
                color="text.secondary"
              >
                No matches found.
              </Typography>
            )}
          </List>
        </Box>
      </Drawer>

      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Training Overview
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Choose a video to start watching, or select "Start" at the bottom of
          the page, to begin at video one.
        </Typography>

        {/* Video List */}
        <List sx={{ mt: 0 }}>
          {videoData.map((video) => (
            <ListItem
              key={video.id}
              button
              onClick={() => navigate(`/video/${video.id}`)}
              sx={{
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={video.title}
                secondary={video.description}
                primaryTypographyProps={{
                  sx: { color: "#fff", fontWeight: "bold" },
                }}
                secondaryTypographyProps={{ sx: { color: "#ccc" } }}
              />
            </ListItem>
          ))}
        </List>

        {/* Custom List Items */}
        <List>
          <ListItem
            button
            onClick={() => navigate(`/additional`)}
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Supplementary Content"
              secondary="This page provides additional content from the previous training, a majority of this consists of inputting various types of plays and scenarios."
              primaryTypographyProps={{
                sx: { color: "#fff", fontWeight: "bold" },
              }}
              secondaryTypographyProps={{ sx: { color: "#ccc" } }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => navigate(`/quicklinks`)}
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Quick Links & Resources"
              secondary="This page provides quick access to important links and helpful resources. This includes, finding an event, DiamondKast Academy, High School Rules, Youth Rules, High School Pitching Rules, Youth Pitching Rules, and the Youtube Training Playlist"
              primaryTypographyProps={{
                sx: { color: "#fff", fontWeight: "bold" },
              }}
              secondaryTypographyProps={{ sx: { color: "#ccc" } }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => navigate(`/sops`)}
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Standard Operating Procedures (SOP's)"
              secondary="This page outlines the SOPs to ensure consistency in daily operations. This includes, Representing Perfect Game, Communicating with Directors, Red Players, Missing Players, Home and Away Swapped, Tie Breaker Rule, Game Protests, Ejections and Fights, Stat Corrections, DiamondKast Stopped Working, Illegal Bats, and Getting Help."
              primaryTypographyProps={{
                sx: { color: "#fff", fontWeight: "bold" },
              }}
              secondaryTypographyProps={{ sx: { color: "#ccc" } }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => navigate(`/faqs`)}
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="FAQs"
              secondary="This page answers frequently asked customer questions for clarity and quick solutions. This includes, Arriving, Late Teams, Late Umpires, Equipment, What to Bring, What to Wear, Logged out DiamondKast, Logged out of Stream Phone, Dropping a Shift, NewTek, Start Time, Incorrect Stats, Incorrect Highlights, and No Livestream."
              primaryTypographyProps={{
                sx: { color: "#fff", fontWeight: "bold" },
              }}
              secondaryTypographyProps={{ sx: { color: "#ccc" } }}
            />
          </ListItem>
        </List>

        {/* Navigation Buttons */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={5}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#00b34f",
              color: "#fff",
              textTransform: "none",
              height: "50px",
              width: "300px",
              "&:hover": {
                backgroundColor: "#029241",
              },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => navigate("/video/1")}
            sx={{
              backgroundColor: "#00b34f",
              color: "#fff",
              textTransform: "none",
              height: "50px",
              width: "300px",
              "&:hover": {
                backgroundColor: "#029241",
              },
            }}
          >
            Start
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Overview;
