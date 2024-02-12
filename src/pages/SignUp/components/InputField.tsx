import { TextField } from '@mui/material'
import { useField } from 'formik'

interface Props {
  label: string
  name: string
  type: string
  placeholder: string
  fullwidth?: boolean
}

const InputField = ({  ...props }: Props) => {
  const [field, meta] = useField(props)
  console.log(field)
  return (
    <TextField
      fullWidth={props.fullwidth ? true : false}
      label={props.label}
      placeholder={props.name}
      name={props.name}
      type={props.type}
      value={field.value}
      error={Boolean(meta.error) && meta.touched}
      helperText={meta.touched && meta.error}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  )
}
export default InputField
