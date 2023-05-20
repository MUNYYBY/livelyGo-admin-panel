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
import TableColumns from 'src/views/table/data-grid/AllUsersTableColumns'
import { getAllUsers } from 'Client/request'
import { useAuth } from 'src/hooks/useAuth'

const DataGrid = () => {
  const [allAdmins, setAllAdmins] = useState(null)
  const { getAuthToken } = useAuth()
  const [IsNewAdmin, setIsNewAdmin] = useState(false)

  useEffect(() => {
    getAllUsers().then(res => {
      if (!res.error) {
        setAllAdmins(res)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (IsNewAdmin) {
      getAllUsers().then(res => {
        setIsNewAdmin(false)
        if (!res.error) {
          setAllAdmins(res)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IsNewAdmin])

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <MuiLink>Users</MuiLink>
          </Typography>
        }
        subtitle={
          <Typography variant='body2'>
            This page shows all the users in the system. You can perform all the operations and all other things as well
          </Typography>
        }
      />
      <Grid item xs={12}>
        <TableColumns row={allAdmins} newAdmin={setIsNewAdmin} />
      </Grid>
    </Grid>
  )
}

export default DataGrid
