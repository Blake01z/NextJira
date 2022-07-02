import { useState, ChangeEvent, useMemo } from 'react';
import { Grid, 
    Card, 
    CardHeader, 
    CardContent, 
    TextField, 
    CardActions, 
    Button, 
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    capitalize,
    IconButton 
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Layout } from '../../components/layouts';
import { EntryStatus } from '../../interfaces/entry';

const validStatus: EntryStatus[] = ['pending','in-progress','finished'];

const EntryPage = () => {

    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue,touched]);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setStatus(e.target.value as EntryStatus)
    }

    const onSave = () => {

    }

  return (
    <Layout title="... ... ...">
        <Grid
            container
            justifyContent='center'
            sx={{margintTop:2}}
        >   
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardHeader title={`Entrada: ${inputValue}`}
                                subheader={`Creada hace: .... 18m ago`}
                    />
                    <CardContent>
                        <TextField 
                            sx={{marginTop:2, marginBottom:1}}
                            fullWidth
                            placeholder="Nueva Entrada"
                            autoFocus
                            multiline
                            label="Actualizar Entrada"
                            value={inputValue}
                            onBlur={() => setTouched(true)}
                            onChange={onInputChange}
                            helperText={isNotValid && 'Ingrese un valor'}
                            error={isNotValid}
                        />

                        <FormControl>
                            <FormLabel>Estado:</FormLabel>
                            <RadioGroup 
                            row
                            value={status}
                            onChange={onStatusChange}
                            >
                                {
                                    validStatus.map(option => (
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio/>}
                                            label={capitalize(option)}
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>

                    </CardContent>
                    <CardActions>
                        <Button
                            startIcon={<SaveOutlinedIcon/>}
                            variant="contained"
                            fullWidth
                            onClick={onSave}
                            disabled={inputValue.length <= 0}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

        <IconButton sx={{
            position:'fixed',
            bottom:30,
            right:30,
            backgroundColor:'error.dark'
        }}>
            <DeleteOutlineOutlinedIcon/>
        </IconButton>
    </Layout>
  )
}

export default EntryPage