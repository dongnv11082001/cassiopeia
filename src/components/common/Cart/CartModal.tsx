import { Modal } from 'antd'
import React from 'react'
import Cart from './Cart'

type Props = {
  onShow: boolean
  onCancel: () => void
  onOkClick: () => void
}

export const CartModal: React.FC<Props> = ({ onShow, onCancel, onOkClick }) => {
  return (
    <Modal
      title='Your cart'
      visible={onShow}
      onCancel={onCancel}
      onOk={onOkClick}
      style={{ top: 50, right: -312 }}
      mask={false}
      footer={false}
      closable={false}
    >
      <Cart />
    </Modal>
  )
}
