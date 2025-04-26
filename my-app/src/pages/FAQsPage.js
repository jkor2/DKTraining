import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import pgLogo from "./images/pglogo.png";
import { faqData } from "./data";

const FAQsPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 56, 100, 1)",
        minHeight: "100vh",
        py: 4,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h4">
            Frequently Asked Questions (FAQs)
          </Typography>
          <a href="/">
            <img
              src={pgLogo}
              alt="PG Logo"
              style={{ height: "30px", width: "auto" }}
            />
          </a>
        </Box>

        {/* FAQ List */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "#002B4C",
                color: "#fff",
                borderRadius: 2,
                "&::before": { display: "none" }, // removes default divider line
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#00b34f" }} />}
              >
                <Typography sx={{ fontWeight: "bold", color: "#d0cfcd" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#ccc" }}>  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            mt: 5,
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/sops")}
            sx={{
              flex: 1,
              height: "50px",
              fontSize: { xs: "14px", sm: "16px" },
              textTransform: "none",
              backgroundColor: "#00b34f",
              "&:hover": { backgroundColor: "#029241" },
            }}
          >
            SOP's
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/overview")}
            sx={{
              flex: 1,
              height: "50px",
              fontSize: { xs: "14px", sm: "16px" },
              textTransform: "none",
              backgroundColor: "#fff",
              color: "rgba(0, 56, 100, 1)",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            Back to Overview
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQsPage;
