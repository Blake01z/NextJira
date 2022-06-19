import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces/entry';
import { FC } from 'react';

interface Props {
    entry: Entry
}

const EntryCard:FC<Props> = ({entry}) => {
  
    const {description} = entry
  
  return (
    <Card 
        sx={{marginBottom: 1}}
        // Eventos de drag
    >
        <CardActionArea>

            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>{description}</Typography>
            </CardContent>
            
            <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight:2}}>
                <Typography variant='body2'>Hace 18 minutos atras</Typography>    
            </CardActions>

        </CardActionArea>
    </Card>
  )
}

export {EntryCard}