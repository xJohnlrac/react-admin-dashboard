import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import './dataTable.scss'
import { Link } from 'react-router-dom'

type Props = {
  columns: GridColDef[],
  rows: object[],
  slug: string
}

const DataTable = (props: Props) => {

  const handleDelete = (id:number) => {
    //delete the id
    console.log(id + ' has been deleted!');
  }

  const actionColumn: GridColDef = {
    field: 'action', headerName: 'Action', width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>   
      )
    }
  }

  return (
    <div className='dataTable'>
      <DataGrid className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {debounceMs: 500}
          }
        }}
        pageSizeOptions={[5, 10, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnMenu
      />
    </div>
  )
}

export default DataTable