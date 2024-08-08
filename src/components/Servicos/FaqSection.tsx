import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Accordion,
} from '@mui/material'

import { TitleH3 } from '../../pages/Servicos.styled'
import { FAQWrapper, AccordionsContainer } from './FaqSection.styled'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface FaqSectionProps {
  faqs: { question: string; answer: string }[]
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <FAQWrapper>
      <TitleH3>Perguntas Frequentes</TitleH3>
      <AccordionsContainer>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant='h6'>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1'>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionsContainer>
    </FAQWrapper>
  )
}
