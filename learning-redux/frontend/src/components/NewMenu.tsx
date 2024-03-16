import { Box, TextField } from "@mui/material"

interface Menu {
    name:string,
    price:number
}

interface prop {
    menu:Menu,
    setMenu:React.Dispatch<React.SetStateAction<Menu>>
}

const NewMenu = ({menu,setMenu}:prop) => {

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"20px",margin:"20px",width:"300px"}}>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=> setMenu({...menu,name:e.target.value})} />
        <TextField id="outlined-basic" label="Price" variant="outlined" type="number" onChange={(e)=> setMenu({...menu,price:parseInt(e.target.value)})} />
    </Box>
  )
}

export default NewMenu