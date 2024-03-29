// ** React Imports
import { useEffect, useState } from 'react'

//** Next imports */
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import TableColumns from 'src/views/table/data-grid/AllAbusersTableColumns'
import { GetAllUsers, getAllAbusers, getAllStreams } from 'Client/request'
import { useAuth } from 'src/hooks/useAuth'

const DataGrid = () => {
  const [allStreams, setAllStreams] = useState([])
  const [isStreamChange, setIsStreamChange] = useState(false)
  const { getAuthToken } = useAuth()

  useEffect(() => {
    getAllStreams().then(res => {
      if (!res.error) {
        setAllStreams(res)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (isStreamChange) {
      setIsStreamChange(false)
      getAllStreams().then(res => {
        if (!res.error) {
          setAllStreams(res)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStreamChange])

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <MuiLink>Streams</MuiLink>
          </Typography>
        }
        subtitle={<Typography variant='body2'>This page shows all the Streams.</Typography>}
      />
      <Grid item xs={12}>
        <TableColumns row={allStreams} allAbusers={[]} setIsStreamChange={setIsStreamChange} />
      </Grid>
    </Grid>
  )
}

export default DataGrid
