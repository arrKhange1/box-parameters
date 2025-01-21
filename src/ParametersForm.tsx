import { useForm } from 'react-hook-form';
import { defaultParameters } from './parameters.constant';

export type ParametersForm = {
  width: number;
  height: number;
  depth: number;
};

interface ParametersFormProps {
  onParametersFilled: (form: ParametersForm) => void;
}

export const ParametersForm: React.FC<ParametersFormProps> = ({ onParametersFilled }) => {
  const { register, handleSubmit } = useForm<ParametersForm>({
    defaultValues: defaultParameters,
  });

  function onSubmit(form: ParametersForm) {
    onParametersFilled(form);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('width')} type="number" placeholder="Width" />
      <input {...register('height')} type="number" placeholder="Height" />
      <input {...register('depth')} type="number" placeholder="Depth" />
      <input type="submit" />
    </form>
  );
};
