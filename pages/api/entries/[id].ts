import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';


type Data = 
    | { message: string }
    | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;

    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({message: 'El ID no es valido ' + id})
    }

    console.log('continuar')

    switch(req.method){
        case 'PUT':
            return updateEntry(req,res);

        case 'GET':
            return getEntry(req,res);
        
        default:
            return res.status(400).json({message: 'El metodo no existe'});
    }

}

const getEntry = async (req: NextApiRequest, res:NextApiResponse) => {
    const {id} = req.query;

    await db.connect();
    const getEntryById = await Entry.findById(id);
    if(!getEntryById){
        await db.disconnect();
        return res.status(400).json({message: 'No hay entrada en ese ID: ' + id})
    }

    return res.status(200).json(getEntryById)
}

const updateEntry = async (req:NextApiRequest, res:NextApiResponse<Data>) => {
    
    const {id} = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if(!entryToUpdate){
        await db.disconnect();
        return res.status(400).json({message: 'No hay entrada en ese ID: '+ id })
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    try{
        const updatedEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators:true, new:true});
        await db.disconnect();
        res.status(200).json(updatedEntry!); 
    }catch(error:any){
        console.log({error});
        await db.disconnect();
        res.status(400).json({message: error.errors.status.message});
    }

}
