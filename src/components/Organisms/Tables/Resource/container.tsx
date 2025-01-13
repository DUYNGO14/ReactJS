import { useEffect, useState } from "react"
import { ResourceService } from "@/services"
import TableResourcePresenter from "./presenter"
import { Pagination } from "@/components/Molecules"
import { ToastUtils } from "@/utils"
import { IResource,IPage } from "@/interfaces"
import { usePagination } from "@/hooks"


const TableResourceContainer = () => {
    const [resources, setResources] = useState<IResource.ResourceResponse[]>([])
    const { page, setPage, per_page, setPerPage, total, setTotal, totalPage, setTotalPage } = usePagination()
    const [isShow , setIsShowing] = useState(false)
    const [resource, setResource] = useState<IResource.ResourceResponse|unknown>({})
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getAllResources()
    },[page])
      
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