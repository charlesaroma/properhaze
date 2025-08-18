import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CONFETTI_TABLE_DATA from './ConfettiTableData'

const columnHelper = createColumnHelper()


const columns = [
  columnHelper.accessor('description', {
    header: () => 'Description',
    cell: (info) => (
      <div className="whitespace-nowrap">
        {info.getValue()} <button className="text-primary underline">{info.row.original.profile}</button>
      </div>
    ),
  }),
  columnHelper.display({
    id: 'confetti',
    header: () => 'Confetti',
    cell: (info) => (
      <span className="whitespace-nowrap">{info.row.original.currency} {Number(info.row.original.amount).toFixed(2)}</span>
    ),
  }),
  columnHelper.accessor('timestamp', {
    header: () => 'Date',
    cell: (info) => <span className="whitespace-nowrap">{info.getValue()}</span>,
  }),
  columnHelper.display({
    id: 'view',
    header: () => null,
    cell: () => <button className="text-primary underline">View</button>,
  }),
]

const PageSizeSelect = ({ table }) => {
  return (
    <select
      value={table.getState().pagination.pageSize}
      onChange={(e) => table.setPageSize(Number(e.target.value))}
      className="rounded-md border border-white/10 bg-transparent px-2 py-1 text-sm"
    >
      {[8, 10, 20, 30, 40, 50].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  )
}

const ConfettiTable = () => {
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [data] = React.useState(() => [...CONFETTI_TABLE_DATA])

  const filteredData = React.useMemo(() => {
    if (!globalFilter) return data
    const query = globalFilter.toLowerCase()
    return data.filter((row) =>
      [row.description, row.profile, row.currency, row.timestamp, String(row.amount)]
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
  }, [data, globalFilter])

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {},
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: { pageSize: 8 },
    },
  })

  return (
    <section className="w-full">
      <div className="rounded-xl bg-[#FCF8EE] p-6 text-[#1D1E20]">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 p-4">
          <div className="relative w-72">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1D1E20]/60" />
            <input
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="search profile"
              className="w-full rounded-lg border border-[#E8E2D1] bg-white px-8 py-2 text-sm placeholder:opacity-60"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="opacity-80">Show:</span>
            <PageSizeSelect table={table} />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-[#FBF1D4]">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-4 py-3 font-medium text-[#1D1E20]">
                      {header.isPlaceholder ? null : (
                        <div className="select-none">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b border-[#EFE7D6]">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 p-4">
          <button
            className="rounded-md border border-[#E8E2D1] px-2 py-1 text-sm disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <div className="flex items-center gap-2 text-sm">
            {Array.from({ length: table.getPageCount() }).map((_, idx) => (
              <button
                key={idx}
                className={`h-8 w-8 rounded-md border border-[#E8E2D1] text-sm ${
                  table.getState().pagination.pageIndex === idx ? 'bg-[#E7E1D2]' : 'bg-white'
                }`}
                onClick={() => table.setPageIndex(idx)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            className="rounded-md border border-[#E8E2D1] px-2 py-1 text-sm disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConfettiTable