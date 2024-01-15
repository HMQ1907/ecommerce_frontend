import { BaseApi } from '@/api/base'

export class ReportsAPI extends BaseApi {
  getOverDuePlans(params: any): Promise<any> {
    return this.get('/plans/over-due-plans', { params })
  }

  getCustomerPlans(params: any): Promise<any> {
    return this.get('/plans/customers', { params })
  }

  getChartReportQuantity(params: any): Promise<any> {
    return this.get('/plans/quantity-same-period', { params })
  }

  getNewShips(params: any): Promise<any> {
    return this.get('/ships/new', { params })
  }

  getPlanLayouts(params: any): Promise<any> {
    return this.get('/plans/layouts', { params })
  }

  getPlanTrueLate(params: any): Promise<any> {
    return this.get('/plans/status', { params })
  }

  getPlanStatus(params: any): Promise<any> {
    return this.get('/service-requests/report', { params })
  }

  getStatisticalReport(params: any): Promise<any> {
    return this.get('/plans/statistical-table', { params })
  }

  getChartTwoProgress(params: any): Promise<any> {
    return this.get('/plans/progress-per-two-hours', { params })
  }

  getChartProgress(params: any): Promise<any> {
    return this.get('/plans/progress-belong-to-quantity', { params })
  }

  getPerformanceLine(params: any): Promise<any> {
    return this.get('plans/reports/work-performances/timelines', { params })
  }

  getPerformanceBar(params: any): Promise<any> {
    return this.get('plans/reports/work-performances/warehouses', { params })
  }
}
