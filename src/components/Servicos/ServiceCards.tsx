// src/ServiceCard.tsx
import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material'
import styled from 'styled-components'

const CustomCard = styled(Card)`
  margin: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

interface ServiceCardProps {
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <CustomCard>
      <CardContent>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained' color='primary'>
          Saiba Mais
        </Button>
      </CardActions>
    </CustomCard>
  )
}

export default ServiceCard
