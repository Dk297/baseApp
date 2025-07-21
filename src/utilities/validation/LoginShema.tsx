import { passwordRegex, usernameRegex } from 'src/contants/regex';
import { InferType, object, string } from 'yup';

export const schema = (t: (key: string) => string) =>
  object().shape({
    username: string()
      .required(t('validate.username'))
      .matches(usernameRegex, t('validate.userMatches')),
    password: string()
      .required(t('validate.password'))
      .matches(passwordRegex, t('validate.passwordMatches')),
  });

const schemaInstance = schema(k => k);
export type IUser = InferType<typeof schemaInstance>;
