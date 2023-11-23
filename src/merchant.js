import lodash from 'lodash'; // supported
import { format } from 'date-fns'; // unsupported

export default function scrap(input) {
  const today = format(new Date(), "'Today is a' eeee");
  //=> "Today is a Thursday"
  console.log(input);
  return { today, foo: input.foo, bar: lodash.upperCase(input.bar) };
}
