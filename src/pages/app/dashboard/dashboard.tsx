import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './cards/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './cards/month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './cards/month-orders-amount-card'
import { MonthRevenueCard } from './cards/month-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid gap-4 md:grid-cols-8 lg:grid-cols-9">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
