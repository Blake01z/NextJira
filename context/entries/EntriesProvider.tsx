import { FC, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import entriesApi from '../../apis/entriesApi';


export interface EntriesState {
   entries: Entry[]
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: []
}

interface Props{
    children?:any
}

export const EntriesProvider:FC<Props> = ({children}:any) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
    const {enqueueSnackbar} = useSnackbar();

    const addNewEntry = async (description:string) => {

        try {
            const {data} = await entriesApi.post<Entry>('/entries',{description});
            dispatch({type: '[Entry] Add-Entry', payload: data})
        } catch (error) {
            console.log(error)
        }


    }

    const updateEntry = async ({_id,description,status}: Entry, showSnackBar = false) => {
        try {
            const {data} = await entriesApi.put<Entry>(`/entries/${_id}`,{description,status});
            dispatch({type: '[Entry] Entry-Updated', payload: data})

            if(showSnackBar){
                enqueueSnackbar('Entrada Actualizada',{ 
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
            }

        } catch (error) {
            console.log({error})
        }
    }

    const deleteEntry = async (_id: any) => {
        try {
            await entriesApi.delete(`/entries/${_id}`)
            dispatch({type: '[Entry] Entry-delete', payload:_id})
        } catch (error) {
            console.log(error);
        }
    }

    const refreshEntries = async () => {
        const {data} = await entriesApi.get<Entry[]>('/entries');
        dispatch({type:'[Entry] Refresh-Data', payload:data});
    }
    
    useEffect(() => {
        refreshEntries();
    },[])
    
    return (
         <EntriesContext.Provider
                value={{
                    ...state,
                    
                    //Methods
                    addNewEntry,
                    updateEntry,
                    deleteEntry
                }}
                 >
                  {children}
         </EntriesContext.Provider>
     )
}