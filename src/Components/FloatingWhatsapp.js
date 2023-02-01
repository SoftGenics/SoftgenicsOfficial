import React from 'react'

import FloatingWhatsApp from 'react-floating-whatsapp'

const FloatingWhatsapp = () => {
  return (
    <div>
    <FloatingWhatsApp
        phoneNumber="+9199584 80084"
        accountName="Softgenics Pvt."
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
      />
  
    </div>
  )
}

export default FloatingWhatsapp