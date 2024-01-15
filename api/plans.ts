import { BaseApi } from '@/api/base'

export class PlansAPI extends BaseApi {
  getPlans(params: any): Promise<any> {
    return this.get('/plans', { params })
  }

  getSolutions(params: any): Promise<any> {
    return this.get('/solutions', { params })
  }

  deleteSolution(id: any): Promise<any> {
    return this.delete(`/solutions/${id}`)
  }

  createPlan(data: any): Promise<any> {
    return this.post('/plans', data)
  }

  getPlan(id: any): Promise<any> {
    return this.get(`/plans/${id}`)
  }

  updatePlan(id: any, data: any): Promise<any> {
    return this.put(`/plans/${id}`, data)
  }

  updateActualQuantity(id: any, data: any): Promise<any> {
    return this.post(`/plans/${id}/actual-quantity`, data)
  }

  deletePlan(id: any): Promise<any> {
    return this.delete(`/plans/${id}`)
  }

  dispatchCenter(): Promise<any> {
    return this.get('/dispatch-center')
  }

  getOutputGrowthCharts(): Promise<any> {
    return this.get('/dashboard/plan/growth-by-month')
  }

  exportPlan(params: any): Promise<any> {
    return this.get('/plans/export', { responseType: 'blob', params })
  }
}
