export const showToastError = (errorResponse: string) => {
  const toast = useToast()

  toast.add({
    title: 'Ih, rapaz! Algo deu errado.',
    description: errorResponse,
    color: 'error',
  })
}
