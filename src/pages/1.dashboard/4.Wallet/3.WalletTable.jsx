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
import WALLET_TABLE_DATA from './WalletTableData'

const columnHelper = createColumnHelper()

const StatusBadge = ({ type }) => {
  const isCredit = type === 'Credit'
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs ${isCredit ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {type}
    </span>
  )
}

const columns = [
  columnHelper.display({
    id: 'amount',
    header: () => 'Amount',
    cell: (info) => (
      <span className="whitespace-nowrap">{info.row.original.currency} {Number(info.row.original.amount).toFixed(2)}</span>
    ),
  }),
  columnHelper.display({
    id: 'type',
    header: () => 'Credit/Debit',
    cell: (info) => <StatusBadge type={info.row.original.type} />,
  }),
  columnHelper.accessor('description', {
    header: () => 'Description',
    cell: (info) => <span className="whitespace-nowrap">{info.getValue()}</span>,
  }),
  columnHelper.accessor('timestamp', {
    header: () => 'Date',
    cell: (info) => <span className="whitespace-nowrap">{info.getValue()}</span>,
  }),
]

const PageSizeSelect = ({ table }) => {
  return (
    <select
      value={table.getState().pagination.pageSize}
      onChange={(e) => table.setPageSize(Number(e.target.value))}
      className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm"
    >
      {[5, 10, 15, 20, 25, 30].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  )
}

const WalletTable = () => {
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [data] = React.useState(() => [...WALLET_TABLE_DATA])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const filteredData = React.useMemo(() => {
    if (!globalFilter) return data
    const query = globalFilter.toLowerCase()
    return data.filter((row) =>
      [row.description, row.type, row.currency, row.timestamp, String(row.amount)]
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
  }, [data, globalFilter])

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: { pageSize: 10 },
    },
  })

  const pageCount = table.getPageCount()

  return (
    <section className="w-full">
      <div className="rounded-xl bg-white p-6 text-[#1D1E20] border border-gray-300">
        {/* Toolbar */}
        <div className="flex sm:flex-row md:items-center md:justify-between gap-3 p-4">
          <div className="relative w-full md:w-72">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1D1E20]/60" />
            <input
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="search"
              className="w-full rounded-lg border border-gray-300 bg-white px-8 py-2 text-sm placeholder:opacity-60"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="opacity-80">Show:</span>
            <PageSizeSelect table={table} />
          </div>
        </div>

        {/* Desktop/Table view */}
        <div className="overflow-x-auto hidden md:block">
          <table className="min-w-full text-left text-sm">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-[#F9FAFB] border-b border-gray-200">
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
                <tr key={row.id} className="border-b border-gray-200">
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

        {/* Mobile card view */}
        <div className="block md:hidden px-4 pb-2 space-y-3">
          {table.getRowModel().rows.map((row) => {
            const r = row.original
            return (
              <div key={row.id} className="bg-white rounded-sm border border-gray-300 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[#F9FAFB] text-[#1D1E20] font-medium">
                  <span>Type</span>
                  <span>Date</span>
                </div>
                <div className="flex items-center justify-between px-3 py-3 border-b border-gray-200">
                  <StatusBadge type={r.type} />
                  <span className="text-sm">{r.timestamp}</span>
                </div>
                <div className="px-3 py-2 text-sm font-medium bg-[#F9FAFB]">Amount & Description</div>
                <div className="flex items-center justify-between px-3 py-3">
                  <span className="whitespace-nowrap mr-3">{r.currency} {Number(r.amount).toFixed(2)}</span>
                  <span className="text-sm truncate">{r.description}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center md:justify-end gap-2 p-4 flex-wrap">
          {Array.from({ length: Math.min(4, pageCount) }).map((_, idx) => (
            <button
              key={idx}
              className={`h-8 w-8 rounded-md border border-gray-300 text-sm ${
                table.getState().pagination.pageIndex === idx ? 'bg-gray-200' : 'bg-white'
              }`}
              onClick={() => table.setPageIndex(idx)}
            >
              {idx + 1}
            </button>
          ))}
          {pageCount > 4 && <span className="px-2">…</span>}
        </div>
      </div>
    </section>
  )
}

export default WalletTable