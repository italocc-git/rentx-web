import { useEffect, useState } from 'react'
import { EmailValidationContent } from './EmailValidationContent'
import { NewPasswordContent } from './NewPasswordContent'
import carImageSignPage from '@/assets/car-image-signin.png'

export const PasswordRecovery = () => {
  const [content, setContent] = useState<'emailValidation' | 'resetPassword'>(
    'emailValidation',
  )
  useEffect(() => {
    const params = new URLSearchParams(location.search)

    if (params.has('mode')) {
      setContent('resetPassword')
    }
  }, [])
  return (
    <div className="min-h-screen bg-base-main py-8 mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20">
      <div className="flex items-center justify-between mobile:flex-col-reverse mobile:gap-20 laptop:flex-row desktop:gap-40">
        <img
          src={carImageSignPage}
          alt="image-sign-page"
          className="tablet:max-w-md desktop:max-w-full"
        />
        {content === 'emailValidation' ? (
          <EmailValidationContent />
        ) : (
          <NewPasswordContent />
        )}
      </div>
    </div>
  )
}
