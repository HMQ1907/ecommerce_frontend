import { get } from 'lodash'
import { VxeGlobalRendererHandles } from 'vxe-table'
import { VImg } from 'vuetify/components/VImg'

const resource = 'EmployeeContract'

const props = {
  params: {
    type: Object,
    required: true,
  },
  extension: {
    type: String,
    default: '',
  },
}

const imageType = (url: string, type: string) => {
  switch (type) {
    case 'pdf':
      return '/images/contract/pdf.png'
    case 'doc':
      return '/images/contract/doc.png'
    case 'docx':
      return '/images/contract/doc.png'
    case 'xls':
      return '/images/contract/xls.png'
    case 'xlsx':
      return '/images/contract/xls.png'
    case 'ppt':
      return '/images/contract/ppt.png'
    case 'pptx':
      return '/images/contract/ppt.png'
    default:
      return url
  }
}
export const renderer = {
  [`${resource}ViewImage`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row, column } = params

      return (
        <div class="d-flex justify-center">
          <VImg
            src={
              get(row, column.property) !== null
                ? imageType(get(row, column.property), get(row, 'extension'))
                : '/images/contract/default.png'
            }
            height="30"
            width="30"
          />
        </div>
      )
    },
  },
}
