import { useState } from 'react'
import Layout from '../components/Layout'
import NewMenuDialoag from '../components/NewMenuDialoag'

 interface newMenu {
  name:string,
  price:number
}

const MenuPage = () => {

  const [open,setOpen] = useState(false)

  return (
    <div>
        <Layout>
          <NewMenuDialoag open={open} setOpen={setOpen}/>
        </Layout>
    </div>
  )
}

export default MenuPage