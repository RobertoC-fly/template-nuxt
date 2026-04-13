import { testReq as testReqService } from '@/services/api/testReq'
import { useQuery } from '@tanstack/vue-query'

const testReq = () => {
  const { isPending, data, error, isFetching } = useQuery({
    queryKey: ['testReq'],
    queryFn: () =>
      testReqService().catch((error) =>
        showToastError(error?.response?.data?.message),
      ),
  })

  return { isPending, isFetching, data, error }
}

export function useExample() {
  return {
    testReq,
  }
}
