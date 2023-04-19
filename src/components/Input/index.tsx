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
}

export const Input = ({
  icon: Icon,
  type,
  placeholder,
  name,
}: InputPropsComponent) => {
  const [isFocused, setIsFocused] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const { register } = useFormContext()
  /* const [isFilled, setIsFilled] = useState(false) */

  const handleInputFocused = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    /* setIsFilled(!!inputRef.current?.value) */
  }, [])

  return (
    <div className="flex gap-[2px] h-16 relative">
      <div className="w-[60px] h-full rounded-l-sm bg-white flex justify-center items-center border border-base-secondary">
        <Icon
          size={24}
          weight="regular"
          className={` ${isFocused ? 'text-product-red' : 'text-base-text'}`}
        />
      </div>
      <input
        id={name}
        autoComplete="on"
        {...register(name)}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        className="placeholder-base-text-details p-4 rounded-r-sm flex-grow border-base-secondary focus:border-0
                focus:outline-none focus:ring-2 focus:ring-product-red"
        type={type === 'password' && !passwordVisibility ? 'password' : 'text'}
      />
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
