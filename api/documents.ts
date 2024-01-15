import { BaseApi } from '@/api/base'

export class DocumentAPI extends BaseApi {
  getDocumentCategories(params: any): Promise<any> {
    return this.get('/document-categories', { params })
  }

  getDocuments(params: any): Promise<any> {
    return this.get('/documents', { params })
  }

  getDocument(id: any): Promise<any> {
    return this.get(`/documents/${id}`)
  }

  createDocument(data: any): Promise<any> {
    return this.post('/documents', data)
  }

  updateDocument(id: any, data: any): Promise<any> {
    return this.post(`/documents/${id}`, data)
  }

  deleteDocument(id: any): Promise<any> {
    return this.delete(`/documents/${id}`)
  }

  downloadDocument(id: any): Promise<any> {
    return this.get(`/documents/${id}/download`, {
      responseType: 'blob',
    })
  }

  bulkDeleteDocuments(data: any): Promise<any> {
    return this.delete('/documents/bulk/destroy', data)
  }
}
