import { $http } from '@/lib/axios'
import type { Output } from './types'

export async function testReq(): Promise<Output> {
  const response = await $http.get<Output>(`/test`)
  return response.data
}
