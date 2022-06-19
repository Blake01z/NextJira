import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces/entry';
import { FC, DragEvent, useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';

interface Props {
    entry: Entry
}

const EntryCard:FC<Props> = ({entry}) => {

    const {startDraggin, endDraggin} = useContext(UIContext)
  
    const {description} = entry

    const onDragStart = (e:DragEvent) => {
        e.dataTransfer.setData('text',entry._id)
        startDraggin();
    }

    const onDragEnd = (e:DragEvent) => {
        endDraggin();
    }
  
  return (
    <Card 
        sx={{marginBottom: 1}}
        // Eventos de drag
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
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

