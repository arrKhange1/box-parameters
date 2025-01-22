import { useForm } from 'react-hook-form';
import { defaultParameters } from '../parameters.constant';
import cls from './ParametersForm.module.css';
import { Input } from '../ui/input/Input';

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
    <>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('width')} type="text" placeholder="Width" />
        <Input {...register('height')} type="text" placeholder="Height" />
        <Input {...register('depth')} type="text" placeholder="Depth" />
        <Input type="submit" />
      </form>
    </>
  );
};
