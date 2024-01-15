import type { profileType, languageType, searchType } from '@/types/HeaderTypes'
import ChangeProfileModal from '~/components/auth/ChangeProfileModal.vue'
import ChangePasswordModal from '~/components/auth/ChangePasswordModal.vue'

const profileDD: profileType[] = [
  {
    icon: 'mdi-account-circle',
    title: 'Thông tin',
    // href: '/apps/user/profile',
    modal: ChangeProfileModal,
  },
  {
    icon: 'mdi-account-key',
    title: 'Đổi mật khẩu',
    // href: '/apps/user/change-password',
    modal: ChangePasswordModal,
  },
  // {
  //   icon: 'mdi-cog-play',
  //   title: 'Setting',
  //   href: '',
  // },
]

const languageDD: languageType[] = [
  { title: 'English', subtext: 'UK', value: 'en', avatar: '/images/flag/icon-flag-en.svg' },
]

//
// Search Data
//
const searchSugg: searchType[] = [
  {
    title: 'Trang chủ',
    href: '/',
  },
  {
    title: 'Điều độ phương tiện',
    href: '/apps/dispatch-center',
  },
  {
    title: 'Kế hoạch hôm nay',
    href: '/apps/contacts',
  },
  {
    title: 'Quản lý kế hoạch',
    href: 'products',
  },
  {
    title: 'Khách hàng',
    href: '/apps/ecommerce/checkout',
  },
  {
    title: 'Phương tiện',
    href: '/apps/chats',
  },
  {
    title: 'Hàng hóa',
    href: '/apps/notes',
  },
  {
    title: 'Thông báo',
    href: '/apps/notes',
  },
  {
    title: 'Người dùng',
    href: '/apps/notes',
  },
  {
    title: 'Phân quyền',
    href: '/apps/notes',
  },
]

export { profileDD, languageDD, searchSugg }
