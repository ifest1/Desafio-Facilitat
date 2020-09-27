export const errorMessages = {
    pt: {
      defaultMessage: (displayName) => `${displayName} is not valid` ,
      required: (displayName: string) => `${displayName} is required`,
      maxlength: (displayName: string, errors) => `${displayName} max length is: ${errors.maxlength.requiredLength}` ,
      minlength: (displayName: string, errors) => `${displayName} min length is: ${errors.minlength.requiredLength}` ,
      max: (displayName: string, errors) => `${displayName} max value is: ${errors.max.max}` ,
      min: (displayName: string, errors) => `${displayName} min value is: ${errors.min.min}` ,
      email: (displayName) => `${displayName} is not valid`
    }
}