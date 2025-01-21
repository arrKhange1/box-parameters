import { useForm } from 'react-hook-form';

export type ParametersForm = {
  width: number;
  height: number;
  depth: number;
};

const FULL_RELATIVE_SIZE = 100;

interface ParametersFormProps {
  onParametersFilled: (form: ParametersForm) => void;
}

export const ParametersForm: React.FC<ParametersFormProps> = ({ onParametersFilled }) => {
  const { register, handleSubmit } = useForm<ParametersForm>({
    defaultValues: {
      width: FULL_RELATIVE_SIZE,
      height: FULL_RELATIVE_SIZE,
      depth: FULL_RELATIVE_SIZE,
    },
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
