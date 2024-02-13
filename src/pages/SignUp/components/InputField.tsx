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
  return (
    <TextField
      fullWidth={props.fullwidth ? true : false}
      value={field.value}
      error={Boolean(meta.error) && meta.touched}
      helperText={meta.touched && meta.error}
      onChange={field.onChange}
      onBlur={field.onBlur}
      {...props}
    />
  )
}
export default InputField
