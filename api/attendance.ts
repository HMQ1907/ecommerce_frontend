import { BaseApi } from '@/api/base'

export class AttendanceAPI extends BaseApi {
  getAttendances(params: any): Promise<any> {
    return this.get('/attendances', { params })
  }

  getEmployees(params: any): Promise<any> {
    return this.get('/attendances/employees', { params })
  }

  getAttendance(id: any): Promise<any> {
    return this.get(`/attendances/${id}`)
  }

  createAttendance(data: any): Promise<any> {
    return this.post('/attendances', data)
  }

  updateAttendance(id: any, data: any): Promise<any> {
    return this.put(`/attendances/${id}`, data)
  }

  deleteAttendance(id: any): Promise<any> {
    return this.delete(`/attendances/${id}`)
  }

  exportAttendance(params: any): Promise<any> {
    return this.get('/attendances/export', { responseType: 'blob', params })
  }
}
