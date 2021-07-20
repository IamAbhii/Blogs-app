import * as Either from 'fp-ts/lib/Either';
import * as io from 'io-ts';


export const runDecoder = <T extends io.Props>(type: io.TypeC<T>) => (
  data: unknown,
) => {
  const result = type.decode(data);
  if (Either.isLeft(result)) {
    return new Error('not matched')
  }
  return result.right;
};