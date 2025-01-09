import { IResource } from "@/interfaces"
import { Box, Button } from "@/components/Atoms"
import { ModalDetail } from "@/components/Organisms/Modal";


interface UserPresenterProps {
    resources: IResource.ResourceResponse[];
    toggle:()=> void;
    isShow : boolean
    getResourceById : (resource: IResource.ResourceResponse) => void
    resource : IResource.ResourceResponse | unknown
    isLoading: boolean
}
const TableResourcePresenter = ({ resources, toggle, getResourceById, isShow,resource,isLoading}: UserPresenterProps) => {
    return (
        <>
            <Box className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12">
                <Box className="items-start justify-center md:flex">
                    <Box className="max-w-lg">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                            List Resources
                        </h3>
                    </Box>
                   
                </Box>
                {resources.length === 0 && !isLoading && (<div className="flex justify-center items-center h-64">No data</div>)}
                {isLoading ? (
                     <div className="flex justify-center items-center h-64">
                     <svg
                         className="animate-spin h-10 w-10 text-indigo-600"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                     >
                         <circle
                             className="opacity-25"
                             cx="12"
                             cy="12"
                             r="10"
                             stroke="currentColor"
                             strokeWidth="4"
                         ></circle>
                         <path
                             className="opacity-75"
                             fill="currentColor"
                             d="M4 12a8 8 0 018-8v8H4z"
                         ></path>
                     </svg>
                 </div>
                ):(
                    <>
                         <Box className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                            <table className="w-full table-auto text-sm text-left">
                                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                    <tr>
                                        <th className="py-3 px-6">ID</th>
                                        <th className="py-3 px-6">Name</th>
                                        <th className="py-3 px-6">Year</th>
                                        <th className="py-3 px-6">Color</th>
                                        <th className="py-3 px-6">Pantone Value</th>
                                        <th className="py-3 px-6 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 Boxide-y">
                                    {
                                        resources.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.year}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input disabled={true} type="color" value={item.color} className="w-20" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.pantone_value}</td>
                                                <td className="text-center px-6 whitespace-nowrap">
                                                    <Button
                                                        onClick={() => { toggle(); getResourceById(item) }}
                                                        className="py-2 leading-none px-3 font-medium text-lime-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                                                    >
                                                        View
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </Box>
                        <ModalDetail.ModalResourceDetail isShow={isShow} toggle={toggle} resource={resource}/>
                    </>
                )}
            </Box>
        </>
    )
}

export default TableResourcePresenter