import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
   sidemenuOpen: boolean;
   isAddingEntry: boolean;
   isDraggin: boolean;
}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDraggin: false,
}


export const UIProvider:FC = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({
            type: 'UI - Open Sidebar'
        })
    }

    const closeSideMenu = () => {
        dispatch({
            type: 'UI - Close Sidebar'
        })
    }

    const setIsAddingEntry = (isAdding: boolean) =>{
        dispatch({
            type: 'UI - set isAddingEntry',
            payload:isAdding
        })
    }

    const startDraggin = () =>{
        dispatch({type: 'UI - Star Dragging'});
    }

    const endDraggin = () =>{
        dispatch({type: 'UI - End Dragging'});
    }

    return (
         <UIContext.Provider
                value={{
                    ...state,

                    //Methods
                    openSideMenu,
                    closeSideMenu,
                    setIsAddingEntry,

                    startDraggin,
                    endDraggin,
                }}
                 >
                  {children}
         </UIContext.Provider>
     )
}