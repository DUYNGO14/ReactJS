import { useEffect, useState } from "react"
import { ResourceService } from "@/services"
import TableResourcePresenter from "./presenter"
import { Pagination } from "@/components/Molecules"
import { ToastUtils } from "@/utils"
import { IResource,IPage } from "@/interfaces"


const TableResourceContainer = () => {
    const [resources, setResources] = useState<IResource.ResourceResponse[]>([])
    const [page, setPage] = useState<number>(1)
    const [per_page, setPerPage] = useState<number>(0)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [isShow , setIsShowing] = useState(false)
    const [resource, setResource] = useState<IResource.ResourceResponse|unknown>({})
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        getAllResources()
    },[page])

    useEffect(() => {
        if (resource && (resource as IResource.ResourceResponse).id) {
          getResourceById(resource as IResource.ResourceResponse);
        }
      }, []);
      
    const getAllResources = async () => {
        setLoading(true)
        const res = await ResourceService.getAll(page)  as unknown as IPage.PageResult<IResource.ResourceResponse>
        if(res && res.data) {
            setResources(res.data)
            setPage(res.page)          
            setPerPage(res.per_page)
            setTotal(res.total)
            setTotalPage(res.total_pages)
        }else{
          ToastUtils.error('Error')
        }
        setLoading(false)
    }
    
    const getResourceById = async (item: IResource.ResourceResponse) => {
        const res = await ResourceService.getById(item.id)
        if(res && res.data) {
            setResource(res.data)
        }else{
            setIsShowing(false)
            ToastUtils.error('Error')
        }
    }
   
    const handleToggle = () => {
        setIsShowing(!isShow)
        setResource({})
      }
    return (
        <>
            <TableResourcePresenter 
            isShow={isShow} 
            resources={resources}
            toggle={handleToggle}
            getResourceById={getResourceById}
            resource={resource}
            isLoading={loading}
            />
            <Pagination page={page} per_page={per_page} total={total} total_pages={totalPage} setPage={setPage}/>
        </>
    )
}
export default TableResourceContainer