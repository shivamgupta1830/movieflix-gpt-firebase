export const validateSignInFormData = (email, password) => {
  const validateEmail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (password.length === 0 || email.length === 0)
    return "Please fill all details...!!";

  if (!validateEmail) return "Email is not valid !!";

  if (!validatePassword) return "Password is not valid !!";

  return null;
};

export const validateSignUpFormData = (name, email, password) => {
  const validateEmail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name.length === 0 || password.length === 0 || email.length === 0)
    return "Please fill all details...!!";

  if (!validateEmail) return "Email is not valid !!";

  if (!validatePassword) return "Password is not valid !!";

  return null;
};
