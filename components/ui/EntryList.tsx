import { FC, useContext, useMemo, DragEvent } from 'react';
import { Paper, List } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

import styles from './EntryList.module.css'


interface Props {
    status: EntryStatus
}

const EntryList:FC<Props> = ({status}) => {

    const {entries, updateEntry} = useContext(EntriesContext);
    const {isDraggin, endDraggin} = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status) ,[entries])

    const allowDrop = (e:DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const onDropEntry = (e:DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('text');

        const entry = entries.find( e => e._id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDraggin();
    }



  return (
    <div
        onDrop={onDropEntry}
        onDragOver={allowDrop}
        className={isDraggin ? styles.dragging : ''}
    >
        <Paper sx={{height: 'calc(100vh - 180px)', overflowY:'auto', backgroundColor:'transparent', padding: '1px 5px'}}>
            <List sx={{opacity: isDraggin ? 0.2 : 1, transition: 'all .3s ease-in-out'}}>
                {
                    entriesByStatus.map(entry => (
                        <EntryCard key={entry._id} entry={entry}/>
                    ))
                }
            </List>
        </Paper>
    </div>
  )
}

export {
    EntryList
}