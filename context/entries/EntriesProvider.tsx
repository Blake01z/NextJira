import { FC, useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entry';


export interface EntriesState {
   entries: Entry[]
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente Voluptate eiusmod tempor velit elit. Mollit cillum dolore voluptate.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso Mollit ea cillum consectetur in.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas Esse irure laborum irure qui dolor commodo reprehenderit.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}


export const EntriesProvider:FC = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
         <EntriesContext.Provider
                value={{
                    ...state,
                }}
                 >
                  {children}
         </EntriesContext.Provider>
     )
}