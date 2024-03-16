import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box } from "@mui/material"
import NewMenu from "./NewMenu"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addMenu } from "../slice/MenuSlice"

interface prop {
    open:boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NewMenuDialoag = ({open,setOpen}:prop) => {

    const [menu,setMenu] =useState({name:"",price:0})
    useEffect(() =>{
        console.log(menu); 
    },[menu])

    let dispatch = useDispatch()
    
    const handleMenu = () =>{
         setOpen(false)
        dispatch(addMenu({...menu,id:1}))
    }

  return (
    <Box sx={{m:"10px"}}>
        <Button variant="contained" onClick={() => setOpen(true)}>
            ADD MENU
        </Button>
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <NewMenu menu={menu} setMenu={setMenu}/>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={()=> setOpen(false)}>Cancel</Button>
            <Button onClick={() => handleMenu()} variant="contained"   >
                Create
            </Button>
            </DialogActions>
        </Dialog>

    </Box>
  )
}

export default NewMenuDialoag