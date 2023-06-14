import { default as MessageInterface } from '@/store/Message'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'

export default function Message({ text, image, dateCreated, from, to }: MessageInterface) {
  return (
    <Card>
      <CardContent>
        {text ? (
          <Typography>{text}</Typography>
        ) : (
          <Image src={`${image}`} alt='imagem' width={60} height={60} style={{ borderRadius: '50%' }} />
        )}
      </CardContent>
    </Card>
  )
}
