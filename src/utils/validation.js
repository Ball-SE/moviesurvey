export function validateForm(name, favoriteMovie, email, setNameError, setFavoriteMovieError, setEmailError) {
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    setNameError("โปรดใส่ชื่อของคุณ");
    isValid = false;
  } else {
    setNameError("");
  }

  if (!favoriteMovie) {
    setFavoriteMovieError("กรุณาเลือกหนังที่คุณชอบ");
    isValid = false;
  } else {
    setFavoriteMovieError("");
  }

  if (!email) {
    setEmailError("โปรดใส่อีเมลของคุณ");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    setEmailError("รูปแบบอีเมลไม่ถูกต้อง");
    isValid = false;
  } else {
    setEmailError("");
  }
  return isValid;
}
