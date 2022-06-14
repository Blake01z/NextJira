import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../components/layouts';


const HomePage: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Typography variant='h1' color='primary'>Hola Mundo</Typography>
    </Layout>
  )
}

export default HomePage;
