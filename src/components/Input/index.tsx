import {
  InputHTMLAttributes,
  ComponentType,
  useState,
  useCallback,
} from 'react'
import { Eye, EyeSlash, IconProps } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
interface InputPropsComponent extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconProps>
  placeholder: string
  type: 'text' | 'password'
  name: string
  disabled?: boolean
}

export const Input = ({
  icon: Icon,
  type,
  placeholder,
  name,
  disabled,
}: InputPropsComponent) => {
  const [isFocused, setIsFocused] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const { register } = useFormContext()

  const handleInputFocused = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const inputProps = {
    id: name,
    autoComplete: 'on',
    onFocus: handleInputFocused,
    onBlur: handleInputBlur,
    className:
      'placeholder-base-text-details p-4 rounded-r-sm flex-grow border-base-secondary focus:border-0 focus:outline-none focus:ring-2 focus:ring-product-red disabled:bg-base-hover',
    type: type === 'password' && !passwordVisibility ? 'password' : 'text',
    placeholder,
    disabled,
  }

  return (
    <div className="flex gap-[2px] laptop:h-16 mobile:h-10 relative ">
      <div className="w-[60px] h-full rounded-l-sm bg-white flex justify-center items-center border border-base-secondary">
        <Icon
          size={24}
          weight="regular"
          className={` ${isFocused ? 'text-product-red' : 'text-base-text'}`}
        />
      </div>

      <input {...inputProps} {...register(name)} />

      {type === 'password' &&
        (!passwordVisibility ? (
          <Eye
            size={24}
            onClick={() => setPasswordVisibility(!passwordVisibility)}
            className="absolute right-5 top-1/3 text-base-text cursor-pointer"
          />
        ) : (
          <EyeSlash
            size={24}
            onClick={() => setPasswordVisibility(!passwordVisibility)}
            className="absolute right-5 top-1/3 text-base-text cursor-pointer"
          />
        ))}
    </div>
  )
}
