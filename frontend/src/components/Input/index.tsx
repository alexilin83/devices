interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  name?: string;
}

export default function Input(props: InputProps) {
  const { type, name } = props;

  return (
    <input className="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name={name} type={type} />
  );
}
