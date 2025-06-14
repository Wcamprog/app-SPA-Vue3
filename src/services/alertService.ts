let alertInstance: any = null

export function registerAlert (instance: any) {
  alertInstance = instance
}

export function useAlert () {
  return {
    showSuccess: (msg: string, timeout = 3000) => alertInstance?.show(msg, 'success', timeout),
    showError: (msg: string, timeout = 3000) => alertInstance?.show(msg, 'error', timeout),
    showInfo: (msg: string, timeout = 3000) => alertInstance?.show(msg, 'info', timeout),
    showWarning: (msg: string, timeout = 3000) => alertInstance?.show(msg, 'warning', timeout),
  }
}
