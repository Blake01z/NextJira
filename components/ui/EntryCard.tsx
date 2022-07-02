import { useRouter } from 'next/router';

import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { FC, DragEvent, useContext } from 'react';

import { Entry } from '../../interfaces/entry';
import { UIContext } from '../../context/ui/UIContext';
import { dateFunctions } from '../../utils';

interface Props {
    entry: Entry
}

const EntryCard:FC<Props> = ({entry}) => {

    const {startDraggin, endDraggin} = useContext(UIContext)
    const router = useRouter();

    const {description} = entry

    const onDragStart = (e:DragEvent) => {
        e.dataTransfer.setData('text',entry._id)
        startDraggin();
    }

    const onDragEnd = (e:DragEvent) => {
        endDraggin();
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    } 

  return (
    <Card 
        onClick={onClick}
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
                <Typography variant='body2'>{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</Typography>    
            </CardActions>

        </CardActionArea>
    </Card>
  )
}

export {EntryCard}

