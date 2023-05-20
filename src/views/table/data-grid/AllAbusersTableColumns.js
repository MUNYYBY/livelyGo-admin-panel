// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Utils Import
import { EndStream } from 'Client/request'

import toast from 'react-hot-toast'
import moment from 'moment'
import { useRouter } from 'next/router'

const TableColumns = props => {
  const RowOptions = ({ id, status }) => {
    // ** State
    const router = useRouter()

    const handleBlock = () => {
      EndStream(id).then(res => {
        if (!res.error) {
          props.setIsStreamChange(true)
          toast.success(`Sucessfully ended stream with id: ${id}`, {
            position: 'bottom-right'
          })
        } else {
          toast.error(`Error while ending stream with id: ${id}`, {
            position: 'bottom-right'
          })
        }
      })
    }

    return (
      <>
        {status !== 'ended' ? (
          <MenuItem onClick={handleBlock} sx={{ '& svg': { mr: 2 } }}>
            <Icon icon='tabler:user-off' fontSize={20} />
            End
          </MenuItem>
        ) : (
          <></>
        )}
      </>
    )
  }

  const columns = [
    {
      flex: 0.04,
      minWidth: 50,
      headerName: '# id',
      field: 'id',
      valueGetter: params => params.row.id,
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.id}
        </Typography>
      )
    },
    {
      flex: 0.08,
      minWidth: 80,
      headerName: 'Name',
      field: 'Name',
      valueGetter: params => params.row.name,
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.name}
        </Typography>
      )
    },
    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'Description',
      field: 'Description',
      valueGetter: params => params.row.description,
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.description}
        </Typography>
      )
    },
    {
      flex: 0.15,
      minWidth: 110,
      field: 'Live-id',
      valueGetter: params => params.row.liveId,
      renderCell: params => {
        return (
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            {params.row.liveId}
          </Typography>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 110,
      field: 'Status',
      valueGetter: params => params.row.status,
      renderCell: params => {
        return (
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            {params.row.status.toUpperCase()}
          </Typography>
        )
      }
    },
    {
      flex: 0.08,
      minWidth: 110,
      field: 'user',
      valueGetter: params => params.row.user.user_name,
      renderCell: params => {
        return (
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            {params.row.user.user_name}
          </Typography>
        )
      }
    },
    {
      flex: 0.08,
      minWidth: 110,
      field: 'Started on',
      valueGetter: params => params.row.createdAt,
      renderCell: params => {
        return (
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            {moment(params.row.createdAt).fromNow()}
          </Typography>
        )
      }
    },

    {
      flex: 0.125,
      minWidth: 140,
      field: 'actions',
      headerName: 'Actions',
      renderCell: params => <RowOptions id={params.row.id} status={params.row.status} />
    }
  ]

  return (
    <Card>
      <CardHeader title='All Streams' />
      <DataGrid autoHeight rows={props.row || []} columns={columns} disableSelectionOnClick getRowId={row => row.id} />
    </Card>
  )
}

export default TableColumns
