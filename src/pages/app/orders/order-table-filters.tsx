import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ordersFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type OrdersFilters = z.infer<typeof ordersFiltersSchema>

export function OrdersTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { register, handleSubmit, control, reset } = useForm<OrdersFilters>({
    resolver: zodResolver(ordersFiltersSchema),
    defaultValues: {
      orderId: searchParams.get('orderId') ?? '',
      customerName: searchParams.get('customerName') ?? '',
      status: searchParams.get('status') ?? 'all',
    },
  })

  function handleFilter({ orderId, customerName, status }: OrdersFilters) {
    setSearchParams((state) => {
      if (orderId) {
        searchParams.set('orderId', orderId)
      } else {
        searchParams.delete('orderId')
      }

      if (customerName) {
        searchParams.set('customerName', customerName)
      } else {
        searchParams.delete('customerName')
      }

      if (status) {
        searchParams.set('status', status)
      } else {
        searchParams.delete('status')
      }

      searchParams.set('page', '1')

      return state
    })
  }

  function handleRemoveFilters() {
    setSearchParams({})
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        type="text"
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />

      <Input
        type="text"
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { onChange, value, name, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              onValueChange={onChange}
              disabled={disabled}
              name={name}
              value={value}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        type="button"
        variant="outline"
        size="xs"
        onClick={handleRemoveFilters}
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
