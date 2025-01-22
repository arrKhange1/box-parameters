import { useForm } from 'react-hook-form';
import cls from './ParametersForm.module.css';
import { Input } from '../ui/input/Input';
import { FieldWrapper } from '../ui/FieldWrapper/FieldWrapper';
import { defaultParameters } from '../constants/parameters.constant';

export type ParametersForm = {
  width: number;
  height: number;
  depth: number;
};

function validateNumeric(sizeParameter: number): boolean | string {
  return sizeParameter > 0 || `Value must be numeric and positive`;
}

interface ParametersFormProps {
  onParametersFilled: (form: ParametersForm) => void;
}

export const ParametersForm: React.FC<ParametersFormProps> = ({ onParametersFilled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ParametersForm>({
    defaultValues: defaultParameters,
    mode: 'onChange',
  });

  function onSubmit(form: ParametersForm) {
    onParametersFilled(form);
  }

  return (
    <>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper title="Width" errorMessage={errors.width?.message}>
          <Input
            {...register('width', {
              required: { value: true, message: 'Width is mandatory' },
              validate: validateNumeric,
              valueAsNumber: true,
            })}
            type="text"
            placeholder="Width"
          />
        </FieldWrapper>
        <FieldWrapper title="Height" errorMessage={errors.height?.message}>
          <Input
            {...register('height', {
              required: { value: true, message: 'Height is mandatory' },
              validate: validateNumeric,
              valueAsNumber: true,
            })}
            type="text"
            placeholder="Height"
          />
        </FieldWrapper>
        <FieldWrapper title="Depth" errorMessage={errors.depth?.message}>
          <Input
            {...register('depth', {
              required: { value: true, message: 'Depth is mandatory' },
              validate: validateNumeric,
              valueAsNumber: true,
            })}
            type="text"
            placeholder="Depth"
          />
        </FieldWrapper>
        <Input type="submit" disabled={!isValid} />
      </form>
    </>
  );
};
