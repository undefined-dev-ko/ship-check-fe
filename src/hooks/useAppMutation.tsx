import {
  MutationKey,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { SendRequestOptions, sendRequest } from '../api/client';

export default function useAppMutation<V, T>({
  mutationKey,
  requestOptions,
  onSuccess,
}: {
  mutationKey?: MutationKey;
  requestOptions: SendRequestOptions;
  onSuccess?: (data: any) => void;
}) {
  const queryClient = useQueryClient();

  const mutationResult = useMutation<{ data: T }, any, Partial<V>>({
    mutationKey,
    mutationFn: () => sendRequest(requestOptions),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: mutationKey });
    },
    onSuccess,
  });

  return { ...mutationResult, data: mutationResult.data?.data };
}
