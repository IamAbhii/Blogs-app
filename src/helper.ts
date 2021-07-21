import * as Either from 'fp-ts/lib/Either';
import * as io from 'io-ts';
import {UseQueryResult} from "react-query";


export const runDecoder = <T extends io.Props>(type: io.TypeC<T>) => (
  data: unknown,
) => {
  const result = type.decode(data);
  if (Either.isLeft(result)) {
    return new Error('not matched')
  }
  return result.right;
};

export const foldL = <B, A, E>(
  whenLoading: () => B,
  whenSuccess: (result: A) => B,
  whenFailure: (error: E) => B,
) => (rd: UseQueryResult<A, E>): B => {
  if (rd.status === 'loading') return whenLoading();
  if (rd.status === 'success') return whenSuccess(rd.data);
  return  whenFailure(rd.error as E);
};

export const unitJSX: JSX.Element = null!;
