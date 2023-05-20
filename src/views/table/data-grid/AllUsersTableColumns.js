// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { DeleteAdmin } from 'Client/request'
import { admin_signin } from 'Client/request'
import { useAuth } from 'src/hooks/useAuth'
import toast from 'react-hot-toast'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const RowOptions = ({ id, newAdmin }) => {
  // ** State
  const { getAuthToken } = useAuth()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    DeleteAdmin(getAuthToken(), id).then(res => {
      if (!res.error) {
        newAdmin(true)
        toast.success(`Successfully Deleted admin ${id}`, {
          position: 'bottom-right'
        })
      } else {
        toast.error(`Error Deleting admin ${id}`, {
          position: 'bottom-right'
        })
      }
    })
  }

  return (
    <>
      <MenuItem onClick={handleClickOpen} sx={{ '& svg': { mr: 2 } }}>
        <Icon icon='tabler:user-off' fontSize={20} />
        Block
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Confirm Block'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Are you sure you want to Block this user?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Block
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const TableColumns = props => {
  // ** States
  const [hideNameColumn, setHideNameColumn] = useState(false)
  const [isDeleteAdmin, setIsDeleteAdmin] = useState(false)
  const { user } = useAuth()

  const columns = [
    {
      flex: 0.12,
      minWidth: 90,
      field: 'Name',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.first_name} {params.row.last_name}
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 120,
      headerName: 'userName',
      field: 'userName',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.user.user_name}
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 120,
      headerName: 'Email',
      field: 'Email',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.user.email}
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 120,
      headerName: 'Phone',
      field: 'Phone',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.phone_number}
        </Typography>
      )
    },
    {
      flex: 0.06,
      minWidth: 120,
      headerName: 'Gender',
      field: 'Gender',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.gender}
        </Typography>
      )
    },
    {
      flex: 0.06,
      minWidth: 120,
      headerName: 'Streams',
      field: 'Streams',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.user._count.Stream}
        </Typography>
      )
    },
    {
      flex: 0.06,
      minWidth: 120,
      headerName: 'Status',
      field: 'Status',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.user.status}
        </Typography>
      )
    },
    {
      flex: 0.125,
      minWidth: 200,
      field: 'actions',
      headerName: 'Actions',
      renderCell: params => <RowOptions id={params.row.user.id} newAdmin={props.newAdmin} />
    }
  ]

  return (
    <>
      <Card>
        <CardHeader title='All Users' />
        <DataGrid
          autoHeight
          rows={props.row || []}
          columns={columns}
          disableSelectionOnClick
          getRowId={row => row.id}
        />
      </Card>
    </>
  )
}

export default TableColumns
