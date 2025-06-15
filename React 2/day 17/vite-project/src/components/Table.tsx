import { useState } from "react"
import { clients } from "../utils/data"
import { BiSort } from "react-icons/bi"
import { AiOutlineDown } from "react-icons/ai"
import { MdSort } from "react-icons/md"

const Table = () => {
  const [projects, setProjects] = useState(clients);
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [sortConfig, setSortConfig] = useState<{key: string; direction: string} | null>(null)
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [filters, setFilters] = useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: ""
  });

  const sortProjects = (key: string) => {
    let sortedProjects = [...projects];

    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      sortedProjects.sort((a: any, b: any) => (a[key] > b[key] ? -1 : 1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortedProjects.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }

    setProjects(sortedProjects);
  };

  const handleSortOptionClick = (key: string) => {
    sortProjects(key)
    setDropDownVisible(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      searchQuery === "" ||
      Object.values(project).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesName =
      filters.name === "" ||
      project.client.toLowerCase().includes(filters.name.toLowerCase());

    const matchesCountry =
      filters.country === "" ||
      project.country.toLowerCase().includes(filters.country.toLowerCase());

    const matchesEmail =
      filters.email === "" ||
      project.email.toLowerCase().includes(filters.email.toLowerCase());

    const matchesProject =
      filters.project === "" ||
      project.project.toLowerCase().includes(filters.project.toLowerCase());

    const matchesStatus =
      filters.status === "" ||
      project.status.toLowerCase().includes(filters.status.toLowerCase());

    return matchesSearch && matchesName && matchesCountry && matchesEmail && matchesProject && matchesStatus;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const curreentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="p-4 ml-16 w-full flex justify-center">
      <div className="w-[90%]">
        <div className="flex items-center mb-5">
          <div className=" relative">
            <button onClick={() => setDropDownVisible(!dropDownVisible)} className="border border-gray-700 flex items-center justify-center text-white p-2 rounded">
              <BiSort className="mr-[0.3rem]" /> Sort
              <AiOutlineDown className="ml-2" />
            </button>

            {dropDownVisible && (
              <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-600 rounded shadow-lg">
                <button onClick={() => handleSortOptionClick('client')} className="block px-4 py-2 text-white w-full hover:bg-gray-700">Name</button>
                <button onClick={() => handleSortOptionClick('country')} className="block px-4 py-2 text-white w-full hover:bg-gray-700">country</button>
                <button onClick={() => handleSortOptionClick('date')} className="block px-4 py-2 text-white w-full hover:bg-gray-700">date</button>
              </div>
            )}
          </div>

          <div className=" relative ml-4 w-full">
            <button onClick={() => setFiltersVisible(!filtersVisible)} className="border border-gray-700 flex items-center justify-center text-white p-2 rounded">
              <MdSort className="mr[0.3rem]" /> Filters
              <AiOutlineDown className="ml-2"/>
            </button>

            {filtersVisible && (
              <div className="absolute top-full left-0 mt-2 bg-gray-800 border-border-gray-700 rounded shadow-lg p-4 w-[20rem] z-10">
                <div className="mb-2">
                  <label className="block text-white">filter by name:</label>
                  <input 
                    type="text" 
                    value={filters.name} 
                    onChange={handleFilterChange}
                    name="name" 
                    className="bg-gray-900 text-white rounded p-2 w-full"/>
                </div>

                <div className="mb-2">
                  <label className="block text-white">filter by Country:</label>
                  <input 
                    type="text" 
                    value={filters.country} 
                    onChange={handleFilterChange}
                    name="country" 
                    className="bg-gray-900 text-white rounded p-2 w-full"/>
                </div>

                <div className="mb-2">
                  <label className="block text-white">filter by email:</label>
                  <input 
                    type="text" 
                    value={filters.email} 
                    onChange={handleFilterChange}
                    name="email" 
                    className="bg-gray-900 text-white rounded p-2 w-full"/>
                </div>

                <div className="mb-2">
                  <label className="block text-white">filter by Project:</label>
                  <input 
                    type="text" 
                    value={filters.project} 
                    onChange={handleFilterChange}
                    name="project" 
                    className="bg-gray-900 text-white rounded p-2 w-full"/>
                </div>

                <div className="mb-2">
                  <label className="block text-white">filter by status:</label>
                  <input 
                    type="text" 
                    value={filters.status} 
                    onChange={handleFilterChange}
                    name="status" 
                    className="bg-gray-900 text-white rounded p-2 w-full"/>
                </div>
              </div>
            )}
          </div>
        </div>

        <table className="w-full table-auto border border-gray-700 text-white">
          <thead className="bg-gray-800 text-white font-semibold">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Project Name</th>
              <th className="px-4 py-2 text-left">Task Progress</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {curreentProjects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-800 transition duration-200">
                <td className="px-4 py-2">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-[3rem] h-[3rem] object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{project.client}</td>
                <td className="px-4 py-2">{project.country}</td>
                <td className="px-4 py-2">{project.email}</td>
                <td className="px-4 py-2">{project.project}</td>
                <td className="px-4 py-2">
                  <div className="w-24 h-2 bg-gray-700 rounded">
                    <div
                      className="h-2 bg-green-500 rounded"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-2 w-[10rem]">
                  <span>{project.status}</span>
                </td>
                <td className="px-4 py-2">{project.date}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-400 hover:underline">Edit</button>
                  <button className="text-red-400 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
            Previous
          </button>
          <span className="px-4 py-2 text-white">Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className="px-4 py-2 bg-gray-700 text-white rounded ml-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table;