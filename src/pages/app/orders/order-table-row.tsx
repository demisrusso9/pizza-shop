import { Dialog } from '@radix-ui/react-dialog'
import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhe do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        987654djehd
      </TableCell>

      <TableCell className="text-muted-foreground">há 1 hora</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">Demis Russo</TableCell>

      <TableCell className="font-medium">R$ 142,99</TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-3 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-3 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
