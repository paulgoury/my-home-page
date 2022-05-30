import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MyAccordion({ title, children }) {
  const StyledAccordion = styled(Accordion)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(96, 96, 96, 0);
  `;

  return (
    <StyledAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
}

export default MyAccordion;
