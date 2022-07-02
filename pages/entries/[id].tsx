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
  return (
    <Layout title="... ... ...">
        <Grid
            container
            justifyContent='center'
            sx={{margintTop:2}}
        >   
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardHeader title="Entrada:"
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
                        />

                        <FormControl>
                            <FormLabel>Estado:</FormLabel>
                            <RadioGroup 
                            row>
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