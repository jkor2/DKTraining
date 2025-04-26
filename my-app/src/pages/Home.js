import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Tooltip,
  TextField,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { videoData } from "./data";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Home = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",     
    px: 2,                    
    textAlign: "center",      
    pt: 6,
    pb: 6
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

      {/* Main Content */}
      <Container maxWidth="md">
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <img
            src="/pg_brand_png_pg_icon_white_2 (2).png"
            alt="PG Logo"
            style={{
              maxWidth: "75%",
              height: "auto",
              maxHeight: "125px",
            }}
          />
        </Box>

        {/* Welcome Text */}
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Field Manager Training
        </Typography>

        {/* Start Training Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/overview")}
            sx={{
              backgroundColor: "#00b34f",
              color: "#fff",
              textTransform: "none",
              height: "50px",
              width: {
                xs: "90%",
                sm: "390px",
              },
              maxWidth: "400px",
              "&:hover": {
                backgroundColor: "#029241",
              },
            }}
          >
            Start Training
          </Button>
        </Box>

        {/* Secondary Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/quicklinks")}
            sx={{
              backgroundColor: "#005cb9",
              color: "#fff",
              textTransform: "none",
              height: "50px",
              width: {
                xs: "90%",
                sm: "120px",
              },
              maxWidth: "360px",
              "&:hover": {
                backgroundColor: "#014891",
              },
            }}
          >
            Quick Links
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/sops")}
            sx={{
              backgroundColor: "#005cb9",
              color: "#fff",
              textTransform: "none",
              height: "50px",
              width: {
                xs: "90%",
                sm: "120px",
              },
              maxWidth: "360px",
              "&:hover": {
                backgroundColor: "#014891",
              },
            }}
          >
            SOPs
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/faqs")}
            sx={{
              backgroundColor: "#005cb9",
              color: "#fff",
              textTransform: "none",
              height: "50px",
              width: {
                xs: "90%",
                sm: "120px",
              },
              maxWidth: "360px",
              "&:hover": {
                backgroundColor: "#014891",
              },
            }}
          >
            FAQs
          </Button>
        </Box>

        {/* Additional Resources */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={4}
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            Additional Resources
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
              maxWidth: "800px",
              mx: "auto",
              px: 2,
            }}
          >
            {/* DiamondKast */}
            <Tooltip title="Download DiamondKast">
              <Button
                href="https://apps.apple.com/us/app/diamondkast-scoring-app/id1519866089"
                rel="noopener noreferrer"
                target="_blank"
                startIcon={
                  <img
                    src="/thumbnail_Image-1.png"
                    alt="DiamondKast Icon"
                    style={{ width: 24, height: 24 }}
                  />
                }
                sx={{
                  backgroundColor: "#fff",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    backgroundColor: "#ddd",
                  },
                }}
              >
                Download DiamondKast
              </Button>
            </Tooltip>

            {/* YouTube Playlist */}
            <Tooltip title="Check out PG-Training">
              <Button
                href="https://www.youtube.com/@PG-Training/playlists"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<YouTubeIcon sx={{ color: "red" }} />}
                sx={{
                  backgroundColor: "#fff",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    backgroundColor: "#ddd",
                  },
                }}
              >
                YouTube Scoring Playlist
              </Button>
            </Tooltip>

            {/* Google Slides Training */}
            <Tooltip title="Open Google Slides Training">
              <Button
                href="https://docs.google.com/presentation/d/1BxASsD5hNYdDeXwPydeglQuqZBg8iMmvUOO9yDER0Lw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      fill="#fbbc04"
                      d="M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V10z"
                    />
                    <path fill="#fff" d="M14 16h20v16H14z" />
                    <path fill="#fbbc04" d="M18 20h12v8H18z" />
                  </svg>
                }
                sx={{
                  backgroundColor: "#fff",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    backgroundColor: "#ddd",
                  },
                }}
              >
                Google Slides Training
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
