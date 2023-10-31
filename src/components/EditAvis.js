'use client'

import dynamic from 'next/dynamic'
// import CKEditor from '@/components/CustomCKEditor'
import { useSnackbar } from '@/components/Snackbar/useSnackbar'
import { save } from '@/actions'
import noop from '@/utils/noop'
import './EditAvis.scss'

const CKEditor = dynamic(() => import('@/components/CustomCKEditor').then((e) => e.default), { ssr: false })

export default function EditAvis({ avis, onStateChange = noop, onFocus = noop, onBlur = noop, ...props }) {
  const [openSnackbar, closeSnackbar] = useSnackbar()

  async function onSave(message) {
    const result = await save(avis.id, message)

    if (result.success) {
      openSnackbar('Message sauvegardé.')
    } else {
      openSnackbar(result.message, { autoHide: false })
    }
  }

  return (
    <CKEditor
      data={avis.message}
      onSave={onSave}
      onStateChange={onStateChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  )
}