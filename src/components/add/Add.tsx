import { GridColDef } from '@mui/x-data-grid'
import './add.scss'

type Props = {
  slug: string,
  columns: GridColDef[],
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props:Props) => {

  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // add new item
      // anxios.post(`/api/${slug}s`, {fetch the data})

    }

  return (

    <div className='add' style={{ display: props.open ? 'block' : 'none' }}>
      <div className="modal" style={{ display: props.open ? 'block' : 'none' }}>
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h2>Add new {props.slug}</h2>
        <form onSubmit={handleSubmit}>
          {props.columns
          .filter((item)=> item.field !== 'id' && item.field !== 'img')
          .map(column => (
            <div className="item" key={column.field}>
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.field} />
            </div>
          ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add